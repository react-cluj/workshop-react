import React from "react";

const CurrentUserContext = React.createContext({
    email: 'john_doe@gmail.com',
    phone: '+4071234567'
});

export default CurrentUserContext;