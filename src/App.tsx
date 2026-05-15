import Footer from "./Components/Footer/Footer";

import Navbar from "./Components/Nav/Navbar";
import HomePage from "./Screen/HomePage";

function App() {
  return (
    <>
      <div className="bg-black h-full">
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </>
  );
}

export default App;
