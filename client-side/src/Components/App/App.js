import React, {useState, useEffect} from 'react';
import Content from '../Content';
import Header from '../Header/Header';
import NavBar from '../Navbar/Navbar';
import './App.css';

function App() {

  const [loggedInUserID, setLoggedInUserID] = useState(1)
  const [loggedInUser, setLoggedInUser] = useState([])

  useEffect(() => {
      fetch(`http://localhost:9292/users/${loggedInUserID}`)
          .then(res => res.json())
          .then(res => setLoggedInUser(res))

  }, [loggedInUserID])


  return (
    
    <div className="app">
      <img src="some.jpg" onerror="this.src='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'" alt='test' />
      <Header user={loggedInUser}/>
      <NavBar />
      <Content user={loggedInUser}/>
    </div>  
  );
}

export default App;
