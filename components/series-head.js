
import React from 'react';
import styles from '../styles/Home.module.css';
import {AiOutlineExpandAlt, AiOutlineShrink} from 'react-icons/ai';

export default class SeriesHead extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isAlwaysActive: props.isAlwaysActive || false,
      isActive: props.isAlwaysActive || props.isActive || false,
      isShowDescription: false,
      isShowCollapseBtn: false,
    };

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  setShowCollapseBtn = (e) => {
    let isShowCollapseBtn = e === undefined ? !this.state.isShowCollapseBtn : e;
    this.setState({isShowCollapseBtn});
  }

  setShowDescription = (e) => {
    let isShowDescription = e === undefined ? !this.state.isShowDescription : e;
    this.setState({isShowDescription});
  }

  setActive = (e) => {
    let isActive = e === undefined ? !this.state.isActive : e;
    this.setState({isActive});
  }

  listenToScroll = () => {
    let isShowCollapseBtn = window.pageYOffset >= 300;
    this.setShowCollapseBtn(isShowCollapseBtn);
    if (!this.state.isAlwaysActive) this.setActive(isShowCollapseBtn);
    if (!isShowCollapseBtn) this.setShowDescription(false);
  }

  componentDidMount () {
    window.addEventListener('scroll', this.listenToScroll);
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside (event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setShowDescription(false);
    }
  }

  render () {
    return (
      <div className={`${styles.seriesHead} ${this.state.isActive ? '' : styles.hidden}`}
        ref={this.wrapperRef}
        style={{backgroundColor: this.props.representColor}}
      >
        <h2>{this.props.icon}{this.props.title}</h2>
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