import React from "react";

export default function Ex03solved() {

    const names = ['Foo', 'Bar', 'Joe', 'Joanna'];

    return (
        <>
            <h2>Ex03solved</h2>
            <ul id='names'>
                {
                    names.map( (name, i) => <li key={i} >{name}</li> )
                }
            </ul>
        </>
    );
}