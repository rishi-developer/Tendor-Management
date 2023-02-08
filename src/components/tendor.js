import React from "react";
import "./tendor.css";
import edit from "../edit.svg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiFillDelete } from "react-icons/ai";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import { AiOutlineArrowRight } from "react-icons/ai";

function Tendor(e) {
  const navigate = useNavigate();
  const editTendor = () => {
    navigate(`/editTendor/${e.tendorId}`);
  };

  const deleteTendor = () => {
    if (window.confirm("Delete?")) deleteDoc(doc(db, "tendorDetails", e.id));
  };

  const display = [];
    {e.stage.map((val) => {
      display.push(
        <div className="t5"><b>{val}&nbsp;</b>
        <AiOutlineArrowRight />
         </div>
      )
    })}
  return (
    <>
      <div className="t1">
        <div className="t2">
          <div className="t3">{e.tendorName}</div>
          <div>
            <AiFillDelete className="t7" onClick={deleteTendor} />
            <img className="t6" src={edit} alt="logo" onClick={editTendor} />
          </div>
          <br />
          <br />
          <div className="t4">{e.tendorClosingDate}</div>
          {display.reverse()}
          
        </div>
      </div>
    </>
  );
}

export default Tendor;
