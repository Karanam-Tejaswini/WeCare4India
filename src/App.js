import logo from './logo.svg';
import './App.css';
import Activities_Of_WCI from './Activities_Of_WCI/Activities_Of_WCI';
import Students_Dashboard from './Students_Dashboard/Students_Dashboard';
import Teachers_Dashboard from './Teachers_Dashboard/Teachers_Dasboard';
import Main_Page from './Main_Page/bodypage'
import Work from './Main_Page/work';
import Testimonials from './Components/Connect/Cards3';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Connect from './Components/Connect/Connect'
import  './Main_Page/NavBar.css'
// import NavBar from './Main_Page/NavBar';
function App() {
  return (
    // <Router >
    // <div className="App">
    //   <nav className="Nav_Container Nav_List">
    //     <ul>
    //       <li>
    //         <Link to="/">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/connect">Connect</Link>
    //       </li>
    //       <li>
    //         <Link to="/activities">Activities</Link>
    //       </li>
    //       <li>
    //         <Link to="/help">Teachers</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <Switch>
    //     <Route path="/">
    //        <MainPage/>
    //        {/* <Connect1/> */}
    //     </Route>
    //     <Route path="/connect">
    //        <Connect1/>
    //     </Route>
    //     <Route path="/activities">
    //        <Teachers/>
    //     </Route>
    //     <Route path="/help">
    //        <Students/>
    //     </Route>
    //   </Switch>
    // </div>
    // </Router>
    <>
    <MainPage/>
    <Teachers/>
    <Students/>
    <Connect/>
    </>
  );
}

export default App;
function MainPage()
{
return (
  <>
  <Main_Page/>
  <Work/>
  <Activities_Of_WCI/>
  <Testimonials/>
  </>
)
}
function Connect1()
{
  return(
    <Connect/>
  )
}
function Students()
{
  return(
    <Students_Dashboard/>
  )
}
function Teachers()
{
  return(
    <Teachers_Dashboard/>
  )
}