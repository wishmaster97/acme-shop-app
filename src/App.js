import  {Component} from 'react';
import './App.css'
import {BrowserRouter ,Route,Switch} from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Donate from "./components/Donate";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import Announcement from './components/Announcement';



 class App extends Component {
   constructor(props) {
     super(props);
     this.state = { 
       title:'edyoda'
      }
   }
  render() { 
     return ( <>
     <BrowserRouter>
     <Header/>
     <Switch>
       <Route exact path='/' component={Home}  />
       <Route  path='/about' component={About}  />
       <Route  path='/shop' component={Shop}  />
       <Route  path='/donate' component={Donate}  />
       <Route  path='/contact' component={Contact}  />
       <Route path='/announcement' component={Announcement}/>
       <Route   component={Error}  />

     </Switch>
     </BrowserRouter>
      </> );
   }
 }
  
 export default App;