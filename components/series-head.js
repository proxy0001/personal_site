
import React from 'react'
import styles from '../styles/Home.module.css'
import {AiOutlineExpandAlt, AiOutlineShrink} from 'react-icons/ai'



export default class SeriesHead extends React.Component {
  constructor (props) {
    super(props);
    // console.log(props.isActive)
    this.state = {
      isAlwaysActive: props.isAlwaysActive || false,
      isActive: props.isAlwaysActive || props.isActive || false,
      isShowDescription: false,
      isShowCollapseBtn: false,
    };
  }

  setShowCollapseBtn = (e) => {
    let isShowCollapseBtn = e === undefined ? !this.state.isShowCollapseBtn : e;
    this.setState({isShowCollapseBtn});
    // console.log(this.state.isShowCollapseBtn);
  }

  setShowDescription = (e) => {
    let isShowDescription = e === undefined ? !this.state.isShowDescription : e;
    this.setState({isShowDescription});
    // console.log(this.state.isShowDescription);
  }

  setIsActive = (e) => {
    let isActive = e === undefined ? !this.state.isActive : e;
    this.setState({isActive});
    console.log(this.state.isActive);
  }

  listenToScroll = () => {
    let isShowCollapseBtn = window.pageYOffset >= 300;
    this.setShowCollapseBtn(isShowCollapseBtn);
    if (!this.state.isAlwaysActive) this.setIsActive(isShowCollapseBtn);
    if (!isShowCollapseBtn) this.setShowDescription(false);
  }

  componentDidMount () {
    window.addEventListener('scroll', this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  render () {
    return (
      <div className={`${styles.seriesHead} ${this.state.isActive ? '' : styles.hidden}`}>
        <h2>{this.props.title}</h2>
        <h2>{this.state.isShowDescription}</h2>
        {
          this.state.isShowCollapseBtn ? 
            <div className={styles.collapseBtn}
              onClick={() => this.setShowDescription()}
            >
              {this.state.isShowDescription ? <AiOutlineShrink/> : <AiOutlineExpandAlt/>}
            </div>
          : null
        }

        {
          this.state.isShowDescription ? <div className={styles.seriesDescription}>
          <p>{this.props.description}</p>
        </div> : null
        }
        
      </div>
    );
  }
} 