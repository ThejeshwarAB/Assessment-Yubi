import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Page1 />} />
            <Route exact path='/otp' element={<Page2 />} />
            <Route exact path='/details' element={<Page3 />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
