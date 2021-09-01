import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, useLocation, useHistory } from "react-router-dom";
import Pharmacies from "./pages/Pharmacies/Pharmacies";
import { Contact } from "./pages/Contact/Contact";
import { Feedback } from "./pages/Feedback/Feedback";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";
import GuardedRoute from "./components/GuardedRoute";
import PharmaHome from "./pages/PharmaHome/PharmaHome";
import ViewMedicine from "./pages/ViewMedicine/ViewMedicine";
import ManageMedicine from "./pages/ManageMedicine/ManageMedicine"
import ManageProfile from "./pages/ManageProfile/ManageProfile"
import FeedbackPh from "./pages/FeedbackPh/FeedbackPh"
import Prescriped from "./pages/Categories/Prescriped"
import Home1 from "./pages/Categories/Home";

function App() {
  const history = useHistory();
  console.log()
  const getNav = () => {
    return
  }
  return (
    <>

      {/* {history.location.pathname === '/login' ? <Navbar /> : null} */}
      <div className="pages">
        <Switch>
          <Route exact path="/Pharmacies" component={Pharmacies} />
          <Route exact path="/Prescriped" component={Prescriped} />
          <Route exact path="/Home1" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/feedback" component={Feedback} />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <GuardedRoute exact path="/pharmaHome" component={PharmaHome} />
          <GuardedRoute exact path="/ViewMedicine" component={ViewMedicine} />
          <GuardedRoute exact path="/ManageProfile" component={ManageProfile} />
          <GuardedRoute exact path="/ManageMedicine" component={ManageMedicine} />
          <GuardedRoute exact path="/FeedbackPh" component={FeedbackPh} />
        </Switch>
      </div>

    </>
  );
}

export default App;
