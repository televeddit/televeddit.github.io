import React from 'react';
import stylesheet from './Story.module.scss';

import selfThumbnail from '../../img/self-thumbnail.png';
import defaultThumbnail from '../../img/default-thumbnail.png';

const Story = ({ story }) => {
  const {
    author,
    created_utc: createdUtc,
    full_link: fullLink,
    num_comments: numComments,
    score,
    title,
    over_18: nsfw,
    thumbnail,
  } = story;
  const date = (new Date(createdUtc * 1000)).toLocaleDateString("en-US", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className={stylesheet.storyContainer}>
      <span className={stylesheet.score}>{score}</span>
      <span className={stylesheet.thumbnailContainer}>
        <a href={fullLink}>
          <img alt={`${title} thumbnail`} src={(() => {
            switch(thumbnail) {
              case 'self':
              case 'nsfw':
              case 'spoiler':
              case '':
                return selfThumbnail;
              case 'default':
                return defaultThumbnail;
              default:
                return thumbnail;
            }
          })()} />
        </a>
      </span>
      <span className={stylesheet.storyDetailsContainer}>
        <span className={stylesheet.title}>
          <a href={fullLink} dangerouslySetInnerHTML={{__html: title}} />
        </span>
        <span className={stylesheet.postDetails}>
          submitted {date} by <a href={`https://www.reddit.com/user/${author}`}>{author}</a>
        </span>
        <span className={stylesheet.postComments}>{nsfw && 'NSFW - '}<a href={fullLink}>{numComments} {numComments === 1 ? 'comment' : 'comments'}</a></span>
      </span>
    </div>
  );
}

export default Story;
