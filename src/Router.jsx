import { Route, Routes } from "react-router-dom";
import Login from "@/pages/Login"
import SenderAWBWrite from "@/pages/SenderAWBWrite";

export default function Router() {

    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/senderAWB-write' element={<SenderAWBWrite />} />
        </Routes>
    );
}
