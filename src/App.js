
import "./App.css";
import Calendars from "./pages/calendar";
import "react-calendar/dist/Calendar.css";
import Header from "./header";
import { Route } from "react-router";
import { Switch } from "react-router";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { Redirect } from "react-router";
import Tasks from "./pages/tasks";
import { useState } from "react";

function App() {
  const token = localStorage.getItem("token");
  const [month,setMonth] = useState("")
  const [date,setDate] = useState("")
  const [pathUrl,setPathUrl] = useState(`/schedule/${localStorage.getItem("month")}/${localStorage.getItem("date")}`)
  return (
    <>
      {!token && (
        <Switch>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/*" exact>
            <Redirect to="/login" />
            <Login />
          </Route>
        </Switch>
      )}
      {token && (
        <>
          <Header />
          <Switch>
            <Route path="/home">
              <Calendars  setPathUrl ={setPathUrl} setDate ={setDate} setMonth ={setMonth} pathUrl ={pathUrl} month={month}/>
            </Route>
            <Route path= {pathUrl} exact>
              <Tasks month ={month} date = {date}/>
            </Route>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
          </Switch>
        </>
      )}
    </>
  );
}

export default App;
