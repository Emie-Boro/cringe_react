import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Headers from "./components/Headers";
import Homepage from "./components/Homepage";
import Search from "./components/Search";
import Detail from './components/Detail';
import Episodes from './components/Episodes';
import Stream from './components/Stream';

function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/details/:id' element={<Detail />} />
        <Route path='/episodes/:slug/:seasonId' element={<Episodes />} />
        {/* <Route path='stream/:slug/:source' element={<Stream />} /> */}
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
