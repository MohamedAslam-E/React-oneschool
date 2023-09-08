import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from './components/AppNavbar';
import Sidebar from './components/Sidebar';
import { RouterProvider} from "react-router-dom";
import router from "./router";

const App = () => (
  <>
  {/* <AppNavbar/>
  <Sidebar /> */}
  <RouterProvider router={router}/>
  </>
);

export default App;
