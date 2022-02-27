import './App.css';
import Footer from "./components/main/Footer/Footer";
import Navbar from "./components/main/Navbar/Navbar";
import Sidebar from "./components/main/Sidebar/Sidebar";
import MainRoutes from "./routes/MainRoutes";


function App() {


    return (
    <div className="App">
        <Navbar/>
        <div>
            <Sidebar/>

            <MainRoutes/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;

