import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Assets/Context/AuthProvider";
import Footer from "./Common/commonComponents/Footer";
import Header from "./Common/commonComponents/Header";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import AllPackages from "./Pages/AllPackages/AllPackages";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Process from "./Pages/Process/Process";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import PrivateRoute from "./Common/utilityComponents/PrivateRoute";
import TourDetail from "./Pages/TourDetail/TourDetail";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/process">
            <Process></Process>
          </Route>
          <Route path="/allpackages">
            <AllPackages></AllPackages>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/tourdetail/:tourdetailID">
            <TourDetail></TourDetail>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
