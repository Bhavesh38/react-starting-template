import React from 'react';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
