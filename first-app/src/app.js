import React, {useState} from 'react'
import {fetchPeople} from './apiPeople' //Regular function isnt a React component
import {PeopleList} from './getting_started/PeopleList'

function App() {
  const [people, setPeople] = useState([]);
  return (
    <div id="root">
      <header>
        <h1>People</h1>
      </header>
      <main>
            <button onClick={getPeople}>Go</button>
            <PeopleList people={people}/>
            {/*
            <button onClick={() => addPerson(person)}>Go</button>
            To pass parameters.
            or to capture events
            <button onClick={event => myFunction(event, person)}

            */}
      </main>
      <footer>
        Copyright &copy; {new Date().toDateString()}
      </footer>
    </div>
  );
  function getPeople() {
    // Use of useState, is a little weird but this is how it works
    fetchPeople().then(people => setPeople(people))
  }
}
export default App