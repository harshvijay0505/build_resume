import React, { createContext, useContext, useState } from "react";
const UserContext = createContext();
export function useUser() {
    return useContext(UserContext)
};

export function UserProvider({ children }) {

    //toppane fields for name, email and short bio
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userBio, setUserBio] = useState("");

    // id for accordian
    const [Aid, setAId] = React.useState([]);
    const [Wid, setWId] = React.useState([]);
    const [Eid, setEId] = React.useState([]);

    const [arr, setArr] = React.useState([]);
    const [arrW, setArrW] = React.useState([]);
    const [arrAc, setArrAc] = React.useState([]);

    const updateUserEdu = (instituteEducation, degreeEducation, startdateEducation, enddateEducation, descriptionEducation, indexEducation) => {
        arr[indexEducation] = {
            ...arr[indexEducation],
            institute: instituteEducation,
            degree: degreeEducation,
            startdate: startdateEducation,
            enddate: enddateEducation,
            desc: descriptionEducation
        }
        setArr([...arr])
    }
    const updateUserWork = (compW,rolW,strW,endW,desW,indexWork) => {
        arrW[indexWork] = {
            ...arrW[indexWork],
            companyW: compW,
            roleW: rolW,
            startdateW: strW,
            enddateW: endW,
            descW: desW
        }
        setArrW([...arrW])
    }

    const updateUserAchieve = (titleAchievement, dateAchievement, descriptionAchievement, indexAchievement) => {
        arrAc[indexAchievement] = {
            ...arrAc[indexAchievement],
            title: titleAchievement,
            date: dateAchievement,
            descAch: descriptionAchievement
        }
        setArrAc([...arrAc])
        console.log(arrAc);



    }

    const exportUserData = () => {
        const exportObject = { Name: userName, Email: userEmail, Bio: userBio, Education: arr, Work: arrW, Achievement: arrAc }
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObject));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "UserResume.json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }


    const value = { exportUserData, updateUserEdu, updateUserWork, updateUserAchieve, arr, setArr, arrW, setArrW, arrAc, setArrAc, Aid, setAId, Wid, setWId, Eid, setEId, userName, setUserName, userEmail, setUserEmail, userBio, setUserBio }

    return (<>
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    </>)
}