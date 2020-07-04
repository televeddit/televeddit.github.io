import React from 'react';
import { useHistory } from "react-router-dom";
import stylesheet from './SubredditSearch.module.scss';
import Autocomplete from 'react-autocomplete';
import ShowMapping from '../../data/ShowMapping';
import cx from 'classnames';

const SubredditSearch = () => {
  const history = useHistory();
  const [searchVal, setSearchVal] = React.useState("");

  return (
    <Autocomplete
      getItemValue={(item) => item.name}
      shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
      items={Object.keys(ShowMapping).map(show => {
        return {
          id: ShowMapping[show],
          name: show,
        };
      })}
      renderItem={(item, isHighlighted) =>
        <div
          key={item.id}
          className={cx(stylesheet.autocompleteRow, {[stylesheet.autocompleteActiveRow]: isHighlighted})}
        >
          {item.name}
        </div>
      }
      value={searchVal}
      onChange={(e) => setSearchVal(e.target.value)}
      onSelect={(value) => {
        setSearchVal(value);
        history.push(`/shows/${ShowMapping[value]}`);
      }}
      inputProps={{
        placeholder: "search subreddits",
      }}
    />
  );
};

export default SubredditSearch;
