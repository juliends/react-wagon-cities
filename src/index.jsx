// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import CitiesReducer from './reducers/cities_reducer';
import ActiveCityReducer from './reducers/active_city_reducer';

// State and reducers
const initialState = {
  cities: []
}

// initialState = JSON.parse(document.getElementsById("app").dataset.state);
// <div id="app" data-state="{ cities: [] }" />

const reducers = combineReducers({
  cities: CitiesReducer,
  activeCity: ActiveCityReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState)}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
