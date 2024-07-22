import React from "react";
const ContactsContext = React.createContext({
    contact: {name: '', phone: ''},
    setContact: () => {}
});
export default ContactsContext;