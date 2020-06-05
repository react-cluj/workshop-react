import React from "react";

export default function Ex01solved() {

    const callMe = () => {
        console.log('Hi!');
    };

    return (
        <div>
            <h2>Ex01 solved</h2>
            <CustomButton onclick={callMe}/>
        </div>
    );
}

function CustomButton (props) {
    return (
        <button style={{backgroundColor: 'lightblue', cursor: 'pointer'}}
                onClick={props.onclick}>
            Click me
        </button>
    )
}