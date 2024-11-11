import { useEffect, useState } from 'react'
import Main from './components/Main'
import Sidebar from "./components/Sidebar"
import Footer from './components/Footer'

function App() {

  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState()

  const handleToggleModal = () => {
    setShowModal(prev => !prev)
  }


  useEffect(() => {
    async function fetchData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`
      const today = (new Date().toDateString);
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log("fetched from cache")
        return
      }
      localStorage.clear();
      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log("Fetched from API")
        console.log("DATA\n", data);
      }
      catch (err) {
        console.log(err.message)
      }
    }
    fetchData();
  }, [])

  return (
    <>
      {
        data ? (<Main data={data} />) :
          (
            <div className='loadingState'>
              <i className='fa-solid fa-gear' />
            </div>
          )
      }
      {
        showModal && (<Sidebar handleToggleModal={handleToggleModal} data={data} />)
      }
      {
        data && (
          <Footer handleToggleModal={handleToggleModal} data={data} />
        )
      }
    </>
  )
}

export default App
