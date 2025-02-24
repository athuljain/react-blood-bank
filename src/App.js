
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import { myContext } from './context/context';
import { useState } from 'react';
import Donate from './Components/Donate';
import Receive from './Components/Recieve';


function App() {

  const [user, setUser] = useState({ email: "", password: "", bloodGroup: "", phone: "" });


const values={user, setUser}


  return (
    <div className="App">
<BrowserRouter>
<myContext.Provider value={values}>
<Routes>

  <Route path='/' element={<Home />}/>
  <Route path='/login' element={<Login />}/>
  <Route path='/register' element={<Register />}/>
  <Route path='/donate' element={<Donate />}/>
  <Route path='/recieve' element={<Receive/>}/>

</Routes>
</myContext.Provider>

</BrowserRouter>
    </div>
  );
}

export default App;
