import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* navbar*/}
      <Navbar></Navbar>
      {/* content*/}
      <HomePage></HomePage>
      {/* footer*/}
      <Footer></Footer>
    </div>
  );
}

export default App;
