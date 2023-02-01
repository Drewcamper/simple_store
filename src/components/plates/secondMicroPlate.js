import '../ui/board.css'
import { useContext, useRef } from "react";
import { SimpleStoreContext } from '../../context/context';
import { BarcodeApi } from '../../services/barcodeApi';


export const SecondMicroPlate = () => {
    let {      barcodeIsValid, setBarcodeIsValid,barcodeFirstFreeCol, setBarcodeFirstFreeCol,barcodeContainerType, setBarcodeContainerType,barcodeMessage, setBarcodeMessage,
        sgsCountServerError,
 
        ref_numResponseMinStartingNum, ref_numResponseMaxStartingNum, sample_count, StartingNum, selected, setSelected, sampleLeftvers, setSampleLeftovers, blackList,blackListArray, setBlackListArray
    } = useContext(SimpleStoreContext);

    // && Number(name)<=ref_numResponseMaxStartingNum

	const boardRef = useRef(null);
    let container_barcode = ''

    function Button({name, onClick}){
        // if(sampleLeftvers>(96-105)){setSampleLeftovers(sampleLeftvers-96-105)}
        return <button onClick={()=>onClick(name)} className={`settings ${ Number(name)>=ref_numResponseMinStartingNum  && Number(name)<=sample_count ? "change-color" : ""}`}>{name}</button>
  
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
             <Button name='97' selected={selected} onClick={handleClick}/>
             <Button name="105" selected={selected} onClick={handleClick} />
             <Button name="113" selected={selected} onClick={handleClick}/>
             <Button name="121" selected={selected} onClick={handleClick}/>
             <Button name='129' selected={selected} onClick={handleClick}/>
             <Button name="137" selected={selected} onClick={handleClick}/>
             <Button name="145" selected={selected} onClick={handleClick}/>
             <Button name="153" selected={selected} onClick={handleClick}/>
             <Button name='161' selected={selected} onClick={handleClick}/>
             <Button name="169" selected={selected} onClick={handleClick}/>
             <Button name="177" selected={selected} onClick={handleClick}/>
             <Button name="185" selected={selected} onClick={handleClick}/>

            {/* second row */}
            <Button name='98' selected={selected} onClick={handleClick}/>
             <Button name="106" selected={selected} onClick={handleClick}/>
             <Button name="114" selected={selected} onClick={handleClick}/>
             <Button name="122" selected={selected} onClick={handleClick}/>
             <Button name='130' selected={selected} onClick={handleClick}/>
             <Button name="138" selected={selected} onClick={handleClick}/>
             <Button name="146" selected={selected} onClick={handleClick}/>
             <Button name="154" selected={selected} onClick={handleClick}/>
             <Button name='162' selected={selected} onClick={handleClick}/>
             <Button name="170" selected={selected} onClick={handleClick}/>
             <Button name="178" selected={selected} onClick={handleClick}/>
             <Button name="186" selected={selected} onClick={handleClick}/>

            {/* third row */}
            <Button name='99' selected={selected} onClick={handleClick}/>
             <Button name="107" selected={selected} onClick={handleClick}/>
             <Button name="115" selected={selected} onClick={handleClick}/>
             <Button name="123" selected={selected} onClick={handleClick}/>
             <Button name='131' selected={selected} onClick={handleClick}/>
             <Button name="139" selected={selected} onClick={handleClick}/>
             <Button name="147" selected={selected} onClick={handleClick}/>
             <Button name="155" selected={selected} onClick={handleClick}/>
             <Button name='163' selected={selected} onClick={handleClick}/>
             <Button name="171" selected={selected} onClick={handleClick}/>
             <Button name="179" selected={selected} onClick={handleClick}/>
             <Button name="187" selected={selected} onClick={handleClick}/>

            {/* fourth row */}
            <Button name='100' selected={selected} onClick={handleClick}/>
             <Button name="108" selected={selected} onClick={handleClick}/>
             <Button name="116" selected={selected} onClick={handleClick}/>
             <Button name="124" selected={selected} onClick={handleClick}/>
             <Button name='132' selected={selected} onClick={handleClick}/>
             <Button name="140" selected={selected} onClick={handleClick}/>
             <Button name="148" selected={selected} onClick={handleClick}/>
             <Button name="156" selected={selected} onClick={handleClick}/>
             <Button name='164' selected={selected} onClick={handleClick}/>
             <Button name="172" selected={selected} onClick={handleClick}/>
             <Button name="180" selected={selected} onClick={handleClick}/>
             <Button name="188" selected={selected} onClick={handleClick}/>

            {/* fifth row */}
            <Button name='101' selected={selected} onClick={handleClick}/>
             <Button name="109" selected={selected} onClick={handleClick}/>
             <Button name="117" selected={selected} onClick={handleClick}/>
             <Button name="125" selected={selected} onClick={handleClick}/>
             <Button name='133' selected={selected} onClick={handleClick}/>
             <Button name="141" selected={selected} onClick={handleClick}/>
             <Button name="149" selected={selected} onClick={handleClick}/>
             <Button name="157" selected={selected} onClick={handleClick}/>
             <Button name='165' selected={selected} onClick={handleClick}/>
             <Button name="173" selected={selected} onClick={handleClick}/>
             <Button name="181" selected={selected} onClick={handleClick}/>
             <Button name="189" selected={selected} onClick={handleClick}/>

            {/* sixth row */}
            <Button name='102' selected={selected} onClick={handleClick}/>
             <Button name="110" selected={selected} onClick={handleClick}/>
             <Button name="118" selected={selected} onClick={handleClick}/>
             <Button name="126" selected={selected} onClick={handleClick}/>
             <Button name='134' selected={selected} onClick={handleClick}/>
             <Button name="142" selected={selected} onClick={handleClick}/>
             <Button name="150" selected={selected} onClick={handleClick}/>
             <Button name="158" selected={selected} onClick={handleClick}/>
             <Button name='166' selected={selected} onClick={handleClick}/>
             <Button name="174" selected={selected} onClick={handleClick}/>
             <Button name="182" selected={selected} onClick={handleClick}/>
             <Button name="190" selected={selected} onClick={handleClick}/>

            {/* seventh row */}
            <Button name='103' selected={selected} onClick={handleClick}/>
             <Button name="111" selected={selected} onClick={handleClick}/>
             <Button name="119" selected={selected} onClick={handleClick}/>
             <Button name="127" selected={selected} onClick={handleClick}/>
             <Button name='135' selected={selected} onClick={handleClick}/>
             <Button name="143" selected={selected} onClick={handleClick}/>
             <Button name="151" selected={selected} onClick={handleClick}/>
             <Button name="159" selected={selected} onClick={handleClick}/>
             <Button name='167' selected={selected} onClick={handleClick}/>
             <Button name="175" selected={selected} onClick={handleClick}/>
             <Button name="183" selected={selected} onClick={handleClick}/>
             <Button name="191" selected={selected} onClick={handleClick}/>

            {/* eights row */}
             <Button name='104' selected={selected} onClick={handleClick}/>
             <Button name="112" selected={selected} onClick={handleClick}/>
             <Button name="120" selected={selected} onClick={handleClick}/>
             <Button name="128" selected={selected} onClick={handleClick}/>
             <Button name='136' selected={selected} onClick={handleClick}/>
             <Button name="144" selected={selected} onClick={handleClick}/>
             <Button name="152" selected={selected} onClick={handleClick}/>
             <Button name="160" selected={selected} onClick={handleClick}/>
             <Button name='168' selected={selected} onClick={handleClick}/>
             <Button name="176" selected={selected} onClick={handleClick}/>
             <Button name="184" selected={selected} onClick={handleClick}/>
             <Button name="192" selected={selected} onClick={handleClick}/>

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
        
    </div>
	)
}