import { Line } from 'recharts'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import PriceOptions from './components/PriceOptions/PriceOptions.jsx'
import LineChart from './components/LineChart/LineChart.jsx'
function App() {

return (
    <>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
