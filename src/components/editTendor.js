import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "./firebase"; 
import {BsPencilSquare} from "react-icons/bs";
import {AiFillMail} from "react-icons/ai";

function EditTendor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tendorId = useRef(null);
  const tendorName = useRef(null);
  const tendorTitle = useRef(null);
  const tendorPrebidDetails = useRef(null);
  const tendorClosingDate = useRef(null);
  const tendorPrebidDate = useRef(null);
  const tendorContactDetails = useRef(null);
  const [mainLink, setMainLink] = useState("");
  const [reqdLink, setReqdLink] = useState("");
  const [currentTendor, setCurrentTendor] = useState([]);

  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [six, setSix] = useState("");
  const [seven, setSeven] = useState("");
  const [eight, setEight] = useState("");
  const [nine, setNine] = useState("");
  const [ten, setTen] = useState([]);
  const [userRef, setUserRef] = useState(null);
  useEffect(() => {
    getAllUsers();
  }, []);

  const editMain = () => {
    const firstLink = prompt("Enter main link");
    setEight(firstLink);
  };

  const editReqd = () => {
    const secondLink = prompt("Enter required link");
    setNine(secondLink);
  };
  const addTendor = async () => {
    console.log(currentTendor.id);
    await updateDoc(doc(db, "tendorDetails", currentTendor[0].id), {
      tendorId: tendorId.current.value,
      tendorName: tendorName.current.value,
      tendorTitle: tendorTitle.current.value,
      tendorPrebidDetails: tendorPrebidDetails.current.value,
      tendorClosingDate: tendorClosingDate.current.value,
      tendorPrebidDate: tendorPrebidDate.current.value,
      tendorContactDetails: tendorContactDetails.current.value,
      mainLink: eight,
      reqdLink: nine,
      
    });
    navigate("/");
  };

  const getAllUsers = async () => {
    const queryRef = query(
      collection(db, "tendorDetails"),
      where("tendorId", "==", id)
    );
    onSnapshot(queryRef, (data) => {
      setCurrentTendor(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };
  // console.log(currentTendor);
  // let valuesA = [];
  useEffect(() => {
    console.log("welcome");
    console.log(currentTendor);
    if (currentTendor.length > 0) {
      setOne(currentTendor[0].tendorId);
      setTwo(currentTendor[0].tendorName);
      setThree(currentTendor[0].tendorTitle);
      setFour(currentTendor[0].tendorPrebidDetails);
      setFive(currentTendor[0].tendorClosingDate);
      setSix(currentTendor[0].tendorPrebidDate);
      setSeven(currentTendor[0].tendorContactDetails);
      setEight(currentTendor[0].mainLink);
      setNine(currentTendor[0].reqdLink);

      setTen(currentTendor[0].stage);
      setUserRef(doc(db, "tendorDetails", currentTendor[0].id));
      console.log(typeof ten);
    }

    console.log(one);
  }, [currentTendor]);

  

  const stageVal= [];

  stageVal.push(
<div className="tf12">

    {ten.includes("DataEntry") ? (
        
        <div className="tf11"><button className="tf22" onClick={()=>{removeDE("DataEntry")}}>Data Entry</button>
        <AiFillMail className="tf23" onClick={()=>{mail('palakjain@geminisolutions.com')}} />
        </div>
      ) : (
        <div className="tf19"><button className="tf22" onClick={() => {addDE("DataEntry");}}> Data Entry </button>
        <AiFillMail className="tf23" onClick={()=>{mail('palakjain@geminisolutions.com')}} />
        </div>
      )}
      {ten.includes("MgmtMail") ? (
        <div className="tf11"><button className="tf22" onClick={()=>{removeDE("MgmtMail")}}>Management Mail</button>
        <AiFillMail className="tf23" onClick={()=>{mail('palakjain@geminisolutions.com')}} /></div>
      ) : (
        <div className="tf19"><button className="tf22" onClick={() => {addDE("MgmtMail");}} >Management Mail</button>
        <AiFillMail className="tf23" onClick={()=>{mail('palakjain@geminisolutions.com')}} /></div>
      )}
    
      {ten.includes("TechEval") ? (
        <div className="tf11"><button className="tf22" onClick={()=>{removeDE("TechEval")}}>Technical Eval</button>
        <AiFillMail className="tf23" onClick={()=>{mail('palakjain@geminisolutions.com')}} /></div>
      ) : (
        <div className="tf19"><button className="tf22" onClick={() => {addDE("TechEval");}}>Technical Eval</button>
        <AiFillMail className="tf23" onClick={()=>{mail('palakjain@geminisolutions.com')}} /></div>
      )}
    
      {ten.includes("DocPrep") ? (
       <div className="tf11"> <button className="tf22" onClick={()=>{removeDE("DocPrep")}}>Document Preparation</button>
        <AiFillMail className="tf23" onClick={()=>{mail('palakjain@geminisolutions.com')}} /></div>
      ) : (
        <div className="tf19"><button className="tf22" onClick={() => {addDE("DocPrep");}}>Document Preparation</button>
        <AiFillMail className="tf23" onClick={()=>{mail('palakjain@geminisolutions.com')}} /></div>
      )}
    
      {ten.includes("Accounts") ? (
        <div className="tf11"><button className="tf22" onClick={()=>{removeDE("Accounts")}}>Accounts</button>
        <AiFillMail className="tf23" onClick={()=>{mail('palakjain@geminisolutions.com')}} /></div>
      ) : (
        <div className="tf19"><button className="tf22" onClick={() => {addDE("Accounts");}}>Accounts</button>
        <AiFillMail className="tf23" onClick={()=>{mail('palakjain@geminisolutions.com')}} /></div>
      )}
    
      {ten.includes("AccConf") ? (
        <div className="tf11"><button className="tf22" onClick={()=>{removeDE("AccConf")}}>Accounts Confirmation</button>
        <AiFillMail className="tf23" onClick={()=>{mail('palakjain@geminisolutions.com')}} /></div>
      ) : (
        <div className="tf19"><button className="tf22" onClick={() => {addDE("AccConf");}}>Accounts Confirmation</button>
        <AiFillMail className="tf23" onClick={()=>{mail('palakjain@geminisolutions.com')}} /></div>
      )}
    
      {ten.includes("FinStatus") ? (
        <div className="tf11"><button className="tf22" onClick={()=>{removeDE("FinStatus")}}>Final Status</button>
        <AiFillMail className="tf23" onClick={()=>{mail('palakjain@geminisolutions.com')}} /></div>
      ) : (
        <div className="tf19"><button className="tf22" onClick={() => {addDE("FinStatus");}}>Final Status</button>
        <AiFillMail className="tf23" onClick={()=>{mail('palakjain@geminisolutions.com')}} /></div>
      )}
    
    </div>

  );
  const addDE =  (stages) => {
    console.log("hello");
    console.log(userRef);
     updateDoc(userRef, {
      stage: arrayUnion(stages),
    });
  };

  const removeDE = (stages) => {
    updateDoc(userRef, {
      stage: arrayRemove(stages),
    });
  };

  const mail = (recipient) =>{

    window.location.href =`mailto:${recipient}`;
  }

  return (
    <>
      <div className="tf10">Add New Tendor</div>
      <button
        className="tf14"
        onClick={() => {
          navigate("/");
        }}
      >
        Exit
      </button>
      <button
        className="tf13"
        onClick={() => {
          addTendor();
        }}
      >
        Save
      </button>

      <div className="tf1">
        <div className="tf2">
          <div className="tf3">
            <span className="tf5">Tendor Id</span>
            <br />
            <input
              className="tf6"
              type="text"
              placeholder="Enter Tendor Id"
              ref={tendorId}
              defaultValue={one}
            />
          </div>
          <div className="tf4">
            <span className="tf7">Tendor name</span>
            <br />
            <input
              className="tf8"
              type="text"
              placeholder="Enter Tendor name"
              ref={tendorName}
              defaultValue={two}
            />
          </div>
        </div>

        <div className="tf2">
          <div className="tf3">
            <span className="tf5">Tendor Title</span>
            <br />
            <input
              className="tf6"
              type="text"
              placeholder="Enter Tendor Title"
              ref={tendorTitle}
              defaultValue={three}
            />
          </div>
          <div className="tf4">
            <span className="tf7">Tendor Prebid Details</span>
            <br />
            <input
              className="tf8"
              type="text"
              placeholder="Enter Tendor Prebid Details"
              ref={tendorPrebidDetails}
              defaultValue={four}
            />
          </div>
        </div>

        <div className="tf2">
          <div className="tf3">
            <span className="tf5">Tendor Closing Date</span>
            <br />
            <input
              className="tf6"
              type="date"
              placeholder="Enter Tendor Closing Date"
              ref={tendorClosingDate}
              defaultValue={five}
            />
          </div>
          <div className="tf4">
            <span className="tf7">Tendor Prebid Date</span>
            <br />
            <input
              className="tf8"
              type="date"
              placeholder="Enter Tendor Prebid Date"
              ref={tendorPrebidDate}
              defaultValue={six}
            />
          </div>
        </div>

        <div className="tf2">
          <div className="tf3">
            <span className="tf5">Tendor Contact Details</span>
            <br />
            <input
              className="tf6"
              type="number"
              placeholder="Enter Tendor Contact Details"
              ref={tendorContactDetails}
              defaultValue={seven}
            />
          </div>
          <div className="tf3">
            <br />
            
            <div className="tf9">
            <button className="tf21" onClick={()=>{window.location.href = eight;}}>
              Main Documents Link </button>
              <BsPencilSquare className="tf20" onClick={editMain}/>
            </div>
            
          
          </div>
          <div className="tf3">
            <br />


            <div className="tf9">
            <button className="tf21" onClick={()=>{window.location.href = nine;}}>
              Required Documents Link </button>
              <BsPencilSquare className="tf20" onClick={editReqd}/>
            </div>
          
          
          </div>
        </div>



{stageVal}
      </div>
    </>
  );
}

export default EditTendor;
