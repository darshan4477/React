import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
function Students() {
    const [stu, setStu] = useState([]);
    // const {ild} = useParams();
    useEffect(() => {
        fetch("https://64e217afab0037358818ac4d.mockapi.io/Students")
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setStu(res);
            });
    }, []);

    let formattedStudents = stu.map((student) => {
        return (
            <>
                <div className="col-3">
                    <div className="card1">
                        <div class="card">
                            <img id="img" class="card-img-top" src={student.avatar} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">{student.name}</h5>
                                {/* <p class="card-text " style={{ color: "red" }}>{student.FacultyDesignation}</p> */}
                            </div>
                            <ul class="list-group list-group-flush border-border-primary " >
                                {/* <li class="list-group-item" id="list">{fac.FacultyEducationQualification}</li> */}
                                <li class="list-group-item " id="list">{student.age}</li>
                            </ul>
                            <div class="card-body">
                                {/*
                                    pass as in to into index path
                                 */}
                                <Link to={"/StudentDetail/" + student.id} className="btn btn-primary">Student Detail</Link>
                            </div>
                        </div>
                    </div>

                </div>

            </>
        );
    });
    return (
        <>
            <div className="my-2 m-4">
                <Link to="/StudentAdd" className="btn btn-primary mx-2">ADD New Student</Link>
            </div>
            <div className="container">
                <div className="row">{formattedStudents}</div>
            </div>
        </>
    );
};
function StudentDetail() {
    console.log("Hello Satyam");
    const { id } = useParams();
    const [student, setStudent] = useState({});
    useEffect(() => {
        fetch("https://64e217afab0037358818ac4d.mockapi.io/Students/" + id)
            .then((res) => res.json())
            .then((res) => { setStudent(res) });

    }, []);
    return (
        <>
            <div className="row">
                <div className="col-3 mx-5 ">
                    <img src={student.avatar} className="img-fluid" />
                </div>
                <div className="col mx-5">
                    {student.id}
                    <br />
                    {student.name}
                    <br />
                    {student.age}
                    <br />
                    {student.address}
                </div>
            </div>
            <div>
                <Link to="/Student" className="btn btn-primary my-4 mx-5">Back</Link>
            </div>
            <div>
                <Link to={"/StudentAdd/"+student.id} className="btn btn-primary mx-5">Edit</Link>
            </div>

        </>
    );
}


export { Students, StudentDetail };