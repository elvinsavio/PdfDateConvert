import './App.css';
import {useState} from 'react'
import Upload from './components/upload.js'
// import {pdfjs} from 'pdfjs'

function App() {
  const [theme, setTheme] = useState(true)
  const [file, setFile] = useState('')

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

  const handleFile = (f) => {
    setFile(f)
    // pdfjs.getDocument(file)
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

      <div className='body'>
        {file==''?
        <Upload handleFile={(f) => handleFile(f)}/>
        :
        <p> {file.name} </p>
      }
      </div>
    </div>
  );
}

export default App;
