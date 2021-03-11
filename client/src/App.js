import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import WelcomePage from "./Pages/WelcomePage";
import HomePage from "./Pages/HomePage";
import AdminPage from "./Pages/AdminPage";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  const [blogs, setBlogs] = useState([]);
  const getAllBlogs = async () => {
    const { data } = await axios.get("/blog");
    setBlogs(data);
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin" component={AdminPage} />
          <Route path="/home">
            <HomePage blogs={blogs}/>
          </Route>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
