import { async } from "@firebase/util";
import { addDoc, collection } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase";
import './tendorform.css';

function TendorForm() {

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
  
  const editMain = () =>{
    const firstLink = prompt('Enter main link');
    setMainLink(firstLink);
  }

  const editReqd = () =>{
    const secondLink = prompt('Enter required link');
    setReqdLink(secondLink);
  }
  const addTendor = async() =>{

    await addDoc(
      collection(db,
        "tendorDetails"),
      {
        tendorId: tendorId.current.value,
        tendorName: tendorName.current.value,
        tendorTitle: tendorTitle.current.value,
        tendorPrebidDetails: tendorPrebidDetails.current.value,
        tendorClosingDate: tendorClosingDate.current.value,
        tendorPrebidDate: tendorPrebidDate.current.value,
        tendorContactDetails: tendorContactDetails.current.value,
        mainLink: mainLink,
        reqdLink: reqdLink,
        stage : []
      }
    );
    navigate('/');
    }

  return (
    <>
    <div className="tf10">
        Add New Tendor
    </div>
    <button className="tf14" onClick={()=>{navigate('/')}}>Exit</button>
    <button className="tf13" onClick={()=>{addTendor()}}>Save</button>

      <div className="tf1">
        <div className="tf2">
          <div className="tf3">
            <span className="tf5">Tendor Id</span><br />
            <input className="tf6" type="text" placeholder="Enter Tendor Id"  ref={tendorId} />
          </div>
          <div className="tf4">
            <span className="tf7">Tendor name</span><br />
            <input className="tf8" type="text" placeholder="Enter Tendor name" ref={tendorName} />
          </div>
        </div>


        <div className="tf2">
          <div className="tf3">
            <span className="tf5">Tendor Title</span><br />
            <input className="tf6" type="text" placeholder="Enter Tendor Title" ref={tendorTitle} />
          </div>
          <div className="tf4">
            <span className="tf7">Tendor Pre-bid Details</span><br />
            <input className="tf8" type="text" placeholder="Enter Tendor Pre-bid Details" ref={tendorPrebidDetails} />
          </div>
        </div>


        <div className="tf2">
          <div className="tf3">
            <span className="tf5">Tendor Closing Date</span><br />
            <input className="tf6" type="date" placeholder="Enter Tendor Closing Date" ref={tendorClosingDate} />
          </div>
          <div className="tf4">
            <span className="tf7">Tendor Prebid Date</span><br />
            <input className="tf8" type="date" placeholder="Enter Tendor Prebid Date" ref={tendorPrebidDate} />
          </div>
        </div>
        

        <div className="tf2">
          <div className="tf3">
            <span className="tf5">Tendor Contact Details</span><br />
            <input className="tf6" type="text" placeholder="Enter Tendor Contact Details" ref={tendorContactDetails} />
          </div>
          <div className="tf3">
            <br />
            <button className="tf9" onClick={editMain}>Main Documents Link</button>
          </div>
          <div className="tf3">
            <br />
            <button className="tf9" onClick={editReqd}>Required Documents Link</button>
          </div>          
        </div>

        <div className="tf12">
            <button className="tf19">Data Entry</button>
            <button className="tf19">Management Mail</button>
            <button className="tf19">Technical Eval</button>
            <button className="tf19">Document Preparation</button>
            <button className="tf19">Accounts</button>
            <button className="tf19">Accounts Confirmation</button>
            <button className="tf19">Final Status</button>
        </div>



      </div>
    </>
  );
}

export default TendorForm;
