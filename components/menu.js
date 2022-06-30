
import React from 'react';
import styles from 'styles/Home.module.css';
import {VscMenu} from 'react-icons/vsc';
import { withRouter } from 'next/router';
import { menuOptions } from 'store/series';

export default withRouter(class Menu extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isActive: false,
    };

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount () {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount () {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside (event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setActive(false);
    }
  }

  setActive = (e) => {
    let isActive = e === undefined ? !this.state.isActive : e;
    this.setState({isActive});
  }

  render () {
    return (
      <div className={styles.menu}
        ref={this.wrapperRef}
        onClick={() => this.setActive()}
      >
        {
          this.state.isActive ? <div className={styles.menuMask}></div> : null
        }
        <VscMenu className={styles.linkIcon} />
        {
          this.state.isActive ?
            <div className={styles.menuOptions}>
              {menuOptions.map((x, i) =>
                <div className={`${styles.menuOption} ${i === 0 ? styles.systemColor : ''}`} key={i}
                  style={{backgroundColor: x.representColor}}
                  onClick={() => this.props.router.push(x.link)}
                >
                  {x.icon} {x.text}
                </div>
              )}
            </div>
          : null
        }
      </div>
    );
  }
})