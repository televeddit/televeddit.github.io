import React from 'react';
import stylesheet from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={stylesheet.footerMain}>
      <p className={stylesheet.addSubredditNotice}>Don't see the show you're watching? <a href="https://github.com/bobbylcraig/cineddit/issues/new?assignees=bobbylcraig&labels=Add+Subreddit&template=subreddit-request.md&title=Add+new+subreddit">Add or request it here.</a></p>
      <p className={stylesheet.githubLogo}>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/bobbylcraig/televeddit" alt="github">
          <i className="fab fa-github"></i>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
