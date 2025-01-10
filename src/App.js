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
import ProjectDetailsPage from './Components/ProjectDetailsPage';

function App() {
  console.log(data)
  const [getData, setGetData] = useState(data);

  useEffect(() => {
    const getData = data;
    setGetData(getData)
  },[])
  return (
    <div className='container-fluid p-0'>
      <Navbar data ={getData}></Navbar>
      <div className='main_page'>
        <Routes>
          <Route path='/'  element={<Home data ={getData}/>}></Route>
          <Route path='/home' element={<Home data ={getData}/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/projects/:id' element={<ProjectDetailsPage/>}  />  
        </Routes>
      </div>      
      <Footer />
    </div>
  );
}

export default App;
