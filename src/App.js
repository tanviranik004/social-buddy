import React from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Comments from './components/Comments/Comments';
import Post from './components/Post/Post';




function App() {
  

  return ( 
    <div>
         <Router>
           <Switch>
             <Route path='/home'>
               <Home/>
             </Route>
             <Route path='/userDetails/:userId'>
               <Post></Post>
             </Route>
             <Route path='/comments/:postId'>
              <Comments></Comments>
             </Route>
             <Route  exact path='/'>
               <Home/>
             </Route>
             <Route path="*">
               <NoMatch/>
             </Route>
           </Switch>

         </Router>

    </div>
  );
}

export default App;
