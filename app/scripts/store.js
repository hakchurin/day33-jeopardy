import Score from './score';
import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory, Link} from 'react-router';
// import GameBoardQuestion from './data';
// import GameView from './GameView';
import Router from './router';
import Session from './session';






let store = {
  session: new Session()
}

export default store;
