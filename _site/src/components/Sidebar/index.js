import React from 'react';
import { Link } from "react-router-dom";
import stylesheet from './Sidebar.module.scss';
import ShowMapping from '../../data/ShowMapping';
import SubredditSearch from '../SubredditSearch';

const Sidebar = () => {
  return (
    <aside className={stylesheet.sidebarMain}>
      <SubredditSearch />
      <div className={stylesheet.subredditBox}>
        <h4>Popular Subreddits</h4>
        {Object.keys(ShowMapping).slice(0, 30).map(show => {
          return (
            <Link key={show} to={`/shows/${ShowMapping[show]}`}>{show}</Link>
          );
        })}
      </div>
      <p className={stylesheet.addSubredditText}>Don't see the show you're watching? Even after searching? <a href="https://github.com/televeddit/televeddit.github.io/issues/new?assignees=bobbylcraig&labels=Add+Subreddit&template=subreddit-request.md&title=Add+subreddit+request">Add or request it here.</a></p>
    </aside>
  );
}

export default Sidebar;
