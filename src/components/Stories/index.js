import React, { useState, useEffect } from 'react';
import stylesheet from './Stories.module.scss';
import ShowMapping from '../../data/ShowMapping';
import { getSessionStorage, setSessionStorage, stripHtmlTags } from '../../utils';
import Story from '../Story';
import Loader from '../Loader';

const Stories = ({ episodeId }) => {
  const [episodeData, setEpisodeData] = useState(null);
  const [redditData, setRedditData] = useState(null);

  useEffect(() => {
    fetchData();
  }, [episodeId]);

  const fetchData = async () => {
    const localEpisodeData = getSessionStorage(`episode-${episodeId}`);
    const localRedditData = getSessionStorage(`reddit-${episodeId}`);
    if (!localEpisodeData || !localRedditData) {
      fetch(`https://api.tvmaze.com/episodes/${episodeId}?embed=show`)
        .then((response) => response.json())
        .then((respEpisodeData) => {
          setSessionStorage({[`episode-${episodeId}`]: respEpisodeData});
          setEpisodeData(respEpisodeData);
          const {
            airstamp,
            ["_embedded"]: embedded,
          } = respEpisodeData;
          if (Object.values(ShowMapping).includes(embedded.show.id)) {
            const subreddit = Object.keys(ShowMapping).find(key => ShowMapping[key] === embedded.show.id);
            const airepoch = Math.floor((new Date(airstamp)).getTime() / 1000);
            fetch(`https://api.pushshift.io/reddit/search/submission?before=${airepoch+604800}&after=${airepoch}&subreddit=${subreddit}&sort_type=score&sort=desc`)
              .then((response) => response.json())
              .then((respRedditData) => {
                setSessionStorage({[`reddit-${episodeId}`]: respRedditData.data});
                setRedditData(respRedditData.data);
              });
          }
        });
    } else {
      setEpisodeData(localEpisodeData);
      setRedditData(localRedditData);
    }
  };

  const subreddit = episodeData ? Object.keys(ShowMapping).find(key => ShowMapping[key] === episodeData["_embedded"].show.id) : null;
  const airstamp = episodeData ? new Date(episodeData.airstamp) : null;
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <div className={stylesheet.storiesMain}>

      {(episodeData && redditData) ? (
        <React.Fragment>
          <div className={stylesheet.episodeOverviewContainer}>
            <div className={stylesheet.episodeOverview}>
              <div className={stylesheet.episodeImg}>
                <img style={{width: "250px"}} src={episodeData.image.medium} />
              </div>
              <div className={stylesheet.episodeDetails}>
                <p className={stylesheet.showName}>{episodeData["_embedded"].show.name} &middot; <a href={`https://reddit.com/r/${subreddit}`}>/r/{subreddit}</a></p>
                <h3>S{episodeData.season}E{episodeData.number}: {episodeData.name}</h3>
                <p className={stylesheet.dateInfo}>Original airdate: {airstamp.toLocaleDateString("en-US", {...dateOptions, weekday: 'long', hour: 'numeric'})}</p>
                <p className={stylesheet.dateInfo}>Showing posts from {airstamp.toLocaleDateString("en-US", dateOptions)} to {(new Date(airstamp.getTime() + 604800000)).toLocaleDateString("en-US", dateOptions)}</p>
              </div>
            </div>
            <blockquote>{stripHtmlTags(episodeData.summary)}</blockquote>
          </div>
          {redditData.length ? redditData.map((story) => {
            return (
              <span key={story.id}>
                <Story story={story} />
              </span>
            );
          }) : (
            <div className={stylesheet.noPosts}>
              <p>No posts during this period. Perhaps the subreddit didn't exist?</p>
            </div>
          )}
        </React.Fragment>
      ) : <Loader height="200" />}
    </div>
  );
}

export default Stories;
