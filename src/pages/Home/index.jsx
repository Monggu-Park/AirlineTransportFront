import * as Styled from "./style.js"
import Sidebar from "@/components/Sidebar/index.jsx";
import {useEffect, useState} from "react";
import {getMyAwb} from "@/apis/sender/index.js";
import {data, useLocation, useNavigate, useParams} from "react-router-dom";
import {getAllAirport, getAllAwb, getPlane} from "@/apis/airline/index.js";
import {changeStatus, getAllCargo} from "@/apis/customs/index.js";
import { Link } from 'react-router-dom';
import MyAwbModal from "@/components/Modal/MyAWBModal/index.jsx";

export default function Home() {
    const [myAwb, setMyAwb] = useState([]);
    const [isAWBModalOpen, setIsAWBModalOpen] = useState(false);
    const [selectedAwb, setSelectedAwb] = useState(null);
    const [AwbList, setAwbList] = useState([]);
    const [cargoList, setCargoList] = useState([]);
    const [airportList, setAirportList] = useState([]);
    const [planeList, setPlaneList] = useState([]);
    const navigate = useNavigate();


    const openModal = (awb) => {
        setSelectedAwb(awb);
        setIsAWBModalOpen(true);
    };

    useEffect(() => {
        if (localStorage.getItem("sender")) {
            getMyAwb().then((response) => {
                setMyAwb(response.data || []);
                localStorage.setItem("myAwb", JSON.stringify(response.data));
            }).catch((e) => {
                console.log(e);
            })
        } else if (localStorage.getItem("airlineEmployee")) {
            const airlineData = localStorage.getItem("airlineEmployee");
            const parsedData = JSON.parse(airlineData);
            getAllAwb().then((data) => {
                setAwbList(data || []);
                localStorage.setItem("AllAwb", JSON.stringify(data));
                getAllAirport().then((res) => {
                    setAirportList(res || []);
                    localStorage.setItem("AllAirport", JSON.stringify(res));
                }).catch((e) => {
                    console.log(e);
                })
                getPlane(parsedData).then((res) => {
                    setPlaneList(res || []);
                    localStorage.setItem("AllPlane", JSON.stringify(res));
                }).catch((e) => {
                    console.log(e);
                })
            }).catch((e) => {
                console.log(e);
            })

        } else if (localStorage.getItem("customsEmployee")) {
            getAllCargo().then((data) => {
                setCargoList(data || []);
                localStorage.setItem("AllCargo", JSON.stringify(data));
            }).catch((e) => {
                console.log(e);
            })
        }
    }, []);

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
                                    onClick={() => openModal(awb)}>
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
                label: '전체',
                items: AwbList,
            },
            {
                id: 1,
                label: '미처리',
                items: AwbList.filter(awb => awb.isValid === false),
            },
            {
                id: 2,
                label: '처리',
                items: AwbList.filter(awb => awb.isValid === true),
            },
        ];

        return (
            <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
                <div style={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#f9f9f9" }}>
                    {/* 탭 헤더 */}
                    <div style={{ display: "flex", cursor: "pointer", borderBottom: "2px solid #ccc", height: "50px" }}>
                        {tabs.map((tab) => (
                            <div
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    flex: 1,
                                    padding: "10px",
                                    textAlign: "center",
                                    backgroundColor: activeTab === tab.id ? "#4CAF50" : "#f0f0f0",
                                    color: activeTab === tab.id ? "#fff" : "#000",
                                    borderBottom: activeTab === tab.id ? "2px solid #4CAF50" : "2px solid transparent",
                                }}
                            >
                                {tab.label}
                            </div>
                        ))}
                    </div>
                    <div style={{flex: 1, overflowY: "auto", padding: "20px"}}>
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
                                <th style={{padding: "15px", fontWeight: "bold"}}>AWB ID</th>
                                <th style={{padding: "15px", fontWeight: "bold"}}>Date</th>
                                <th style={{padding: "15px", fontWeight: "bold"}}>Status</th>
                                <th style={{padding: "15px", fontWeight: "bold"}}>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {tabs[activeTab].items.map((item, index) => (
                                <tr
                                    key={item.id}
                                    style={{
                                        backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff",
                                        borderBottom: "1px solid #ddd",
                                    }}
                                >
                                    <td style={{padding: "15px", color: "#333"}}>{item.id}</td>
                                    <td style={{padding: "15px", color: "#333"}}>{new Date(item.createdAt).toLocaleDateString()}</td>
                                    <td
                                        style={{
                                            padding: "15px",
                                            fontWeight: "bold",
                                            color: item.isValid ? "#28a745" : "#dc3545",
                                        }}
                                    >
                                        {item.isValid ? "Approved" : "Waiting"}
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
                                            onClick={() => navigate(`/airline-schedule`, {state: {item}})}
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
                </div>
            </div>
        );
    };

    const CargoView = ({cargoList}) => {
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
    const location = useLocation();
    const {awb} = location.state || {};
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
                navigate('/home');
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