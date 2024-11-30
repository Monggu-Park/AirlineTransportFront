import * as Styled from "./style.js"
import Sidebar from "@/components/Sidebar/index.jsx";
import {useEffect, useState} from "react";
import {getMyAwb} from "@/apis/sender/index.js";
import {data, useNavigate} from "react-router-dom";
import {getAllAwb} from "@/apis/airline/index.js";
import {getAllCargo} from "@/apis/customs/index.js";

export default function Home() {
    const [myAwb, setMyAwb] = useState([]);
    const [AwbList, setAwbList] = useState([]);
    const [cargoList, setCargoList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("sender")) {
            getMyAwb().then((data) => {
                if (Array.isArray(data) && data.length === 0) {
                    setMyAwb([]);
                } else {
                    localStorage.setItem("myAwb", JSON.stringify(data));
                    setMyAwb(data);
                }
            }).catch((e) => {
                console.log(e);
            })
        } else if (localStorage.getItem("airlineEmployee")) {
            getAllAwb().then((data) => {
                localStorage.setItem("AllAwb", JSON.stringify(data));
                setAwbList(data);
            })
        } else if (localStorage.getItem("customsEmployee")) {
            getAllCargo().then((data) => {
                localStorage.setItem("AllCargo", JSON.stringify(data));
                setCargoList(data);
            })
        }
    }, []);

    const handleAwbClick = (awbId) => {
        navigate(`/awb/${awbId}`);
    };

    const renderContent = () => {
        if (localStorage.getItem("sender")) {
            return (
                <>
                    <h1>My AWBs</h1>
                    <Styled.AwbContainer>
                        {(myAwb).map((awb) => (
                            <Styled.AwbBox key={awb.id} onClick={() => handleAwbClick(awb.id)}>
                                <h3>{awb.name}</h3>
                                <p>ID: {awb.id}</p>
                                <p>Status: {awb.status}</p>
                            </Styled.AwbBox>
                        ))}
                    </Styled.AwbContainer>
                </>
            );
        } else if (localStorage.getItem("airlineEmployee")) {
            return (
                <>
                    <h1>All AWBs</h1>
                    <Styled.AwbContainer>
                        {AwbList.map((awb) => (
                            <Styled.AwbBox key={awb.id} onClick={() => handleAwbClick(awb.id)}>
                                <h3>{awb.name}</h3>
                                <p>ID: {awb.id}</p>
                                <p>Status: {awb.status}</p>
                            </Styled.AwbBox>
                        ))}
                    </Styled.AwbContainer>
                </>
            );
        } else if (localStorage.getItem("customsEmployee")) {
            return (
                <>
                    <h1>All Cargo</h1>
                    <Styled.AwbContainer>
                        {cargoList.map((cargo) => (
                            <Styled.AwbBox key={cargo.id}>
                                <h3>{cargo.name}</h3>
                                <p>ID: {cargo.id}</p>
                                <p>Weight: {cargo.weight}</p>
                            </Styled.AwbBox>
                        ))}
                    </Styled.AwbContainer>
                </>
            );
        } else {
            return <p>No data available.</p>;
        }
    };

    return (
        <div>
            <Sidebar/>
            <Styled.PageContainer>
                <Styled.ContentContainer>
                    {renderContent()}
                </Styled.ContentContainer>
            </Styled.PageContainer>
        </div>
    );
}