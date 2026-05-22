import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Nav/Navbar";
import HomePage from "./Screen/HomePage";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const hideFooterPath = ["/sign-up", "/login"];
  const shouldHideFooter = !hideFooterPath.includes(location.pathname);

  const hideNavbarPath = ["/sign-up", "/login"];
  const shouldHideNavbar = !hideNavbarPath.includes(location.pathname);
  return (
    <>
      <div className="bg-black min-h-screen flex flex-col">
        {shouldHideNavbar && <Navbar />}
        <main className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        {shouldHideFooter && <Footer />}
      </div>
    </>
  );
}

export default App;
