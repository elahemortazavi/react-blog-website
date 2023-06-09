import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const currentUser = false;
  return (
    <Router>
      <Topbar />

      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/posts">
          <Homepage />
        </Route>

        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>

        <Route path="/login">
          {currentUser ? <Homepage /> : <Login />}
        </Route>

        <Route path="/post/:id">
          <Single />
        </Route>

        <Route path="/write">  
          {currentUser ? <Write /> : <Login />}
        </Route>

        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>

      </Switch>
    </Router>
  );
}

export default App;







// import Topbar from "./components/topbar/Topbar";
// import Homepage from "./pages/homepage/Homepage";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Settings from "./pages/settings/Settings";
// import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   const currentUser = true;
//   return (
//     <Router>
//       <Topbar />
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/posts" element={<Homepage />} />
//         <Route
//           path="/register"
//           element={currentUser ? <Homepage /> : <Register />}
//         />
//         <Route path="/login" element={currentUser ? <Homepage /> : <Login />} />
//         <Route path="/post/:id" element={<Single />} />
//         <Route path="/write" element={currentUser ? <Write /> : <Login />} />
//         <Route
//           path="/settings"
//           element={currentUser ? <Settings /> : <Login />}
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
