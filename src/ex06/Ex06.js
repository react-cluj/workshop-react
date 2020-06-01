import React, { useState, useEffect } from "react";

export default function Ex06() {
    /*
        We can also make custom hooks in our apps, which make for greater re-usability.
        Let's make a custom hook that tracks when a certain key is pressed.
        We can use the event listeners for keydown and keyup to do this,
        whilst setting the hooks internal state to pressed -or not pressed-

    */
    const happyEmoji = '😊', sadEmoji = '😢';
    const happyPress = useKeyPress('h');
    const sadPress = useKeyPress('s');

    return (
        <>
            <h2>Ex06</h2>
            <div>
                {happyPress && happyEmoji}
                {sadPress && sadEmoji}
            </div>
        </>
    );
}

function useKeyPress(targetKey) {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false);


    // Add event listeners in useEffect, and toggle the keyPressed state based
    // on keyup or keydown presses. The keyup and keydown events automatically
    // grab the key pressed via the argument 'key'
    useEffect(() => {
    }, []);

    return keyPressed;
}