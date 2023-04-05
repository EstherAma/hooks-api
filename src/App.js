import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllCharacters from './components/AllCharacters';
import OneCharacter from './components/OneCharacter';
import RickandMorty from './RickandMorty.png'

function App() {
  return (
    <div className="App">
      <img src={RickandMorty} alt='Logotipo Rick and Morty' className='logo'/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllCharacters/>}></Route>
          <Route path='/character/:id' element={<OneCharacter/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  ); 
}

export default App;
