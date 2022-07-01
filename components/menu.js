
import React from 'react';
import styles from 'styles/Home.module.css';
import {VscMenu} from 'react-icons/vsc';
import { withRouter } from 'next/router';
import { menuOptions } from 'store/state';

export default withRouter(class Menu extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isActive: false,
      current_path: this.props.router.pathname,
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
        <VscMenu className={styles.linkIcon} />
        {
          this.state.isActive ?
            <div className={styles.menuOptions}>
              {menuOptions.map((x, i) =>
                <div
                  className={`
                    ${styles.menuOption}
                    ${x.isSystemColor === true ? styles.systemColor : ''}
                    ${x.link === this.state.current_path ? styles.isCurrent : ''}
                  `}
                  key={i}
                  style={{backgroundColor: x.link === this.state.current_path ? x.representColor : null}}
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