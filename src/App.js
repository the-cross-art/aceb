import React, { useEffect, Suspense } from "react";
import './App.css'
import { lazily } from "react-lazily";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { currentUser } from "./api/auth";
import { AdminRoutes, CommonRoutes, UserRoutes } from "./routes";
import { LoadingOutlined } from "@ant-design/icons";
import Navbar from "./components/nav/Navbar"

const { Header, Footer } = lazily(() => import("./components"));

const App = () => {
  const dispatch = useDispatch();

  // to check firebase auth state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        currentUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                role: res.data.role,
                token: idTokenResult.token,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => console.log(err));
      }
    });

    // cleanup
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Suspense
      fallback={
        <div style={{ position: "fixed", left: "45vw", top: "45vh" }}>
          __ P
          <LoadingOutlined />M __
        </div>
      }
    >
      {/* <Header /> */}
      <Navbar/>
      <ToastContainer />
      <CommonRoutes />
      <AdminRoutes />
      <UserRoutes />
      <Footer />
    </Suspense>
  );
};

export default App;
