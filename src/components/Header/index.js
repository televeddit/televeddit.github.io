import React from 'react';
import stylesheet from './Header.module.scss';
import logo from '../../img/televeddit-wordmark.png';

const Header = () => {
  return (
    <header className={stylesheet.headerMain}>
      <a href="/">
        <img src={logo} alt="Televeddit Logo" height="40" className={stylesheet.logo} />
      </a>
      {/*}<ul className={stylesheet.tabMenu}>
        <li className={stylesheet.selected}>top</li>
        <li>new</li>
        <li>old</li>
      </ul>*/}
    </header>
  );
}

export default Header;
