import { Route, Routes } from "react-router-dom";
import Login from "@/pages/Login"
import SenderAWBWrite from "@/pages/SenderAWBWrite";
import Home, {DetailView, ApprovalView} from "@/pages/Home/index.jsx";
import AWBAndSchedule from "@/pages/AirlineSchedule";
export default function Router() {

    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path={'/home'} element={<Home />} />
            <Route path='/senderAWB-write' element={<SenderAWBWrite />} />
            <Route path="/detail" element={<DetailView />} />
            <Route path="/approval" element={<ApprovalView />} />
            <Route path="/airline-schedule" element={<AWBAndSchedule/>} />
        </Routes>
    );
}
