import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {createContainer} from 'meteor/react-meteor-data';
import {Session} from 'meteor/session';

import Bars from 'react-icons/lib/fa/bars';
import Close from 'react-icons/lib/fa/close';

export const PrivateHeader = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        {props.isNavOpen ? <Bars className="header__menu" onClick={props.handleNavToggle}/> : <Close className="header__menu" onClick={props.handleNavToggle}/>}

        <h1 className="header__title">{props.title}</h1>
        <button className="button button--link-text" onClick={() => props.handleLogout()}>Logout</button>
      </div>

    </div>
  )
};

PrivateHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  handleLogout: React.PropTypes.func.isRequired,
  isNavOpen: React.PropTypes.bool.isRequired
};

export default createContainer(() => {
  return {
    handleLogout: () => {Accounts.logout()},
    handleNavToggle: () => Session.set('isNavOpen', !Session.get('isNavOpen')),
    isNavOpen: Session.get('isNavOpen')
  };
}, PrivateHeader);