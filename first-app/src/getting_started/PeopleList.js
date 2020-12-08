import React from 'react'
import {Person} from './Person'

export function PeopleList(props) {
    return (
        <div>
            <h1>PeoplList tag</h1>
                {props.people.map(person => 
                    <Person person={person} key={person.login.uuid} />
                    ///<p key={person.login.uuid}>{person.name.first}&nbsp;{person.name.last}</p>)
                )}
        </div>
    );
}