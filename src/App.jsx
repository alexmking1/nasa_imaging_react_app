import { useEffect, useState } from "react"
import Main from "./components/Main"
import SideBar from "./components/SideBar"
import Footer from "./components/Footer"

function App() {
  // API return data will be passed down to Main, SideBar, and Footer components. The calculations
  // for the metrics will be done separately because they are dependent on the data from the API, and
  // the data will be passed down to the components as props.

  // Still determining if the metric output should be in the Main component or appended onto the 
  // SideBar component.
  
  const [showSideBar, setShowSideBar] = useState(false) // side conditional rendering
  const [data, setData] = useState(null) // data from NASA API
  const [loading, setLoading] = useState(false) // loading state for when waiting for api data

  // ========================================
  // EFFECTS
  // ========================================
  // useEffect hook for NASA API. This will run once when the component mounts
  useEffect(() => {
    async function fetchAPIData() {
      const api_string_key = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod?api_key=' + `${api_string_key}`
      
      // check if data is already in local storage (cache feat)
      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        const localData = JSON.parse(localStorage.getItem(localKey))
        setData(localData)
        console.log('Fetched from cache \n')
        return
      }

      try {
        const response = await fetch(url)
        const apiData = await response.json()
        // store data in local storage so it's cached (to reduce API calls)
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched from API (not cache) \n')
      } catch (error) {
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])

  // ========================================
  // LOGIC
  // ========================================
  // function to toggle the sidebar
  function toggleSideBar() {
    setShowSideBar(!showSideBar)
  }

  // will need additional hooks for the metrics calculations + database-leaderboard functionality

  return (
    <>
      {data ? (<Main data={data} />) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>

      )}

      {showSideBar && (
          <SideBar data={data} toggleSideBar={toggleSideBar}/>)}
      {data && (
        <Footer data={data} toggleSideBar={toggleSideBar} />
      )}
    </>
  )
}

export default App
