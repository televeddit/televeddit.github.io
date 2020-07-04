import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MainView from './layouts/MainView';
import Stories from './components/Stories';
import Episodes from './components/Episodes';
import Shows from './components/Shows';

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => {
          return (
            <MainView>
              <Shows />
            </MainView>
          );
        }} />
      <Route exact path="/episodes/:episodeId" render={(props) => {
          const { episodeId } = props.match.params;
          return (
            <MainView>
              <Stories episodeId={episodeId} />
            </MainView>
          );
        }} />
      <Route exact path="/shows/:showId" render={(props) => {
        const { showId } = props.match.params;
        return (
          <MainView>
            <Episodes showId={showId} />
          </MainView>
        );
      }} />
      <Route render={(props) => {
        return (
          <MainView>
            <div style={{ textAlign: "center" }}>
              <h2>404 - Page Not Found</h2>
              <pre>{props.location.pathname}</pre>
              <p>is not a valid URL.</p>
            </div>
          </MainView>
        );
      }} />
      </Switch>
    </Router>
  );
}
