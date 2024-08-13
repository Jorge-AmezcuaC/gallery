import React, {useState} from 'react';
import Projects from './components/projects/index';
import { IoMdBriefcase, IoMdMenu } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import './App.css';

function App() {
  const [elementDisplayed, setElementDisplayed] = useState(Projects[0].element)
  const [showMenu, setShowMenu] = useState(false)
  
  return (
    <div className="App">
      <header className='header'>
        <h3 className='title'>The Gallery</h3>
      </header>
        {showMenu ?   
          <nav className='navContainer'>
            <button className='hiddeMenu' onClick={() => setShowMenu(false)}><FaMinus size={20} color='#eee'/></button>
            {Projects.map(e => {
              return(
                <p onClick={() => setElementDisplayed(e.element)}>{e.name}</p>
              )
            })}
          </nav>
        :
          <button className='showMenu' onClick={() => setShowMenu(true)}><IoMdMenu size={20} color='#eee'/></button>
        }
      <main className='mainContent'>
        {elementDisplayed}
      </main>
      <a href='https://jorge-amezcuac.github.io' target='_blank' rel='noreferrer'><button className='toPorfolio'><IoMdBriefcase size={20} color='#eee'/></button></a>
    </div>
  );
}

export default App;
