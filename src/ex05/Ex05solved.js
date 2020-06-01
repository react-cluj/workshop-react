import React, { useContext } from 'react';
import CurrentUserContext from './CurrentUserContext';

export default function Ex05solved() {
    let currentUser = useContext(CurrentUserContext);

    return (
        <>
            <span>{currentUser.email}</span>
            <span>{currentUser.phone}</span>
        </>
    )
}
