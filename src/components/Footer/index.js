import React from 'react';
import stylesheet from './Footer.module.scss';
import logo from '../../img/televeddit-wordmark.png';

const Footer = () => {
  return (
    <footer className={stylesheet.footerMain}>
      <p>Don't see the show you're watching? <a href="https://github.com/bobbylcraig/cineddit/issues/new?assignees=bobbylcraig&labels=Add+Subreddit&template=subreddit-request.md&title=Add+new+subreddit">Add or request it here.</a></p>
    </footer>
  );
}

export default Footer;
