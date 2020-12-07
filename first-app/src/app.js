import React, {useState} from 'react'
import {fetchPeople} from './apiPeople' //Regular function isnt a React component

function App() {
  const [people, setPeople] = useState([]);
  return (
    <div id="root">
      <header>
        <h1>People</h1>
      </header>
      <main>
            <button onClick={getPeople}>Go</button>
            {people.map(person => <p key={person.login.uuid}>{person.name.first}&nbsp;{person.name.last}</p>)}
      </main>
      <footer>
        Copyright &copy; {new Date().toDateString()}
      </footer>
    </div>
  );
  function getPeople() {
    fetchPeople().then(people => setPeople(people))
  }
}
export default App