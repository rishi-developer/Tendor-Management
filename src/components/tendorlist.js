import React, { useEffect, useState } from 'react';
import './tendorlist.css';
import Tendor from './tendor';
import {useNavigate} from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

function TendorList() {
  const navigate = useNavigate();
  const [allTendors, setAllTendors] = useState([]);


  useEffect(() => {
    const getAllUsers = async () => {
      onSnapshot(collection(db, "tendorDetails"), (data) => {
        setAllTendors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    getAllUsers();
  }, []);

  return (
   <>
    <div className='tl1'>
        <div className='tl3'>

        <div className='tl2'>
            Tendor List <span className='tl5'>{allTendors.length}</span>


        </div>

            <button className='tl4' onClick={()=>{navigate('/tendorform')}}>Add New Tendor</button>
        </div>
        {
          allTendors.map((e)=>{
            return <Tendor key={e.id} {...e} />
          })
        }
    </div>
   </>
  )
}

export default TendorList