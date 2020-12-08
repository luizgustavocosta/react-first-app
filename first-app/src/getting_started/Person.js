import React from 'react'

export function Person(props) {
    const person = props.person
    return (
        <h1>{person.name.first}&nbsp;{person.name.last}</h1>
    );
}