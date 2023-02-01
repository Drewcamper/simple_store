import '../ui/board.css'
import { useContext, useRef } from "react";
import { SimpleStoreContext } from '../../context/context';
import { BarcodeApi } from '../../services/barcodeApi';

export const ThirdMicroPlate = () => {

    let {      barcodeIsValid, setBarcodeIsValid,barcodeFirstFreeCol, setBarcodeFirstFreeCol,barcodeContainerType, setBarcodeContainerType,barcodeMessage, setBarcodeMessage,
        sgsCountServerError,
 
        ref_numResponseMinStartingNum, ref_numResponseMaxStartingNum, sample_count, StartingNum, selected, setSelected, sampleLeftvers, setSampleLeftovers, blackList,blackListArray, setBlackListArray
    } = useContext(SimpleStoreContext);

    // && Number(name)<=ref_numResponseMaxStartingNum

	const boardRef = useRef(null);
    let container_barcode = ''

    function Button({name, onClick}){
        // if(sampleLeftvers>(96-201)){setSampleLeftovers(sampleLeftvers-96-201)}
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
             <Button name='193' selected={selected} onClick={handleClick}/>
             <Button name="201" selected={selected} onClick={handleClick} />
             <Button name="209" selected={selected} onClick={handleClick}/>
             <Button name="217" selected={selected} onClick={handleClick}/>
             <Button name='225' selected={selected} onClick={handleClick}/>
             <Button name="233" selected={selected} onClick={handleClick}/>
             <Button name="241" selected={selected} onClick={handleClick}/>
             <Button name="249" selected={selected} onClick={handleClick}/>
             <Button name='257' selected={selected} onClick={handleClick}/>
             <Button name="265" selected={selected} onClick={handleClick}/>
             <Button name="273" selected={selected} onClick={handleClick}/>
             <Button name="281" selected={selected} onClick={handleClick}/>

            {/* second row */}
            <Button name='194' selected={selected} onClick={handleClick}/>
             <Button name="202" selected={selected} onClick={handleClick}/>
             <Button name="210" selected={selected} onClick={handleClick}/>
             <Button name="218" selected={selected} onClick={handleClick}/>
             <Button name='226' selected={selected} onClick={handleClick}/>
             <Button name="234" selected={selected} onClick={handleClick}/>
             <Button name="242" selected={selected} onClick={handleClick}/>
             <Button name="250" selected={selected} onClick={handleClick}/>
             <Button name='258' selected={selected} onClick={handleClick}/>
             <Button name="266" selected={selected} onClick={handleClick}/>
             <Button name="274" selected={selected} onClick={handleClick}/>
             <Button name="282" selected={selected} onClick={handleClick}/>

            {/* third row */}
            <Button name='195' selected={selected} onClick={handleClick}/>
             <Button name="203" selected={selected} onClick={handleClick}/>
             <Button name="211" selected={selected} onClick={handleClick}/>
             <Button name="219" selected={selected} onClick={handleClick}/>
             <Button name='227' selected={selected} onClick={handleClick}/>
             <Button name="235" selected={selected} onClick={handleClick}/>
             <Button name="243" selected={selected} onClick={handleClick}/>
             <Button name="251" selected={selected} onClick={handleClick}/>
             <Button name='259' selected={selected} onClick={handleClick}/>
             <Button name="267" selected={selected} onClick={handleClick}/>
             <Button name="275" selected={selected} onClick={handleClick}/>
             <Button name="283" selected={selected} onClick={handleClick}/>

            {/* fourth row */}
            <Button name='196' selected={selected} onClick={handleClick}/>
             <Button name="204" selected={selected} onClick={handleClick}/>
             <Button name="212" selected={selected} onClick={handleClick}/>
             <Button name="220" selected={selected} onClick={handleClick}/>
             <Button name='228' selected={selected} onClick={handleClick}/>
             <Button name="236" selected={selected} onClick={handleClick}/>
             <Button name="244" selected={selected} onClick={handleClick}/>
             <Button name="252" selected={selected} onClick={handleClick}/>
             <Button name='260' selected={selected} onClick={handleClick}/>
             <Button name="268" selected={selected} onClick={handleClick}/>
             <Button name="276" selected={selected} onClick={handleClick}/>
             <Button name="284" selected={selected} onClick={handleClick}/>

            {/* fifth row */}
            <Button name='197' selected={selected} onClick={handleClick}/>
             <Button name="205" selected={selected} onClick={handleClick}/>
             <Button name="213" selected={selected} onClick={handleClick}/>
             <Button name="221" selected={selected} onClick={handleClick}/>
             <Button name='229' selected={selected} onClick={handleClick}/>
             <Button name="237" selected={selected} onClick={handleClick}/>
             <Button name="245" selected={selected} onClick={handleClick}/>
             <Button name="253" selected={selected} onClick={handleClick}/>
             <Button name='261' selected={selected} onClick={handleClick}/>
             <Button name="269" selected={selected} onClick={handleClick}/>
             <Button name="277" selected={selected} onClick={handleClick}/>
             <Button name="285" selected={selected} onClick={handleClick}/>

            {/* sixth row */}
            <Button name='198' selected={selected} onClick={handleClick}/>
             <Button name="206" selected={selected} onClick={handleClick}/>
             <Button name="214" selected={selected} onClick={handleClick}/>
             <Button name="222" selected={selected} onClick={handleClick}/>
             <Button name='230' selected={selected} onClick={handleClick}/>
             <Button name="238" selected={selected} onClick={handleClick}/>
             <Button name="246" selected={selected} onClick={handleClick}/>
             <Button name="254" selected={selected} onClick={handleClick}/>
             <Button name='262' selected={selected} onClick={handleClick}/>
             <Button name="270" selected={selected} onClick={handleClick}/>
             <Button name="278" selected={selected} onClick={handleClick}/>
             <Button name="286" selected={selected} onClick={handleClick}/>

            {/* seventh row */}
            <Button name='199' selected={selected} onClick={handleClick}/>
             <Button name="207" selected={selected} onClick={handleClick}/>
             <Button name="215" selected={selected} onClick={handleClick}/>
             <Button name="223" selected={selected} onClick={handleClick}/>
             <Button name='231' selected={selected} onClick={handleClick}/>
             <Button name="239" selected={selected} onClick={handleClick}/>
             <Button name="247" selected={selected} onClick={handleClick}/>
             <Button name="255" selected={selected} onClick={handleClick}/>
             <Button name='263' selected={selected} onClick={handleClick}/>
             <Button name="271" selected={selected} onClick={handleClick}/>
             <Button name="279" selected={selected} onClick={handleClick}/>
             <Button name="287" selected={selected} onClick={handleClick}/>

            {/* eights row */}
             <Button name='200' selected={selected} onClick={handleClick}/>
             <Button name="208" selected={selected} onClick={handleClick}/>
             <Button name="216" selected={selected} onClick={handleClick}/>
             <Button name="224" selected={selected} onClick={handleClick}/>
             <Button name='232' selected={selected} onClick={handleClick}/>
             <Button name="240" selected={selected} onClick={handleClick}/>
             <Button name="248" selected={selected} onClick={handleClick}/>
             <Button name="256" selected={selected} onClick={handleClick}/>
             <Button name='264' selected={selected} onClick={handleClick}/>
             <Button name="272" selected={selected} onClick={handleClick}/>
             <Button name="280" selected={selected} onClick={handleClick}/>
             <Button name="288" selected={selected} onClick={handleClick}/>

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