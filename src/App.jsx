import { Outlet } from "react-router-dom";
import Footer from "./OurComponents/Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "./store/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const UserData = JSON.parse(localStorage.getItem("UserData"));

    if (UserData != null) {
      dispatch(login(UserData));
    }
  }, [dispatch]);

  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
