import React, { useState } from "react";

export default function Ex02solved() {

    const [color, setColor] = useState('white');
    const onChangeColor = e => {
        setColor(e.target.value);
    };

    return (
        <>
            <h2>Ex02 solved</h2>
            <input
                onChange={onChangeColor}
            />
            <br/>
            <div
                style={{
                    backgroundColor: `${color}` || 'white',
                    borderRadius: '50%',
                    width: 100,
                    height: 100
                }}
            >
            </div>
        </>
    );
}