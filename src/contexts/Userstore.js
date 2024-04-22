import React, { useEffect, useState } from 'react';
import UserContext from './UserContext';
import { useSelector } from 'react-redux';

const UserStore = ({ children }) => {
 const [user, setUser] = useState(null);
 const users = useSelector((state) => state.users.userList); 

 const userValidate = (email, password) => {
    console.log('Validating user:', email, password);
    console.log('Users array:', users);
    const foundUser = users.find(user => user.email === email && user.password === password);
    console.log('Found user:', foundUser);
    if (foundUser) {
      setUser(foundUser); 
      return true;
    } else {
      return false;
    }
 };
 useEffect(() => {
    console.log('User state updated:', user);
}, [user]);

 return (
    <UserContext.Provider value={{ user, setUser, userValidate }}>
      {children}
    </UserContext.Provider>
 );
};

export default UserStore;
