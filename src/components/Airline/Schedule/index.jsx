import React, { useEffect, useState } from "react";
import * as Styled from "./style"

export default function ScheduleManager() {
    const [schedules, setSchedules] = useState([]);
    const [airlineOptions, setAirlineOptions] = useState([]);
    const [form, setForm] = useState({
        airline: "",
        from: "",
        to: "",
        dateTime: "",
        price: "",
    });

    // 공항 목데이터
    const mockAirports = [
        {
            id: "06a5607b-447c-43bf-a0b4-69b60e96efd0",
            name: "Incheon International Airport",
            region: "Incheon",
        },
        {
            id: "20f2a75d-5cf5-4e1e-987b-c0a7d19a6d8b",
            name: "Gimpo International Airport",
            region: "Seoul",
        },
        {
            id: "fd45a67c-a6e5-4c34-b5f1-b12e5c51f6bc",
            name: "Los Angeles International Airport",
            region: "Los Angeles",
        },
    ];

    useEffect(() => {
        const fetchAirlines = async () => {
            const mockResponse = [
                { id: "1eb3cbbe-ebcc-4cad-9653-8c0d10d16e7d", name: "Asiana" },
                { id: "2bc4dbdd-ec44-4fac-9653-6c2d10d13f7e", name: "Korean Air" },
            ];
            setAirlineOptions(mockResponse);
        };

        // fetchAirlines 호출 후 반환값을 처리
        fetchAirlines()
            .then(() => {
                console.log("Airline options loaded successfully.");
            })
            .catch((err) => {
                console.error("Error loading airline options:", err);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddSchedule = () => {
        if (!form.airline || !form.from || !form.to || !form.dateTime || !form.price) {
            alert("모든 필드를 입력해주세요.");
            return;
        }
        setSchedules((prev) => [...prev, form]);
        setForm({ airline: "", from: "", to: "", dateTime: "", price: "" });
    };

    return (
        <Styled.Container>
            <Styled.Title>스케줄 추가</Styled.Title>
            <Styled.FormGroup>
                <Styled.Select
                    name="airline"
                    value={form.airline}
                    onChange={handleChange}
                >
                    <option value="">항공사를 선택하세요</option>
                    {airlineOptions.map((airline) => (
                        <option key={airline.id} value={airline.name}>
                            {airline.name}
                        </option>
                    ))}
                </Styled.Select>
                <Styled.Select
                    name="from"
                    value={form.from}
                    onChange={handleChange}
                >
                    <option value="">출발 공항 선택</option>
                    {mockAirports.map((airport) => (
                        <option key={airport.id} value={airport.name}>
                            {airport.name} ({airport.region})
                        </option>
                    ))}
                </Styled.Select>
                <Styled.Select
                    name="to"
                    value={form.to}
                    onChange={handleChange}
                >
                    <option value="">도착 공항 선택</option>
                    {mockAirports.map((airport) => (
                        <option key={airport.id} value={airport.name}>
                            {airport.name} ({airport.region})
                        </option>
                    ))}
                </Styled.Select>
                <Styled.Input
                    type="datetime-local"
                    name="dateTime"
                    value={form.dateTime}
                    onChange={handleChange}
                />
                <Styled.Input
                    type="text"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="가격 (e.g., $300)"
                />
                <Styled.Button onClick={handleAddSchedule}>스케줄 추가</Styled.Button>
            </Styled.FormGroup>
            <Styled.Title>추가된 스케줄</Styled.Title>
            {schedules.length > 0 ? (
                <Styled.Table>
                    <Styled.TableHead>
                        <Styled.TableRow>
                            <Styled.TableHeader>항공사</Styled.TableHeader>
                            <Styled.TableHeader>출발</Styled.TableHeader>
                            <Styled.TableHeader>도착</Styled.TableHeader>
                            <Styled.TableHeader>시간</Styled.TableHeader>
                            <Styled.TableHeader>가격</Styled.TableHeader>
                        </Styled.TableRow>
                    </Styled.TableHead>
                    <tbody>
                    {schedules.map((schedule, index) => (
                        <Styled.TableRow key={index}>
                            <Styled.TableCell>{schedule.airline}</Styled.TableCell>
                            <Styled.TableCell>{schedule.from}</Styled.TableCell>
                            <Styled.TableCell>{schedule.to}</Styled.TableCell>
                            <Styled.TableCell>{schedule.dateTime}</Styled.TableCell>
                            <Styled.TableCell>{schedule.price}</Styled.TableCell>
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