import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";

import axios from "axios";

import "./App.css";

import {
  Headers,
  Footer,
  Home,
  About,
  Contact,
  Service,
  Profile,
  CreateCourse,
  DisplayCourse,
  SpecificCourse,
  DisplayJobs,
  CreateJobs,
  Login,
  ForgetPass,
  Register,
  Password,
  ErrorPage,
} from "./components";

function App() {
  // const navigate = useNavigate();
  const [checkLogin, setCheckLogin] = useState(false);

  const getCookies = async () => {
    try {
      const response = await axios.get("/api/checkLoginCookie");
      setCheckLogin(response.data.success);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLoginCookie = async () => {
    try {
      const response = await axios.get("/api/deleteLoginCookies");
      setCheckLogin(response.data.success);
      localStorage.removeItem("role");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCookies();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Headers
          checkLogin={checkLogin}
          deleteLoginCookie={deleteLoginCookie}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/specificCourse/:courseId"
            element={<SpecificCourse />}
          ></Route>
          {/* If user is not logged in then */}
          {!checkLogin && (
            <>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/forgetPassword" element={<ForgetPass />}></Route>
              <Route path="/changePassword/:id" element={<Password />}></Route>
            </>
          )}

          {/* If user is logged in then, */}
          {checkLogin && (
            <>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/createCourse" element={<CreateCourse />}></Route>
              <Route path="/displayCourse" element={<DisplayCourse />}></Route>
              <Route path="/CreateJobs" element={<CreateJobs />}></Route>
              <Route path="/DisplayJobs" element={<DisplayJobs />}></Route>
            </>
          )}
          {/* 404 Page */}
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
