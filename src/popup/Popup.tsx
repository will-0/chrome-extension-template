import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { extensionIsActiveSelector, setActive, setInactive } from '@state/general'
import './Popup.css'

function App() {
  const dispatch = useDispatch()
  const isActive = useSelector(extensionIsActiveSelector)
  const onButtonClick = () => {
    if (isActive) {
      dispatch(setInactive())
    } else {
      dispatch(setActive())
    }
  }


  return (
    <main>
      <h3>Extension is {isActive ? "Active" : "Inactive"}</h3>

      <h6>v 0.0.0</h6>



      <button onClick={onButtonClick}>Toggle Active State</button>
    </main>
  )
}

export default App
