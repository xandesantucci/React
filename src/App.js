// import rathalos from './rath.jpg';
// // import logo from './logo.svg';
// import './App.css';

//Aula3

// function App(monster) {
//   console.log('my favorite monster is :',monster.monster)
//   console.log(' with the ',monster.element)
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//         <h1>My favourite monster is :{monster.monster} </h1>
//         <h1>He's element is {monster.element} </h1>
//         <img src={rathalos}/>
        
//       </header>
//     </div>
//   );
// }

//Aula 3 tela Login

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import {Form} from './Pages/Login/index'
import { Home } from "./Pages/Home/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Form />} ></Route>
        <Route exact path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
