import * as Styled from "./style.js"
import Sidebar from "@/components/Sidebar/index.jsx";
import {useEffect, useState} from "react";
import {getMyAwb} from "@/apis/sender/index.js";
import {data, useLocation, useNavigate, useParams} from "react-router-dom";
import {getAllAwb} from "@/apis/airline/index.js";
import {changeStatus, getAllCargo} from "@/apis/customs/index.js";
import { Link } from 'react-router-dom';
import MyAwbModal from "@/components/Modal/MyAWBModal/index.jsx";

export default function Home() {
    const [myAwb, setMyAwb] = useState([]);
    const [isAWBModalOpen, setIsAWBModalOpen] = useState(false);
    const [selectedAwb, setSelectedAwb] = useState(null);
    const [AwbList, setAwbList] = useState([]);
    const [cargoList, setCargoList] = useState([]);
    const navigate = useNavigate();


    const openModal = (awb) => {
        setSelectedAwb(awb);
        setIsAWBModalOpen(true);
    };

    /*
    목데이터 사용
     */
    const mockMyAwb = [
        {
            id: "dbbce3fa-63db-4574-a124-4fd7d1f55bf1",
            sender: {
                id: "b0bdc624-1dad-4aaa-85fe-76c9bacc236f",
                customId: "tomas",
                name: "park",
                address: "Incheon",
                phoneNumber: "010-0000-0001",
            },
            cargo: {
                id: "1faf2d3d-28d6-4879-b2c2-e7c8672d15ba",
                description: "knife, gun",
                status: "Waiting",
                weight: 4.0,
                width: 8.0,
                height: 9.0,
            },
            schedule: null,
            receiverName: "kiki",
        },
    ];

    const mockAwbList = [
        {
            id: "dbbce3fa-63db-4574-a124-4fd7d1f55bf1",
            sender: {
                id: "b0bdc624-1dad-4aaa-85fe-76c9bacc236f",
                customId: "tomas",
                name: "park",
                address: "Incheon",
                phoneNumber: "010-0000-0001",
            },
            cargo: {
                id: "1faf2d3d-28d6-4879-b2c2-e7c8672d15ba",
                description: "knife, gun",
                status: "Waiting",
                weight: 4.0,
                width: 8.0,
                height: 9.0,
            },
            schedule: null,
            receiverName: "kiki",
        },
        {
            id: "703ba816-5a68-4819-9728-81711f7ae348",
            sender: {
                id: "1c22c345-91d5-4ddf-9372-51db8e0b9c10",
                customId: "lee",
                name: "john",
                address: "Seoul",
                phoneNumber: "010-1111-2222",
            },
            cargo: {
                id: "2cfdc8ad-0f3f-41e7-a017-d2c6c920529b",
                description: "electronics",
                status: "Approved",
                weight: 10.0,
                width: 15.0,
                height: 20.0,
            },
            schedule: "2023-12-01",
            receiverName: "jane",
        },
    ];

    const mockCargoList = [
        {
            id: "0a80f25c-c51f-482b-9912-f07c2604272d",
            description: "transport for small thing",
            status: "Reject",
            weight: 4.0,
            width: 5.0,
            height: 10.0,
        },
        {
            id: "703ba816-5a68-4819-9728-81711f7ae348",
            description: "electronic stuff",
            status: "Approved",
            weight: 5.0,
            width: 7.0,
            height: 17.0,
        },
        {
            id: "c23be74e-78f8-4a56-b56a-e14d3cf5304b",
            description: "furniture",
            status: "Pending",
            weight: 20.0,
            width: 30.0,
            height: 40.0,
        },
    ];

    // useEffect(() => {
    //     if (localStorage.getItem("sender")) {
    //         getMyAwb().then((response) => {
    //             setMyAwb(response.data || []);
    //             localStorage.setItem("myAwb", JSON.stringify(response.data));
    //         }).catch((e) => {
    //             console.log(e);
    //         })
    //     } else if (localStorage.getItem("airlineEmployee")) {
    //         getAllAwb().then((data) => {
    //             setAwbList(data || []);
    //             localStorage.setItem("AllAwb", JSON.stringify(data));
    //         }).catch((e) => {
    //             console.log(e);
    //         })
    //     } else if (localStorage.getItem("customsEmployee")) {
    //         getAllCargo().then((data) => {
    //             setCargoList(data || []);
    //             localStorage.setItem("AllCargo", JSON.stringify(data));
    //         }).catch((e) => {
    //             console.log(e);
    //         })
    //     }
    // }, []);


    const MyAwbView = ({ myAwb }) => {
        return (
            <div>
                <h1 style={{ margin: "10px 0" }}>My AWBs</h1>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                    <tr>
                        <th style={{ border: "1px solid #ccc", padding: "10px", textAlign: "left" }}>ID</th>
                        <th style={{ border: "1px solid #ccc", padding: "10px", textAlign: "left" }}>CargoStatus</th>
                        <th style={{ border: "1px solid #ccc", padding: "10px", textAlign: "left" }}>Approved</th>
                        <th style={{ border: "1px solid #ccc", padding: "10px", textAlign: "left" }}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {myAwb.map((awb) => (
                        <tr key={awb.id}>
                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>{awb.id}</td>
                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>{awb.cargo.status || "Unknown"}</td>
                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>{awb.isValid.toString() || "No Status"}</td>
                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                                <button
                                    style={{
                                        padding: "5px 10px",
                                        backgroundColor: "#007bff",
                                        color: "#fff",
                                        border: "none",
                                        cursor: "pointer",
                                        borderRadius: "3px",
                                    }}
                                    // onClick={() => navigate(`/awb/${awb.id}`, {state: awb})}
                                    onClick={() => openModal(mockMyAwb[0])}>
                                    보기
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                {isAWBModalOpen && (
                    <MyAwbModal
                        isOpen={isAWBModalOpen}
                        onClose={() => setIsAWBModalOpen(false)}
                        awbData={selectedAwb}
                    />
                )}
            </div>
        );
    }

    const TabContent = ({items}) => {
        return (
            <div>
                <table style={{width: "100%", borderCollapse: "collapse"}}>
                    <thead>
                    <tr>
                        <th style={{border: "1px solid #ccc", padding: "10px", textAlign: "left"}}>ID</th>
                        <th style={{border: "1px solid #ccc", padding: "10px", textAlign: "left"}}>Name</th>
                        <th style={{border: "1px solid #ccc", padding: "10px", textAlign: "left" }}>Text</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                                <Link to={`/detail/${item.id}`}>{item.id}</Link>
                            </td>
                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>{item.name}</td>
                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>{item.text}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    };


    const TabView = ({ AwbList }) => {
        const [activeTab, setActiveTab] = useState(0);

        // 각 탭별 리스트 데이터
        const tabs = [
            {
                id: 0,
                label: 'Tab 1',
                items: AwbList.map((awb) => ({
                    id: awb.id,
                    name: awb.sender.name || "Unknown",
                    text: awb.isValid.toString() || "No status available",
                })),
            },
            {
                id: 1,
                label: 'Tab 2',
                items: [
                    { id: 4, name: 'Diana', text: 'Welcome to Tab 2!' },
                    { id: 4, name: 'Diana', text: 'Welcome to Tab 2!' },
                    { id: 5, name: 'Eve', text: 'This is another example.' },
                ],
            },
            {
                id: 2,
                label: 'Tab 3',
                items: [
                    { id: 4, name: 'Diana', text: 'Welcome to Tab 2!' },
                    { id: 6, name: 'Frank', text: 'Tab 3 has more data!' },
                    { id: 7, name: 'Grace', text: 'Let\'s add more content!' },
                    { id: 8, name: 'Hank', text: 'React is fun!' },
                    { id: 9, name: 'Ivy', text: 'Enjoy coding!' },
                ],
            },
        ];

        return (
            <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
                <div style={{ display: "flex", cursor: "pointer", borderBottom: "2px solid #ccc", height: "50px" }}>
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                flex: 1,
                                padding: "10px",
                                textAlign: "center",
                                backgroundColor: activeTab === tab.id ? "#007bff" : "#f0f0f0",
                                color: activeTab === tab.id ? "#fff" : "#000",
                                borderBottom: activeTab === tab.id ? "2px solid #007bff" : "2px solid transparent",
                            }}
                        >
                            {tab.label}
                        </div>
                    ))}
                </div>
                <div style={{ flex: 1, overflowY: "auto", padding: "20px", borderTop: "none" }}>
                    <TabContent items={tabs[activeTab].items} />
                </div>
            </div>
        );
    };

    const CargoView = ({ cargoList }) => {
        return (
            <div style={{padding: "20px", backgroundColor: "#f9f9f9"}}>
                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        borderRadius: "10px",
                        overflow: "hidden",
                    }}
                >
                    <thead>
                    <tr style={{backgroundColor: "#4CAF50", color: "#fff", textAlign: "left"}}>
                        <th style={{padding: "15px", fontWeight: "bold"}}>ID</th>
                        <th style={{padding: "15px", fontWeight: "bold"}}>Description</th>
                        <th style={{padding: "15px", fontWeight: "bold"}}>Status</th>
                        <th style={{padding: "15px", fontWeight: "bold"}}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cargoList.map((cargo, index) => (
                        <tr
                            key={cargo.id}
                            style={{
                                backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff",
                                borderBottom: "1px solid #ddd",
                            }}
                        >
                            <td style={{padding: "15px", color: "#333"}}>{cargo.id}</td>
                            <td style={{padding: "15px", color: "#333"}}>{cargo.description}</td>
                            <td
                                style={{
                                    padding: "15px",
                                    fontWeight: "bold",
                                    color:
                                        cargo.status === "Delivered"
                                            ? "#28a745"
                                            : cargo.status === "Process"
                                                ? "#ffc107"
                                                : "#dc3545",
                                }}
                            >
                                {cargo.status}
                            </td>
                            <td style={{padding: "15px"}}>
                                <button
                                    style={{
                                        padding: "10px 20px",
                                        backgroundColor: "#007bff",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        transition: "background-color 0.3s",
                                    }}
                                    onClick={() => navigate(`/approval`, {state: {cargo}})}
                                    onMouseOver={(e) =>
                                        (e.target.style.backgroundColor = "#0056b3")
                                    }
                                    onMouseOut={(e) =>
                                        (e.target.style.backgroundColor = "#007bff")
                                    }
                                >
                                    보기
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    };

    const renderContent = () => {
        if (localStorage.getItem("sender")) {
            return <MyAwbView myAwb={myAwb} navigate={navigate}/>;
        } else if (localStorage.getItem("airlineEmployee")) {
            return (
                <>
                    <h1 style={{
                        margin: '10px 0',
                    }}>All AWBs</h1>
                    <TabView AwbList={AwbList}/>
                </>
            );
        } else if (localStorage.getItem("customsEmployee")) {
            return (
                <>
                    <h1 style={{
                        margin: '10px 0',
                    }}>All Cargos</h1>
                    <CargoView cargoList={cargoList}/>
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

const DetailView = () => {
    const {id} = useParams(); // URL에서 ID를 가져옴
    const [date, setDate] = useState('');
    const [formData, setFormData] = useState({
        name: 'Example Name',
        text: 'Example Text for DetailView',
    });

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Selected Date:', date);
        // 날짜를 선택하고 제출하는 로직을 추가
    };

    return (
        <div>
            <Sidebar/>
            <Styled.PageContainer>
                <Styled.ContentContainer>
                    <div style={{display: 'flex', padding: '20px', gap: '40px'}}>
                        {/* 왼쪽: ID, Name, Text 가로로 나열 */}
                        <div style={{flex: 1}}>
                            <h2>Detail View for ID: {id}</h2>
                            <div style={{marginBottom: '20px'}}>
                                <div><strong>ID:</strong> {id}</div>
                                <div><strong>Name:</strong> {formData.name}</div>
                                <div><strong>Text:</strong> {formData.text}</div>
                            </div>
                        </div>

                        {/* 오른쪽: 날짜 입력, 제출 버튼 및 테이블 */}
                        <div style={{flex: 1}}>
                            {/* 날짜 입력과 제출 버튼 */}
                            <form onSubmit={handleSubmit} style={{marginBottom: '20px'}}>
                                <label htmlFor="date">날짜 선택:</label>
                                <input
                                    type="date"
                                    id="date"
                                    value={date}
                                    onChange={handleDateChange}
                                    style={{marginLeft: '10px'}}
                                />
                                <button type="submit" style={{marginLeft: '10px', padding: '10px 20px'}}>
                                    제출
                                </button>
                            </form>

                            {/* 테이블: to, from, price */}
                            <table style={{width: '100%', borderCollapse: 'collapse'}}>
                                <thead>
                                <tr>
                                    <th style={{padding: '8px', border: '1px solid #ddd'}}>To</th>
                                    <th style={{padding: '8px', border: '1px solid #ddd'}}>From</th>
                                    <th style={{padding: '8px', border: '1px solid #ddd'}}>Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td style={{padding: '8px', border: '1px solid #ddd'}}>John Doe</td>
                                    <td style={{padding: '8px', border: '1px solid #ddd'}}>Jane Smith</td>
                                    <td style={{padding: '8px', border: '1px solid #ddd'}}>$100</td>
                                </tr>
                                <tr>
                                    <td style={{padding: '8px', border: '1px solid #ddd'}}>Alice Brown</td>
                                    <td style={{padding: '8px', border: '1px solid #ddd'}}>Bob White</td>
                                    <td style={{padding: '8px', border: '1px solid #ddd'}}>$200</td>
                                </tr>
                                <tr>
                                    <td style={{padding: '8px', border: '1px solid #ddd'}}>Charlie Black</td>
                                    <td style={{padding: '8px', border: '1px solid #ddd'}}>David Green</td>
                                    <td style={{padding: '8px', border: '1px solid #ddd'}}>$300</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Styled.ContentContainer>
            </Styled.PageContainer>
        </div>
    );
};

const ApprovalView = () => {
    const location = useLocation();
    const {cargo} = location.state || {};
    const [approvalStatus, setApprovalStatus] = useState(""); // 승인 상태를 관리
    const navigate = useNavigate();
    const {id} = useParams(); // URL에서 ID를 가져옴

    // 승인 버튼 클릭 핸들러
    const handleApprove = (e) => {
        e.preventDefault();
        setApprovalStatus(() => {
            const newState = "Approved";
            const data = {
                cargoId: cargo.id,
                cargoStatus: newState
            };
            console.log(data);
            changeStatus(data).then(() => {
                navigate("/airline-schedule");
            }).catch((e) => {console.error(e);});
            return newState;
        });
    };

    // 거절 버튼 클릭 핸들러
    const handleReject = (e) => {
        e.preventDefault();
        setApprovalStatus(() => {
            const newState = "Reject";
            const data = {
                cargoId: cargo.id,
                cargoStatus: newState
            };
            console.log(data);
            changeStatus(data).then(() => {
                navigate('/home');
            }).catch((e) => {console.error(e);});
            return newState;
        });// 거절 시 처리할 로직
    };

    return (
        <div>
            <Sidebar/>
            <Styled.PageContainer>
                <Styled.ContentContainer>
                    <div style={{padding: "20px"}}>
                        <h2>Approval View for ID: {cargo.id}</h2>

                        {/* 테이블 - 세로 정렬 */}
                        <Styled.Table>
                            <tbody>
                            <Styled.TableRow>
                                <Styled.TableHeader>Description</Styled.TableHeader>
                                <Styled.TableCell>{cargo.description}</Styled.TableCell>
                            </Styled.TableRow>
                            <Styled.TableRow>
                                <Styled.TableHeader>Weight</Styled.TableHeader>
                                <Styled.TableCell>{cargo.weight} KG</Styled.TableCell>
                            </Styled.TableRow>
                            <Styled.TableRow>
                                <Styled.TableHeader>Width</Styled.TableHeader>
                                <Styled.TableCell>{cargo.width} CM</Styled.TableCell>
                            </Styled.TableRow>
                            <Styled.TableRow>
                                <Styled.TableHeader>Height</Styled.TableHeader>
                                <Styled.TableCell>{cargo.height} CM</Styled.TableCell>
                            </Styled.TableRow>
                            <Styled.TableRow>
                                <Styled.TableHeader>Status</Styled.TableHeader>
                                <Styled.TableCell>
                                    <Styled.StatusBadge status={cargo.status}>{cargo.status}</Styled.StatusBadge>
                                </Styled.TableCell>
                            </Styled.TableRow>
                            </tbody>
                        </Styled.Table>

                        {/* 버튼 - 승인/거절 */}
                        <div style={{marginTop: "20px", textAlign: "right"}}>
                            <Styled.ActionButton approve onClick={handleApprove}>
                                승인
                            </Styled.ActionButton>
                            <Styled.ActionButton onClick={handleReject}>거절</Styled.ActionButton>
                        </div>

                        {/* 승인 상태 */}
                        {approvalStatus && (
                            <div style={{marginTop: "20px", fontWeight: "bold"}}>
                                {`상태: ${approvalStatus}`}
                            </div>
                        )}
                    </div>
                </Styled.ContentContainer>
            </Styled.PageContainer>
        </div>

    );
};

export {DetailView, ApprovalView};