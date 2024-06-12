import { Outlet, useLocation } from "react-router-dom";
import Footer from "./component/Footer";
import CustomNavbar from "./component/CustomNavbar";



const Root = () => {
    const location = useLocation()
    console.log(location);
    const cancel =location.pathname.includes("/login") || location.pathname.includes("/register")
    return (
        <div>
             { cancel || <CustomNavbar></CustomNavbar>}
            <Outlet></Outlet>
            {cancel || <Footer></Footer>}
        </div>
    );
};

export default Root;