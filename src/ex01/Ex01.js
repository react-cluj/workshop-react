import React from "react";

export default function Ex01() {
    /*
        Welcome to the first exercise :)
        We'll start off with something light to get warmed up.

        1. Create a function inside of this component named 'callMe'
            It will just have a console log inside;
        2. Pass it as a prop to CustomButton so that the button will call
            this function when clicked
        3. Give the button a background-color of blue using inline styles
     */

    return (
        <div>
            <h2>Ex01</h2>
            <CustomButton>

            </CustomButton>
        </div>
    );
}


function CustomButton () {
    return (
        <button style={{cursor: 'pointer'}}>
            Click me
        </button>
    )
}