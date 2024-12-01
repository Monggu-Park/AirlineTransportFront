import React, { useEffect, useState } from "react";
import * as Styled from "./style";
import {registerSchedule} from "@/apis/airline/index.js";
import {useNavigate} from "react-router-dom";

export default function ScheduleManager({selectedAwbId}) {
    const [schedules, setSchedules] = useState([]);
    const [airportList, setAirportList] = useState([]);
    const [planeList, setPlaneList] = useState([]);
    const [form, setForm] = useState({
        planeId: "",
        departureAirportId: "",
        arrivalAirportId: "",
        departureTime: "",
        arrivalTime: "",
        airlineEmployeesId: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        const storedAirports = localStorage.getItem("AllAirport");
        const storedPlanes = localStorage.getItem("AllPlane");

        if (storedAirports) {
            try {
                setAirportList(JSON.parse(storedAirports));
            } catch (error) {
                console.error("Error parsing AllAirport data:", error);
                setAirportList([]);
            }
        }

        if (storedPlanes) {
            try {
                setPlaneList(JSON.parse(storedPlanes));
            } catch (error) {
                console.error("Error parsing AllPlane data:", error);
                setPlaneList([]);
            }
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddSchedule = () => {
        const airlineEmployee = localStorage.getItem("airlineEmployee");
        const parsed = JSON.parse(airlineEmployee);
        console.log(parsed.id);
        const {
            planeId,
            departureAirportId,
            arrivalAirportId,
            departureTime,
            arrivalTime,
        } = form;
        if (
            !planeId ||
            !departureAirportId ||
            !arrivalAirportId ||
            !departureTime ||
            !arrivalTime
        ) {
            alert("모든 필드를 입력해주세요.");
            return;
        }
        const scheduleData = {
            planeId,
            departureAirportId,
            arrivalAirportId,
            departureTime: new Date(departureTime).toISOString(),
            arrivalTime: new Date(arrivalTime).toISOString(),
            airlineEmployeesId: parsed.id,
            awbId: selectedAwbId
        };
        console.log("서버로 보낼 데이터:", scheduleData);
        setSchedules((prev) => [...prev, scheduleData]);

        setForm({
            planeId: "",
            departureAirportId: "",
            arrivalAirportId: "",
            departureTime: "",
            arrivalTime: "",
        });


        registerSchedule(scheduleData).then(() => {
            navigate("/home")
        }).catch((e) => console.error(e));
    };

    return (
        <Styled.Container>
            <Styled.Title>스케줄 추가</Styled.Title>
            <Styled.FormGroup>
                <Styled.Select
                    name="planeId"
                    value={form.planeId}
                    onChange={handleChange}
                >
                    <option value="">항공기 선택</option>
                    {planeList.map((plane) => (
                        <option key={plane.id} value={plane.id}>
                            {plane.id}
                        </option>
                    ))}
                </Styled.Select>
                <Styled.Select
                    name="departureAirportId"
                    value={form.departureAirportId}
                    onChange={handleChange}
                >
                    <option value="">출발 공항 선택</option>
                    {airportList.map((airport) => (
                        <option key={airport.id} value={airport.id}>
                            {airport.name} ({airport.region})
                        </option>
                    ))}
                </Styled.Select>
                <Styled.Select
                    name="arrivalAirportId"
                    value={form.arrivalAirportId}
                    onChange={handleChange}
                >
                    <option value="">도착 공항 선택</option>
                    {airportList.map((airport) => (
                        <option key={airport.id} value={airport.id}>
                            {airport.name} ({airport.region})
                        </option>
                    ))}
                </Styled.Select>
                <Styled.Input
                    type="datetime-local"
                    name="departureTime"
                    value={form.departureTime}
                    onChange={handleChange}
                />
                <Styled.Input
                    type="datetime-local"
                    name="arrivalTime"
                    value={form.arrivalTime}
                    onChange={handleChange}
                />
                <Styled.Button onClick={handleAddSchedule}>스케줄 추가</Styled.Button>
            </Styled.FormGroup>
            <Styled.Title>추가된 스케줄</Styled.Title>
            {schedules.length > 0 ? (
                <Styled.Table>
                    <Styled.TableHead>
                        <Styled.TableRow>
                            <Styled.TableHeader>항공기</Styled.TableHeader>
                            <Styled.TableHeader>출발 공항</Styled.TableHeader>
                            <Styled.TableHeader>도착 공항</Styled.TableHeader>
                            <Styled.TableHeader>출발 시간</Styled.TableHeader>
                            <Styled.TableHeader>도착 시간</Styled.TableHeader>
                        </Styled.TableRow>
                    </Styled.TableHead>
                    <tbody>
                    {schedules.map((schedule, index) => (
                        <Styled.TableRow key={index}>
                            <Styled.TableCell>{schedule.planeId}</Styled.TableCell>
                            <Styled.TableCell>{schedule.departureAirportId}</Styled.TableCell>
                            <Styled.TableCell>{schedule.arrivalAirportId}</Styled.TableCell>
                            <Styled.TableCell>{schedule.departureTime}</Styled.TableCell>
                            <Styled.TableCell>{schedule.arrivalTime}</Styled.TableCell>
                        </Styled.TableRow>
                    ))}
                    </tbody>
                </Styled.Table>
            ) : (
                <Styled.NoData>추가된 스케줄이 없습니다.</Styled.NoData>
            )}
        </Styled.Container>
    );
}