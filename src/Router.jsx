import { Route, Routes } from "react-router-dom";
import Login from "@/pages/Login"
import SenderAWBWrite from "@/pages/SenderAWBWrite";
import Home from "@/pages/Home/index.jsx";

export default function Router() {

    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path={'/home'} element={<Home />} />
            <Route path='/senderAWB-write' element={<SenderAWBWrite />} />
        </Routes>
    );
}
