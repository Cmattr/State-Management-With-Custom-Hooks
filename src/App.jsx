import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactsContext from './context/ContactsContext';
import ContactList from './components/contactList';
import ProductList from './components/productList';



const App = () => {
  const [contact, setContact] = useState({ name: '', phone: '' });
  return ( 
    <ContactsContext.Provider value={{ contact , setContact }}>
      <Router>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/product" element={<ProductList />} />
        </Routes>
      </Router>
    </ContactsContext.Provider>
  );
};

export default App;