import React, {useState} from 'react'
import {fetchPeople} from './apiPeople' //Regular function isnt a React component

function App() {
  const [people, setPeople] = useState([]);
  return (
    <div id="root">
      <h1>Anybody home?</h1>
      <li>
          <button onClick={getPeople}>Go</button>
          {people.map(person => <p>{person.name.first}&nbsp;{person.name.last}</p>)}
      </li>
    </div>
  );
  function getPeople() {
    fetchPeople().then(people => setPeople(people))
  }
}
export default App