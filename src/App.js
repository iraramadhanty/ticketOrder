import './App.css';
import Home from './screen/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import TrainsList from './screen/TrainsList';
import Login from './screen/Login';
import Regist from './screen/Regist';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} exact />
            <Route path="trainlist" element={<TrainsList />} />
            <Route path="login" element={<Login />} />
            <Route path="regist" element={<Regist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
