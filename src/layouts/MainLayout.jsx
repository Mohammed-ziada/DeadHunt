import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

 



export default function MainLayout() {
    return (
        <>
          

                <Navbar />
                <Outlet />
                <Footer />

          




        </>
    )
}
