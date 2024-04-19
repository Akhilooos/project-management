
import React, { useState } from 'react';
import Usercontext from './Usercontext';
import { fetchUSers } from '../redux/Userslice';

const UserStore = ({ children }) => {
 const [user, setUser] = useState(null);

 const userValidate = async (email, password) => {
    
    const users = await fetchUSers(); 
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) {
      setUser(foundUser);
      return true;
    } else {
      return false;
    }
 };

 return (
    <Usercontext.Provider value={{ user, setUser, userValidate }}>
      {children}
    </Usercontext.Provider>
 );
};

export default UserStore;
