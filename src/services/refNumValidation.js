import React, { useContext, useState, useEffect} from 'react';
import { SimpleStoreContext } from '../context/context';
import axios from 'axios'



export const RefNumValidation = () => {
    let {   
        reference_num, 

        ref_numResponseIsValid, setRef_numResponseIsValid,ref_numResponseMinStartingNum, setRef_numResponseMinStartingNum,ref_numResponseMaxStartingNum, setRef_numResponseMaxStartingNum, sample_count, setSample_count, ref_numResponseMessage, setRef_numResponseMessage,
   
    setData
    } = useContext(SimpleStoreContext);

  const referenceNumFetch = ( used_places_count, reference_num) => {
    const urlBase = `https://simplestore.up.railway.app/SamplesApp/rest_api/validations/sample_batch/check_reference_num/iktato01/0/`
    return new Promise((resolve, reject) => {
      axios
      .get(urlBase) 
      .then((response) =>{
        console.log(response.data)
        resolve(response.data)
        setRef_numResponseIsValid(Object.values(response.data)[0])
        setRef_numResponseMinStartingNum(Number(Object.values(response.data)[1]))
        setRef_numResponseMaxStartingNum(Number(Object.values(response.data)[2]))
        setSample_count(Object.values(response.data)[3])
        setRef_numResponseMessage(Object.values(response.data)[4])      })
      .catch((error) => {
        console.log(error.response)
        reject({ status: error.response.status, message: error.message })
      })
    }) 
  }
if(reference_num!==''){}
  useEffect(() => {
    referenceNumFetch().then(response => {
      setData(response)
    })
  }, [ref_numResponseIsValid, ref_numResponseMinStartingNum, ref_numResponseMaxStartingNum, sample_count, ref_numResponseMessage]);


  if(ref_numResponseIsValid ===  false){
    return(
      <div>A referencia szám nem létezik.</div>
    )
  } else {
    return(<></>)
  }

}

