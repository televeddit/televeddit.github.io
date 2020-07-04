import React, { useState, useEffect } from 'react';
import stylesheet from './Shows.module.scss';
import ShowMapping from '../../data/ShowMapping';

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
    <div className={stylesheet.storiesMain}>
      <div className={stylesheet.tag}>
        <h2>Always miss the conversation on your shows? Hate spoilers?</h2>
        <h3>View the conversation on Reddit from your favorite shows' episodes.</h3>
      </div>
      <div className={stylesheet.posterList}>
        {posters.map((poster) => {
          return (
            <div className={stylesheet.poster}>
              <a href={`/shows/${ShowMapping[poster.subreddit]}`}>
                <img src={poster.img} />
              </a>
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
