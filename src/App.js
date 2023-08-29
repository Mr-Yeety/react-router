import Navbar from "./Navbar";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import About from "./pages/About";
import {Route, Routes} from 'react-router-dom'

function App() {

  
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

      <Routes>
        <Route path="/pricing" element={<Pricing/>}/>
      </Routes>


      <Routes>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
