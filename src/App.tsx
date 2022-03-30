import AppCss from './App.module.css';
import Footer from "./components/main/Footer/Footer";
import Navbar from "./components/main/Navbar/Navbar";
import Sidebar from "./components/main/Sidebar/Sidebar";
import MainRoutes from "./routes/MainRoutes";


function App() {



    return (
    <div className={AppCss.app}>
        <Navbar/>
        <div className={AppCss.sidebarMain}>
            <Sidebar/>
            {/*<div className={AppCss.main}>*/}
            <MainRoutes/>
            {/*</div>*/}
        </div>
        <Footer/>
    </div>
  );
}

export default App;

