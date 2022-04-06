import './App.css';
import {useState} from 'react'

function App() {
  const [theme, setTheme] = useState(true)

  const changeTheme = () => {
      setTheme(!theme)
      if(theme){
        //dark theme
        document.documentElement.style.setProperty('--background-color','rgb(50, 54, 72)');
        document.documentElement.style.setProperty('--background-opacity','rgba(0,0,0,0.3)');
        document.documentElement.style.setProperty('--font-color','white');
      }else {
        //light theme
        document.documentElement.style.setProperty('--background-color','#F9E9D5');
        document.documentElement.style.setProperty('--background-opacity','rgba(0,0,0,0.5)');
        document.documentElement.style.setProperty('--font-color','black');
      }
  }


  return (
    <div className="App">
      <div className="header">
        <div className="help">
          <div className='tooltip'>?
            <span className="tooltiptext"> this is the help box </span>
          </div>
        </div>
        <div className="theme">
          <label className="switch-wrap">
            <input type="checkbox" onChange={() => changeTheme()}/>
            <div className="switch"></div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
