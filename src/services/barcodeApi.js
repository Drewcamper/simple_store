import React, {useContext} from 'react'
import axios from "axios"
import { SimpleStoreContext } from '../context/context';


export function BarcodeApi() {
    let {      barcodeIsValid, setBarcodeIsValid,barcodeFirstFreeCol, setBarcodeFirstFreeCol,barcodeContainerType, setBarcodeContainerType,barcodeMessage, setBarcodeMessage,
        sgsCountServerError,
 
        ref_numResponseMinStartingNum, ref_numResponseMaxStartingNum, sample_count, StartingNum, selected, setSelected, sampleLeftvers, setSampleLeftovers, blackList,blackListArray, setBlackListArray
    } = useContext(SimpleStoreContext);

    const barcodeFetch = ( container_barcode, starting_col) => {
        const urlBase = `https://simplestore.up.railway.app/SamplesApp/rest_api/validations/sample_batch/check_plate_availability/plate012/1/`
        return new Promise((resolve, reject) => {
          axios
          .get(`${urlBase}`) 
          .then((response) =>{
            console.log(response.data)
            resolve(response.data)
            if(Object.values(response.data)[0] === false){setBarcodeIsValid('Ez a vonalkód már létezik a rendszerben.')}
            setBarcodeFirstFreeCol(Object.values(response.data)[1])
            setBarcodeContainerType(Object.values(response.data)[2])
            setBarcodeMessage(Object.values(response.data)[3])
    
          })
          .catch((error) => {
            console.log(error.response)
            reject({ status: error.response.status, message: error.message })
          })
        }) 
      }
}

