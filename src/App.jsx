import { useEffect, useState } from 'react';
import './App.css';
function App() {

  const [estado, setEstado] = useState(false)

  const btn = <>
    <button className={estado ? 'btnTrue' : 'btnFalse'} id='mainBtn' onClick={cambiarEstado} >Fui al Gym</button>
    <br></br>
    No has ido al gym ponte las pilas 🤬 !!!
  </>

  const date = new Date();
  let day = date.getDay()

  useEffect(() => {
    if (localStorage.day != day) {
      setEstado(false)
      localStorage.day = day
      localStorage.estado = false
    } else {
      setEstado(localStorage.estado === 'true')
    }
  }, [])

  function cambiarEstado() {
    setEstado(true)
    localStorage.estado = true
  }

  return (
    <>
      <h4>{estado ? 'Ya fuiste al Gym estas mas Guap@ 🍑💪' : btn} </h4>
    </>
  )
}

export default App
