import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const listOfPresidents = [
  'Andrew Jackson',
  'Martin Van Buren',
  'William Henry Harrison'
];

const listOfObjects = [
  {
    firstName: 'John',
    lastName: 'Tyler',
    presidentIndex: 10
  },
  {
    firstName: 'James',
    lastName: 'Polk',
    presidentIndex: 11
  },
  {
    firstName: 'Zachary',
    lastName: 'Taylor',
    presidentIndex: 12
  },
  {
    firstName: 'Millard',
    lastName: 'Fillmore',
    presidentIndex: 13
  },
  {
    firstName: 'Franklin',
    lastName: 'Pierce',
    presidentIndex: 14
  },
];

const formatPresident = president => {
  return `${president.lastName}, ${president.firstName}, ${president.presidentIndex}-й`;
}

ReactDOM.render(
  <React.StrictMode>
    <ul>
      <li>George Washington</li>
      <li>John Adams</li>
      <li>Thomas Jefferson</li>
    </ul>

    <ol start="4">
      <li>James Madison</li>
      <li>James Monroe</li>
      <li>John Quincy Adams</li>
    </ol>

    <ul>
      {listOfPresidents.map(president => {
        return <li key={president}>{president}</li>
      })}
    </ul>

    <ul>
      {listOfObjects.filter(president => {
        return president.presidentIndex % 2 !== 0;
      }).map(president => {
        return <li key={president.presidentIndex}>{formatPresident(president)}</li>
      })}
    </ul>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
