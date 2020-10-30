import React from 'react';
import stylesheet from './Shows.module.scss';
import ShowMapping from '../../data/ShowMapping';
import { Link } from "react-router-dom";

import avatarPoster from '../../img/avatar-poster.jpg';
import breakingBadPoster from '../../img/breaking-bad-poster.jpg';
import brooklynNineNinePoster from '../../img/brooklyn-nine-nine-poster.jpg';
import madMenPoster from '../../img/mad-men-poster.jpg';
import parksAndRecPoster from '../../img/parks-and-rec-poster.jpg';
import futuramaPoster from '../../img/futurama-poster.jpg';

const posters = [
  {
    name: "Avatar: The Last Airbender",
    subreddit: "TheLastAirbender",
    img: avatarPoster,
  },
  {
    name: "Breaking Bad",
    subreddit: "BreakingBad",
    img: breakingBadPoster,
  },
  {
    name: "Brooklyn Nine-Nine",
    subreddit: "BrooklynNineNine",
    img: brooklynNineNinePoster,
  },
  {
    name: "Mad Men",
    subreddit: "MadMen",
    img: madMenPoster,
  },
  {
    name: "Parks and Recreation",
    subreddit: "PandR",
    img: parksAndRecPoster,
  },
  {
    name: "Futurama",
    subreddit: "Futurama",
    img: futuramaPoster,
  },
];

const Shows = () => {
  return (
    <div className={stylesheet.showsMain}>
      <div className={stylesheet.tag}>
        <h2>Wish you could relive the hype of live releases? Hate spoilers?</h2>
      </div>
      <div className={stylesheet.instructions}>
        <div className={stylesheet.step}>
          <span className={stylesheet.number}>1</span>
          <span className={stylesheet.direction}>Select the subreddit for the TV show you're currently watching.</span>
        </div>
        <div className={stylesheet.step}>
          <span className={stylesheet.number}>2</span>
          <span className={stylesheet.direction}>Click on the episode you most recently finished.</span>
        </div>
        <div className={stylesheet.step}>
          <span className={stylesheet.number}>3</span>
          <span className={stylesheet.direction}>See the top posts from the past following your current episode!</span>
        </div>
      </div>
      <hr />
      <br />
      <div className={stylesheet.posterList}>
        {posters.map((poster) => {
          return (
            <div key={poster.subreddit} className={stylesheet.poster}>
              <Link to={`/shows/${ShowMapping[poster.subreddit]}`}>
                <img src={poster.img} alt={`${poster.name} poster`} />
              </Link>
              <h3 style={{marginBottom: "0.5em"}}>{poster.name}</h3>
              <h4 style={{marginTop: "0", fontSize: "small"}}>
                <a href={`https://reddit.com/r/${poster.subreddit}`}>
                  /r/{poster.subreddit}
                </a>
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shows;
