import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/shared/Header";
import Home from "./components/shared/Home";
import LogIn from "./components/shared/LogIn";
import Register from "./components/shared/Register";
import ServiceDetails from "./components/private/ServiceDetails";
import AuthProvider from "./context/AuthProvider";
import Appointment from "./components/private/Appointment";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import NotFound from "./components/shared/NotFound";
import Footer from "./components/shared/Footer";
import Doctors from "./components/shared/Doctors";
import Testimonials from "./components/shared/Testimonials";

function App() {
  return (
    <AuthProvider>
      <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route  path='/register' component={Register}/>
        <Route  path='/login' component={LogIn}/>
        <Route  path='/appointment' component={Appointment}/>
        <Route  path='/reviews' component={Testimonials}/>
        <Route  path='/doctors' component={Doctors}/>
        <Route  path='/service/:id' component={ServiceDetails}/>
        <Route  path='/about' component={About}/>
        <Route  path='/contact' component={ContactUs}/>
        <Route  path='*' component={NotFound}/>
      </Switch>
      <Footer/>
    </Router>
    </AuthProvider>
  );
}

export default App;
