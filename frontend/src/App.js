import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";

import axios from "axios";

import "./App.css";

import {
  Login,
  ForgetPass,
  Register,
  Password,
  Headers,
  Footer,
  Home,
  About,
  Contact,
  Service,
  CreateCourse,
  DisplayCourse,
  SpecificCourse,
  Profile,
  ErrorPage,
} from "./components";

function App() {
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
        {console.log(checkLogin)}
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
