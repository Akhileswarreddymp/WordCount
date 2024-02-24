import { useState } from 'react';
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  const [mode,setMode] = useState("light")
  const [alert,setAlert] = useState()

  function showAlert(message,type){
    setAlert({
      message : message,
      value : type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)}
  const toggleMode = ()=>{
    if (mode === "light"){
      setMode("dark")
      document.body.style.background = "#042743"
      showAlert("Dark Mode Enabled","success")
    }
    else{
      setMode("light")
      document.body.style.background = "white"
      showAlert("Light Mode Enabled","success")
    }
  }
  return (
    <>
      <Router>
        <NavBar title = "WordCount" mode={mode} toggle = {toggleMode} />
        <div className='container mb-3'>
          <Alert alert = {alert} />
          <Routes>
            <Route exact path = "/" element={<TextForm heading = "Enter the Text to analyze" mode={mode} alert={showAlert} />} />
            <Route exact path='/about' element={<About mode = {mode} />} />
          </Routes>
        </div>
      </Router>
    </>
    
  )
}

export default App;
