import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function StudentAdd() {
    const [data, setdata] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if(params.id>0){
            fetch("https://64e217afab0037358818ac4d.mockapi.io/Students/"+params.id,{method:"get"})
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setdata(res);
            });
        }
    }, []);

    return (
        <>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Student Name</label>
                <input type="text" value={data.name} className="form-control" id="formGroupExampleInput" placeholder="Enter Your Name" onChange={(e) => {
                    setdata({ ...data, name: e.target.value });
                }} />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Student image</label>
                <input type="text" value={data.avatar} className="form-control" id="formGroupExampleInput2" placeholder="Enter image Url" onChange={(e) => {
                    setdata({ ...data, avatar: e.target.value });
                }} />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Student age</label>
                <input type="number" value={data.age} className="form-control" id="formGroupExampleInput2" placeholder="Enter Age" onChange={(e) => {
                    setdata({ ...data, age: e.target.value });
                }} />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Student address</label>
                <input type="text" value={data.address} className="form-control" id="formGroupExampleInput2" placeholder="Enter Your City" onChange={(e) => {
                    setdata({ ...data, address: e.target.value });
                }} />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Student email</label>
                <input type="email" value={data.Email} className="form-control" id="formGroupExampleInput2" placeholder="E-mail" onChange={(e) => {
                    setdata({ ...data, Email: e.target.value });
                }} />
            </div>
            <div className="mb-3">
                <div className="btn btn-primary" onClick={() => {
                    console.log(data);
                    // if (Object.Keys(data).length===0) {
                    //     console.log("hello");
                    //     alert("please enter the student detail");
                    // }
                    if(params.id>0){
                        fetch("https://64e217afab0037358818ac4d.mockapi.io/Students/"+params.id,
                        {
                            method: "put",
                            body: JSON.stringify(data),
                            headers:{"Content-Type":"application/json"} 
                        }
                    )
                        .then((res) => { navigate("/student") });
                    }
                    else{
                        fetch("https://64e217afab0037358818ac4d.mockapi.io/Students",
                        {
                            method: "post",
                            body: JSON.stringify(data),
                            headers:{"Content-Type":"application/json"} 
                        }
                    )
                        .then((res) => { navigate("/student") });
                    }
                }}>
                {params.id>0 && "Edit"}
                {!(params.id>0) && "Add"}
                </div>
            </div>
        </>
    );
}