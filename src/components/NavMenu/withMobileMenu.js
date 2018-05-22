import React, { Fragment } from 'react';
import Icon from '../Icon/Icon';
import style from './withMobile.css';

export const withMobileMenu = (Component) => {
  return class NavMenuWithMobile extends React.Component {
    state = {
      isOpen: false,
      mobileStyles: {}
    };

    handleMenuIconClick = (e) => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };

    handleMobileLinkClick = () => {
      this.setState({
        isOpen: false
      });
    };

    handleResize = () => {
      if ( window.matchMedia('(max-width: 800px)').matches ) {
        this.setState({
          mobileStyles: {
            width: '100vw',
            height: '100vh',
            position: 'fixed'
          }
        })
      }
      else {
        this.setState({
          mobileStyles: {}
        })
      }
    };

    componentDidMount() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }

    render() {
      const { isOpen } = this.state;

      return (
        <Fragment>
          <Icon
            value="menu"
            className={`${style['menu-icon']} ${isOpen ? style.close : ''}`}
            onClick={this.handleMenuIconClick}
          />
          <Component
            isOpen={isOpen}
            handleMobileLinkClick={this.handleMobileLinkClick}
            mobileStyles={this.state.mobileStyles}
            {...this.props}
          />
        </Fragment>
      );
    }
  }
};