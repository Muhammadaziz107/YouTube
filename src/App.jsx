import "./App.scss";
import Home from "./Pages/Home/Home";
import { Switch, Route } from "react-router-dom";
import Channel from "./Pages/Channel/Channel";
import Videolar from "./Pages/Video/Video";
import Navbar from "./Component/Navbar/Navbar";
import Header from "./Component/Header/Header";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Switch>
      <Route path="/channel" component={Navbar} exact/>
      <Route path="/" component={Navbar}  exact/>
      </Switch>
      <Switch>
      
        <Route path="/" component={Home} exact exact/>
        <Route path="/channel" component={Channel} exact />
        <Route path="/video" component={Videolar} exact />
      </Switch>
    </div>
  );
}

export default App;
