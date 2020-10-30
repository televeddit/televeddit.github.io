import React, { useEffect } from 'react';
import stylesheet from './Episodes.module.scss';
import { Link } from "react-router-dom";
import ShowMapping from '../../data/ShowMapping';
import { getSessionStorage, setSessionStorage, stripHtmlTags } from '../../utils';
import Loader from '../Loader';

const Episodes = ({ showId }) => {
  const [episodeListData, setEpisodeListData] = React.useState(null);
  const [showData, setShowData] = React.useState(null);

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showId]);

  const fetchData = async () => {
    // Ensure that loading reshows
    setShowData(null);
    setEpisodeListData(null);

    const localEpisodeListData = getSessionStorage(`episode-list-${showId}`);
    const localShowData = getSessionStorage(`show-${showId}`);
    if (!localEpisodeListData || !localShowData) {
      fetch(`https://api.tvmaze.com/shows/${showId}`)
        .then((response) => response.json())
        .then((respShowData) => {
          setSessionStorage({[`show-${showId}`]: respShowData});
          setShowData(respShowData);
        });
      fetch(`https://api.tvmaze.com/shows/${showId}/episodes`)
        .then((response) => response.json())
        .then((respEpisodeListData) => {
          setSessionStorage({[`episode-list-${showId}`]: respEpisodeListData});
          setEpisodeListData(respEpisodeListData);
        });
    } else {
      setShowData(localShowData);
      setEpisodeListData(localEpisodeListData);
    }
  };

  const subreddit = Object.keys(ShowMapping).find(key => ShowMapping[key] === parseInt(showId, 10));

  return (
    <div className={stylesheet.storiesMain}>
      {(showData && episodeListData) ? (
        <React.Fragment>
          <div className={stylesheet.showOverview}>
            <div className={stylesheet.showImg}>
              <img style={{maxWidth: "150px"}} src={showData.image.medium} alt={`${showData.name} poster`} />
            </div>
            <div className={stylesheet.showDetails}>
              <h2 className={stylesheet.subredditName}>{showData.name}</h2>
              <p className={stylesheet.subredditLink}><a href={`https://reddit.com/r/${subreddit}`}>/r/{subreddit}</a></p>
              <blockquote>{stripHtmlTags(showData.summary)}</blockquote>
            </div>
          </div>
          <div className={stylesheet.episodeList}>
            {episodeListData.map((episode) => {
              const {
                id,
                name,
                season,
                airstamp,
                number,
              } = episode;
              const wasBeforeRedditFounding = (new Date("06/25/2005")) > (new Date(airstamp));
              if (wasBeforeRedditFounding) {
                return (
                  <p key={id} style={{opacity: "0.25"}}>S{season}E{number} - {name} - This episode aired before Reddit's founding.</p>
                );
              } else {
                return (
                  <p key={id}>S{season}E{number} - <Link to={`/episodes/${id}`}>{name}</Link></p>
                );
              }
            })}
          </div>
        </React.Fragment>
      ) : <Loader height="200" />}
    </div>
  );
}

export default Episodes;
