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
    </aside>
  );
}

export default Sidebar;
