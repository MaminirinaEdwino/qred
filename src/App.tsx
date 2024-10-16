import { useRef, useState } from 'react'
import './App.css'
import QRCode from 'react-qr-code'
import { exportComponentAsPNG } from 'react-component-export-image'
import { FaDownload } from 'react-icons/fa6'

function App() {
  const [text, setText] = useState('tapez un texte ici et scan')
  const divref = useRef(null)
  const handleExport = ()=>{
    exportComponentAsPNG(divref, {
      "fileName": "code.png"
    })
  }  
  return (
    <>
    
      <h1>Qrcode generator</h1>
      <div id="qrcode" ref={divref}>
        <QRCode value={text} size={250} level='H'  min={3} />
      </div>
      
      <input type="text" id='qr_text' value={text} onChange={(e)=>{setText(e.target.value)}}/>
      <button onClick={handleExport}><FaDownload></FaDownload></button>
    </>
  )
}

export default App
