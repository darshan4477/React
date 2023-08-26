import React, { useState } from "react";
export default function Faculty() {

    let arr = [
        {
            FacultyID: 1,
            FacultyName: "Dr. Gopi Sanghani",
            FacultyDesignation: "Dean - School of Computer Science",
            FacultyEducationQualification: "Ph.D. , M.E. (CE)",
            FacultyExperience: "22+ Years",
            FacultyWorkingSince: "Jul-2012",
            FacultyImage:
                "https://darshan.ac.in/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg",
        },
        {
            FacultyID: 2,
            FacultyName: "Dr. Nilesh Gambhava",
            FacultyDesignation: "Professor",
            FacultyEducationQualification: "Ph.D. , M.E. (CE)",
            FacultyExperience: "19+ Years",
            FacultyWorkingSince: "Jul-2009",
            FacultyImage:
                "https://darshan.ac.in/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg",
        },
        {
            FacultyID: 3,
            FacultyName: "Dr. Pradyumansinh Jadeja",
            FacultyDesignation: "Associate Professor",
            FacultyEducationQualification: "Ph.D. , M.E. (CE)",
            FacultyExperience: "17+ Years",
            FacultyWorkingSince: "Jul-2009",
            FacultyImage:
                "https://darshan.ac.in/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg",
        },
        {
            FacultyID: 4,
            FacultyName: "Prof. Maulik Trivedi",
            FacultyDesignation: "Assistant Professor",
            FacultyEducationQualification: "M.Tech. (CSE)",
            FacultyExperience: "14+ Years",
            FacultyWorkingSince: "Jun-2009",
            FacultyImage:
                "https://darshan.ac.in/U01/Faculty-Photo/8---28-04-2023-02-06-25.jpg",
        },
        {
            FacultyID: 5,
            FacultyName: "Prof. Dixita Kagathara",
            FacultyDesignation: "Assistant Professor",
            FacultyEducationQualification: "M.Tech. (Web Technology)",
            FacultyExperience: "13+ Years",
            FacultyWorkingSince: "Jul-2009",
            FacultyImage:
                "https://darshan.ac.in/U01/Faculty-Photo/9---28-04-2023-02-06-37.jpg",
        },
        {
            FacultyID: 6,
            FacultyName: "Prof. Rupesh Vaishnav",
            FacultyDesignation: "Assistant Professor",
            FacultyEducationQualification: "M.E. (CE)",
            FacultyExperience: "14+ Years",
            FacultyWorkingSince: "May-2013",
            FacultyImage:
                "https://darshan.ac.in/U01/Faculty-Photo/10---28-04-2023-02-07-03.jpg",
        },
        {
            FacultyID: 7,
            FacultyName: "Prof. Swati Sharma",
            FacultyDesignation: "Assistant Professor",
            FacultyEducationQualification: "M.Tech. (CSE)",
            FacultyExperience: "14+ Years",
            FacultyWorkingSince: "May-2013",
            FacultyImage:
                "https://darshan.ac.in/U01/Faculty-Photo/11---29-04-2023-01-44-21.jpg",
        },
        {
            FacultyID: 8,
            FacultyName: "Prof. Arjun Bala",
            FacultyDesignation: "Assistant Professor",
            FacultyEducationQualification: "M.Tech. (CSE)",
            FacultyExperience: "12+ Years",
            FacultyWorkingSince: "Jul-2013",
            FacultyImage:
                "https://darshan.ac.in/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg",
        },
        {
            FacultyID: 9,
            FacultyName: "Prof. Mayur Padia",
            FacultyDesignation: "Assistant Professor",
            FacultyEducationQualification: "M.E. (CE)",
            FacultyExperience: "13+ Years",
            FacultyWorkingSince: "Jul-2011",
            FacultyImage:
                "https://darshan.ac.in/U01/Faculty-Photo/13---28-04-2023-02-07-48.jpg",
        },
        {
            FacultyID: 10,
            FacultyName: "Prof. Vijay Shekhat",
            FacultyDesignation: "Assistant Professor",
            FacultyEducationQualification: "M.E. (CE)",
            FacultyExperience: "10+ Years",
            FacultyWorkingSince: "Jun-2012",
            FacultyImage:
                "https://darshan.ac.in/U01/Faculty-Photo/16---28-04-2023-02-08-00.jpg",
        },
        {
            FacultyID: 11,
            FacultyName: "Prof. Naimish Vadodariya",
            FacultyDesignation: "Assistant Professor",
            FacultyEducationQualification: "M.E. (CE)",
            FacultyExperience: "9+ Years",
            FacultyWorkingSince: "Jun-2015",
            FacultyImage:
                "https://darshan.ac.in/U01/Faculty-Photo/214---28-04-2023-02-08-35.jpg",
        },
        {
            FacultyID: 12,
            FacultyName: "Prof. UmeshKumar Thoriya",
            FacultyDesignation: "Assistant Professor",
            FacultyEducationQualification: "M.Tech. (CSE)",
            FacultyExperience: "9+ Years",
            FacultyWorkingSince: "Jul-2015",
            FacultyImage:
                "https://darshan.ac.in/U01/Faculty-Photo/221---28-04-2023-02-08-50.jpg",
        },
        {
            FacultyID: 13,
            FacultyName: "Prof. Jayesh Vagadiya",
            FacultyDesignation: "Assistant Professor",
            FacultyEducationQualification: "M.E (CE)",
            FacultyExperience: "7+ Years",
            FacultyWorkingSince: "Jul-2015",
            FacultyImage:
                "https://darshan.ac.in/U01/Faculty-Photo/219---28-04-2023-02-09-01.jpg",
        },
        {
            FacultyID: 14,
            FacultyName: "Prof. Krunal Vyas",
            FacultyDesignation: "Assistant Professor",
            FacultyEducationQualification: "M.Tech.(ICT), B.E. (EC)",
            FacultyExperience: "8+ Years",
            FacultyWorkingSince: "Jul-2018",
            FacultyImage:
                "https://darshan.ac.in/U01/Faculty-Photo/290---28-04-2023-02-09-16.jpg",
        },
        {
            FacultyID: 15,
            FacultyName: "Prof. Jay Dhamsaniya",
            FacultyDesignation: "Assistant Professor",
            FacultyEducationQualification: "M.E. (E.C.), B.Tech. (E.C.)",
            FacultyExperience: "10+ Years",
            FacultyWorkingSince: "Jul-2012",
            FacultyImage:
                "https://darshan.ac.in/U01/Faculty-Photo/46---28-04-2023-02-09-28.jpg",
        },
        {
            FacultyID: 16,
            FacultyName: "Prof. Mehul Bhundiya",
            FacultyDesignation: "Assistant Professor",
            FacultyEducationQualification: "BE (CE), ME (CE)",
            FacultyExperience: "8+ Years",
            FacultyWorkingSince: "Aug-2018",
            FacultyImage:
                "https://darshan.ac.in/U01/Faculty-Photo/294---28-04-2023-02-09-43.jpg",
        }
    ];
    // let arr = [{
    //         "FacultyID": 1289,
    //         "FacultyName": "Dr. Gopi sagani",
    //         "FacultyDesignation": "HOD",
    //         "FacultyHighestEducation": "Ph.D",
    //         "FacultyExperienceInYears": 45,
    //         "FacultyWorkingSince": "JUNE",
    //         "FacultyMobileNumber": "6845685444",
    //         "FacultyEmailAddress": "ASSD@GMD.COM",
    //         "FacultySeating": "c-201",
    //         "FacultyProfileDescription": "https:\/\/darshan.ac.in\/U01\/Faculty-Photo\/5---21-06-2021-10-50-15.jpg",
    //         "FacultyAreaSpecialization": "AI",
    //         "FacultySubjectsTaught": "c,c#,+",
    //         "FacultyImage": "https:\/\/darshan.ac.in\/U01\/Faculty-Photo\/5---21-06-2021-10-50-15.jpg",
    //         "FacultyDepartmentID": 1,
    //         "FacultySequence": 10
    //     }];
    const [fac, setFac] = useState(arr);

    function Delete(index) {
        var Temp = [...fac];
        Temp.splice(index, 1);
        console.log(Temp);
        setFac(Temp);
    }
    var listFac = fac.map((fac, index) => {
        return (
            <div className="col-3">
                <div className="card1">
                    <div class="card">
                        <img id="img" class="card-img-top" src={fac.FacultyImage} alt="" />
                        <div class="card-body">
                            <h5 class="card-title">{fac.FacultyName}</h5>
                            <p class="card-text " style={{ color: "red" }}>{fac.FacultyDesignation}</p>
                        </div>
                        <ul class="list-group list-group-flush border-border-primary " >
                            <li class="list-group-item" id="list">{fac.FacultyEducationQualification}</li>
                            <li class="list-group-item " id="list">{fac.FacultyExperience}</li>
                            <li class="list-group-item " id="list">Working with us from - {fac.FacultyWorkingSince}</li>
                        </ul>
                        <div class="card-body">
                            <a href={fac.FacultyImage} class="btn btn-primary">Open Image</a>
                            <button className="btn btn-primary mt-1" onClick={() => {
                                Delete(index);
                            }}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    })
    return (
        <>
            <div className="container">
                <div className="row">{listFac}</div>
            </div>
        </>
    );
}