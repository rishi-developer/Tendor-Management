import logo from './logo.svg';
import './App.css';
import TendorForm from './components/tendorform';
import TendorList from './components/tendorlist';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import EditTendor from './components/editTendor';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<TendorList />} />
      <Route path = "/editTendor/:id" element={<EditTendor />} />
      <Route exact path = "/tendorform" element={<TendorForm />} />

 
      {/* <Route path="*" element = {<Error />} /> */}
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
