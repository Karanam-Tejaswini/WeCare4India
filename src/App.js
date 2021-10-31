import logo from './logo.svg';
import './App.css';
import Activities_Of_WCI from './Activities_Of_WCI/Activities_Of_WCI';
import Students_Dashboard from './Students_Dashboard/Students_Dashboard';
import Teachers_Dashboard from './Teachers_Dashboard/Teachers_Dasboard';
import Main_Page from './Main_Page/bodypage'
import Work from './Main_Page/work';
// import NavBar from './Main_Page/NavBar';
function App() {
  return (
    <div className="App">
      <div>
      <Main_Page/>
      <Work/>
      <Activities_Of_WCI/>
      <Students_Dashboard/>
      <Teachers_Dashboard/>
      </div>
      
    </div>
  );
}

export default App;
