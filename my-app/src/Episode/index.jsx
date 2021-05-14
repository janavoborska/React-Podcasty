import React from 'react';
import './style.css';

const Episode = (props) => (
  <div>
    <div className="episoda">
      <p className="num"> {props.num}</p>
      <div className="nazvy">
        <p className="title">{props.title}</p>
        <p className="guest">{props.guest}</p>
      </div>
    </div>
    <hr />
  </div>
);

export default Episode;

/*Vytvořte komponentu Episode, která bude zobrazovat jednu podcastovou epizodu. Její props budou num, title a guest. Pomocí této komponenty zobrazte stejné dvě epizody, jako vidíte na připravené stránce. Z připravné stránky vykradněte CSS styly a zařiďte aby vaše aplikace vypadala stejně.
 */
