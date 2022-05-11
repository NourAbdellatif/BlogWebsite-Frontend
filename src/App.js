import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewBlog from "./components/Buttons/NewBlog";
import AuthenticationProvider from "./components/context/Authentication";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import UserLogin from "./components/User/UserLogin";

function App() {
  return (
    <AuthenticationProvider>
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/new" element={<NewBlog />}></Route>
          <Route exact path="/login" element={<UserLogin />}></Route>
        </Routes>
      </Router>
    </AuthenticationProvider>
  );
}

export default App;
