import React from 'react';
import classNames from 'classnames';
//import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
        <a href = "mailto:support@retailit.nyc">Contact</a>
        </li>
        <li>
        <a href = "#aboutUs">About us</a>
        </li>
        {/* <li>
          <Link to="#0">FAQ's</Link>
        </li> */}
        <li>
          <a href = "mailto:support@retailit.nyc">Support</a>
        </li>
      </ul>
    </nav>
  );
}

//<Link to="#0">Support</Link>
export default FooterNav;