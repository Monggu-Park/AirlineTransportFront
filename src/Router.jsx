import { Route, Routes } from "react-router-dom";
import Login from "@/pages/Login"
import SenderAWBWrite from "@/pages/SenderAWBWrite";
import Home, {DetailView, ApprovalView} from "@/pages/Home/index.jsx";
import AirlineSchedule from "@/pages/AirlineSchedule";

export default function Router() {

    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path={'/home'} element={<Home />} />
            <Route path='/senderAWB-write' element={<SenderAWBWrite />} />
            <Route path="/detail/:id" element={<DetailView />} />
            <Route path="/approval/:id" element={<ApprovalView />} />
            <Route path="/airline-schedule" element={<AirlineSchedule/>} />
        </Routes>
    );
}
