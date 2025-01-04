import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import data from './DataBase/portfolio.json';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Publication from './Components/Publications';

function App() {
  console.log(data)
  const [getData, setGetData] = useState(data);

  useEffect(() => {
    const getData = data;
    setGetData(getData)
  },[])
  return (
    <div className='container-fluid'>
      <Navbar data ={getData}></Navbar>
      <Routes>
        <Route path='/'  element={<Home data ={getData}/>} exact></Route>
        <Route path='/home' element={<Home data ={getData}/>} />
        <Route path='/projects' element={<Projects data ={getData}/>} />
        <Route path='/publications' element={<Publication data ={getData}/>}  />  
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
