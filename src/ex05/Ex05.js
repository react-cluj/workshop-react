import React, { useContext } from 'react';
// import CurrentUserContext from './CurrentUserContext';

export default function Ex05() {
    /* using Context we can access certain "global" data from a child component
        without having to pass un-needed props throughout the component "chain".
        This can be useful for various things like themes, intl, or even a user profile.

        We created a new context in CurrentUserContext. Using the useContext hook,
        let's consume the data here and display the user email and phone
     */
    return (
        <>
            <span>display the user data here</span>
        </>
    )
}
