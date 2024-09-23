import { Outlet } from "react-router-dom";
import Footer from "./OurComponents/Footer/Footer";

function App() {
  return (
    <div>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
