import './comp.css'
import {useState} from 'react'


const Upload = (props) => {
  const [file, setFile] = useState('')

  const handleUpload = (event) => {
    setFile(event.target.files[0])
    console.log(event.target.files[0])
  }

  return(
    <div className='upload-box'>
      {!file?
      <label className="file-upload-label">
        drag and drop or click to upload
        <input type="file" onChange={handleUpload} accept=".pdf"/>
      </label>
      :
      <label className="file-upload-label">{file.name}
        <button className='submit-button' onClick={() => props.handleFile(file)}> Submit</button>
      </label>
    }
    </div>
  )
}

export default Upload
