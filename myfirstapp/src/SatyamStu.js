import { useEffect, useState } from "react";
import { Outlet, Link, BrowserRouter, Routes, Route, useParams } from "react-router-dom"

function Student() {
    const [student, setStudent] = useState([]);
    useEffect(() => {
        fetch("https://64da0fe4e947d30a260ab3e6.mockapi.io/Student")
            .then((res) => { return res.json(); })
            .then((res) => { setStudent(res) });
    }, []);

    const StudentData = student.map((stu, index) => {
        return (
            <>
                <div className="col-3" key={index}>
                    <div className="card1 text-center">
                        <div className="card">
                            <img id="img" className="card-img-top" src={stu.avatar} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{stu.name}</h5>
                                <p className="card-text ">{stu.id}</p>
                            </div>
                            <div className="card-body">
                                <Link to={"/StudentDetail/" + stu.id} className="btn btn-primary me-4">Student Detail</Link>
                                <button className="btn btn-danger" onClick={() => {
                                    fetch("://64da0fe4e947d30a260ab3e6.mockapi.io/Studenthttps" + "/" + stu.id,{ method: "Delete" });
                                    setStudent([
                                        ...student.filter((e) => {
                                            return (e.id !== stu.id);
                                        })
                                    ]);
                                }}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    });
    return (
        <>
            <div className="row">{StudentData}</div>
        </>
    );
}
function StudentDetail() {
    const { id } = useParams();
    const [stu, setStu] = useState({});
    useEffect(() => {
        fetch("https://64da0fe4e947d30a260ab3e6.mockapi.io/Student/" + id)
            .then((res) => { return res.json() })
            .then((res) => { setStu(res) });
            console.log(stu)
    }, []);
    return (
        <>
            <div className="row">
                <div className="col-3">
                    <img src={stu.avatar} className="img-fluid" />
                </div>
                <div className="col">
                    {stu.id}
                    <br />
                    {stu.name}
                    <br />
                    {stu.age}
                    <br />
                    {stu.address}
                </div>
            </div>
            <div>
                <Link to="/Student" className="btn btn-primary">Back</Link>
            </div>
        </>
    );
}

export { Student, StudentDetail }