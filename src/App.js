import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./pages/About/About";
import { Categories } from "./pages/Categories/Categories";
import { Contact } from "./pages/Contact/Contact";
import { Feedback } from "./pages/Feedback/Feedback";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="pages">
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/feedback" component={Feedback} />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
