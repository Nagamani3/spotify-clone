import React, {useContext,Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Pages/HeaderComponents/Navbar";
import "./Global.css";
import Slider from "./Pages/SliderComponents/Slider";
import Home from "./Pages/Home";
import Login from "./Components/AuthComponent/Login";
import SignUp from "./Components/AuthComponent/SignUp";
import PageNotFound from "./Pages/PageNotFound";
import { AuthContextApi } from "./Apis/AuthContext";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import UserHome from "./UserComponent/UserHome";


const App = () => {
  let state = useContext(AuthContextApi);
  
    return (
      <section id="SpotifyMainBlock">
        <article>
          <Router>
            <header>
            
              {!state? <Navbar/>:" "}
            </header>
            <ToastContainer />
            <main>
              {/* dynamic rounting start */}
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/login" exact>
                  <Login />
                </Route>
                <Route path="/signup" exact>
                  <SignUp />
                </Route>
                <Route path="/userhome" exact>
                  < UserHome/>
                </Route>
                <Route path="*">
                  <PageNotFound />
                </Route>
              </Switch>
            </main>
          </Router>
        </article>
      </section>
    );
  };
  // let IsAuthenticatedTemplet = () => {
  //   return (
  //     <h1>
  //       <UserHome />
  //     </h1>
  //   );
  // };

//   return (
//     <Fragment>
//       {state === null ? <IsAnonymousTemplete /> : <IsAuthenticatedTemplet />}
//     </Fragment>
//   );

export default App
