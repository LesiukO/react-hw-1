import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Moment from 'react-moment';
import 'moment-timezone';

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

const data = [{"id":"666958530825467","title":"Friday open-air party w/ Lucarelli, Mihas and Yarik JR | Hide","place":"Hide","date":"2020-06-12T20:00:00.000Z"},{"id":"786185895252176","title":"Захист скверу імені Чкалова","place":"Сквер Им. Чкалова","date":"2020-06-10T09:00:00.000Z"},{"id":"623921328209118","title":"Живая музыка на летней террасе","place":"От Заката до Рассвета","date":"2020-06-14T17:00:00.000Z"},{"id":"909559356190295","title":"Amer (2009)","place":"Кіноклуб Кіноха","date":"2020-06-13T15:00:00.000Z"},{"id":"589272605321022","title":"В парк Межигорье на теплоходе","place":"Причал №6, Почтовая пл.","date":"2020-06-13T07:45:00.000Z"}];


const getTimesOfDay = date => {
  let hour = new Date(date).getHours();
  
  if (hour >= 21 || hour < 5) {
    return 'Ночь';
  } else if (hour >= 5 && hour < 11) {
    return 'Утро';
  } else if (hour >= 11 && hour < 17) {
    return 'День';
  } else if (hour >= 17 && hour < 21) {
    return 'Вечер';
  }

}

const isInPast = date => {
  if (new Date(date) < new Date()) {
    return true;
  }
}

const formState = {
  newsletter: true
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

    <ul style={{background: '#ddd', paddingTop: '1em', paddingBottom: '1em', fontWeight: 'bold'}}>
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

    <ul>
      {data.sort((previous, next) => {
        if (previous.date < next.date) {
          return -1;
        }
      }).map( event => {
        return <li key={event.id} className={isInPast(event.date) && 'past'}>
          <p><a target="_blank" href={`https://www.facebook.com/events/${event.id}/`}>{event.title}</a></p>
          <p><span>{getTimesOfDay(event.date)},</span> <Moment format="DD/MM/YYYY, HH:mm:ss">{event.date}</Moment></p>
          <p>{event.place}</p>
        </li>
      })}
    </ul>

    <form action="https://postman-echo.com/post" method="post">
      <div className="form-control">
        <div><label htmlFor="name">Имя:</label></div>
        <input type="text" id="name" name="name" required/>
      </div>

      <div className="form-control">
        <div><label htmlFor="password">Пароль:</label></div>
        <input type="password" id="password" name="password" required />
      </div>

      <div className="form-control">
        <label htmlFor="basicPlan">Базовый тариф</label>
        <input type="radio" id="basicPlan" name="plan" value="basic" defaultChecked/>
      </div>

      <div className="form-control">
        <label htmlFor="premiumPlan">Премиум тариф</label>
        <input type="radio" id="premiumPlan" name="plan" value="premium"/>
      </div>

      <div className="form-control">
        <input type="checkbox" id="newsletter" name="newsletter" defaultChecked />
        <label htmlFor="newsletter">Присылайте мне новости на почту</label>
      </div>
    </form>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
