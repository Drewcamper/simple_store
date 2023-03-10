import '../ui/board.css'
import { useState, useContext, useRef } from "react";
import { SimpleStoreContext } from '../../context/context';
import axios from 'axios';
import {BarcodeApi} from '../../services/barcodeApi.js'

export const FirstMicroPlate = () => {

    let {      barcodeIsValid, setBarcodeIsValid,barcodeFirstFreeCol, setBarcodeFirstFreeCol,barcodeContainerType, setBarcodeContainerType,barcodeMessage, setBarcodeMessage,
        sgsCountServerError,
 
        ref_numResponseMinStartingNum, ref_numResponseMaxStartingNum, sample_count, StartingNum, selected, setSelected, sampleLeftvers, setSampleLeftovers, blackList,blackListArray, setBlackListArray
    } = useContext(SimpleStoreContext);


    // && Number(name)<=ref_numResponseMaxStartingNum
	
	const boardRef = useRef(null);
    let container_barcode = ''
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

    function Button({name, onClick}){
        if(sample_count>(96-9)){setSampleLeftovers(sample_count-96-9)}
        return <button onClick={()=>onClick(name)} className={`settings ${ Number(name)>=ref_numResponseMinStartingNum && Number(name)<=sample_count ? "change-color" : ""}`}>{name}</button>
  
    }
	const handleClick = (name) => {
		setSelected(Number(name))
	}
    const validate = () => {

    }
    
	
	return (
		<div ref={boardRef} className="board">
            <div className='wrapper'>
            {/* first row */}
             <Button name='1' selected={selected} onClick={handleClick}/>
             <Button name="9" selected={selected} onClick={handleClick} />
             <Button name="17" selected={selected} onClick={handleClick}/>
             <Button name="25" selected={selected} onClick={handleClick}/>
             <Button name='33' selected={selected} onClick={handleClick}/>
             <Button name="41" selected={selected} onClick={handleClick}/>
             <Button name="49" selected={selected} onClick={handleClick}/>
             <Button name="57" selected={selected} onClick={handleClick}/>
             <Button name='65' selected={selected} onClick={handleClick}/>
             <Button name="73" selected={selected} onClick={handleClick}/>
             <Button name="81" selected={selected} onClick={handleClick}/>
             <Button name="89" selected={selected} onClick={handleClick}/>

            {/* second row */}
            <Button name='2' selected={selected} onClick={handleClick}/>
             <Button name="10" selected={selected} onClick={handleClick}/>
             <Button name="18" selected={selected} onClick={handleClick}/>
             <Button name="26" selected={selected} onClick={handleClick}/>
             <Button name='34' selected={selected} onClick={handleClick}/>
             <Button name="42" selected={selected} onClick={handleClick}/>
             <Button name="50" selected={selected} onClick={handleClick}/>
             <Button name="58" selected={selected} onClick={handleClick}/>
             <Button name='66' selected={selected} onClick={handleClick}/>
             <Button name="74" selected={selected} onClick={handleClick}/>
             <Button name="82" selected={selected} onClick={handleClick}/>
             <Button name="90" selected={selected} onClick={handleClick}/>

            {/* third row */}
            <Button name='3' selected={selected} onClick={handleClick}/>
             <Button name="11" selected={selected} onClick={handleClick}/>
             <Button name="19" selected={selected} onClick={handleClick}/>
             <Button name="27" selected={selected} onClick={handleClick}/>
             <Button name='35' selected={selected} onClick={handleClick}/>
             <Button name="43" selected={selected} onClick={handleClick}/>
             <Button name="51" selected={selected} onClick={handleClick}/>
             <Button name="59" selected={selected} onClick={handleClick}/>
             <Button name='67' selected={selected} onClick={handleClick}/>
             <Button name="75" selected={selected} onClick={handleClick}/>
             <Button name="83" selected={selected} onClick={handleClick}/>
             <Button name="91" selected={selected} onClick={handleClick}/>

            {/* fourth row */}
            <Button name='4' selected={selected} onClick={handleClick}/>
             <Button name="12" selected={selected} onClick={handleClick}/>
             <Button name="20" selected={selected} onClick={handleClick}/>
             <Button name="28" selected={selected} onClick={handleClick}/>
             <Button name='36' selected={selected} onClick={handleClick}/>
             <Button name="44" selected={selected} onClick={handleClick}/>
             <Button name="52" selected={selected} onClick={handleClick}/>
             <Button name="60" selected={selected} onClick={handleClick}/>
             <Button name='68' selected={selected} onClick={handleClick}/>
             <Button name="76" selected={selected} onClick={handleClick}/>
             <Button name="84" selected={selected} onClick={handleClick}/>
             <Button name="92" selected={selected} onClick={handleClick}/>

            {/* fifth row */}
            <Button name='5' selected={selected} onClick={handleClick}/>
             <Button name="13" selected={selected} onClick={handleClick}/>
             <Button name="21" selected={selected} onClick={handleClick}/>
             <Button name="29" selected={selected} onClick={handleClick}/>
             <Button name='37' selected={selected} onClick={handleClick}/>
             <Button name="45" selected={selected} onClick={handleClick}/>
             <Button name="53" selected={selected} onClick={handleClick}/>
             <Button name="61" selected={selected} onClick={handleClick}/>
             <Button name='69' selected={selected} onClick={handleClick}/>
             <Button name="77" selected={selected} onClick={handleClick}/>
             <Button name="85" selected={selected} onClick={handleClick}/>
             <Button name="93" selected={selected} onClick={handleClick}/>

            {/* sixth row */}
            <Button name='6' selected={selected} onClick={handleClick}/>
             <Button name="14" selected={selected} onClick={handleClick}/>
             <Button name="22" selected={selected} onClick={handleClick}/>
             <Button name="30" selected={selected} onClick={handleClick}/>
             <Button name='38' selected={selected} onClick={handleClick}/>
             <Button name="46" selected={selected} onClick={handleClick}/>
             <Button name="54" selected={selected} onClick={handleClick}/>
             <Button name="62" selected={selected} onClick={handleClick}/>
             <Button name='70' selected={selected} onClick={handleClick}/>
             <Button name="78" selected={selected} onClick={handleClick}/>
             <Button name="86" selected={selected} onClick={handleClick}/>
             <Button name="94" selected={selected} onClick={handleClick}/>

            {/* seventh row */}
            <Button name='7' selected={selected} onClick={handleClick}/>
             <Button name="15" selected={selected} onClick={handleClick}/>
             <Button name="23" selected={selected} onClick={handleClick}/>
             <Button name="31" selected={selected} onClick={handleClick}/>
             <Button name='39' selected={selected} onClick={handleClick}/>
             <Button name="47" selected={selected} onClick={handleClick}/>
             <Button name="55" selected={selected} onClick={handleClick}/>
             <Button name="63" selected={selected} onClick={handleClick}/>
             <Button name='71' selected={selected} onClick={handleClick}/>
             <Button name="79" selected={selected} onClick={handleClick}/>
             <Button name="87" selected={selected} onClick={handleClick}/>
             <Button name="95" selected={selected} onClick={handleClick}/>

            {/* eights row */}
             <Button name='8' selected={selected} onClick={handleClick}/>
             <Button name="16" selected={selected} onClick={handleClick}/>
             <Button name="24" selected={selected} onClick={handleClick}/>
             <Button name="32" selected={selected} onClick={handleClick}/>
             <Button name='40' selected={selected} onClick={handleClick}/>
             <Button name="48" selected={selected} onClick={handleClick}/>
             <Button name="56" selected={selected} onClick={handleClick}/>
             <Button name="64" selected={selected} onClick={handleClick}/>
             <Button name='72' selected={selected} onClick={handleClick}/>
             <Button name="80" selected={selected} onClick={handleClick}/>
             <Button name="88" selected={selected} onClick={handleClick}/>
             <Button name="96" selected={selected} onClick={handleClick}/>

 		</div> 
        <div className='barcodeWrapper'>
             <div className='microplateTitles'>container_barcode</div>
             <input onChange={validate()} onBlur={BarcodeApi}></input>

            <div className='microplateTitles'>container_type</div>
            <select className='formInput'
                  type="container_type"
                  name="container_type"                  
                  >
                  <option value=''>{barcodeContainerType}</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
            </select>
        </div>
        <div className='commentWrapper'>
            <div className='microplateTitles'>Komment hozzáfűzése</div>
            <textarea className='comment' value={barcodeMessage} onChange={event => setBarcodeMessage(event.target.value)} placeholder='Komment hozzáadása..' maxlength="500">Textarea - Resizable (default)</textarea>
        </div>

                  
                                  <div>{sgsCountServerError}</div>
                

    </div>
	)


    
  
}