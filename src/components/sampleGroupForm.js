import React, { useContext, useState, useEffect} from 'react';
import { Formik } from 'formik';
import { SimpleStoreContext } from '../context/context';
import axios from 'axios'
import '../components/ui/formInput.css'
import { RefNumValidation } from '../services/refNumValidation'



export const SampleGroupFormPage = () => {
  let {   buttonText, setButtonText, 
          reference_num, starting_num, sampleBatchSampleCount, dispenseCount, formPostObj,
          sample_group__sample_count, serverErrors,

          ref_numResponseIsValid, setRef_numResponseIsValid,ref_numResponseMinStartingNum, setRef_numResponseMinStartingNum,ref_numResponseMaxStartingNum, setRef_numResponseMaxStartingNum, sample_count, setSample_count, ref_numResponseMessage, setRef_numResponseMessage,
      responseMaxSampleCount, setResponseMaxSampleCount,
      barcodeIsValid, setBarcodeIsValid,barcodeFirstFreeCol, setBarcodeFirstFreeCol,barcodeContainerType, setBarcodeContainerType,barcodeMessage, setBarcodeMessage,
      data, setData
      } = useContext(SimpleStoreContext);
      
      let maxValue = 264
      let refNum = undefined
      

     


  
  const refNumPostValue = () => {
    
        if(reference_num !== '' ){
        axios
      .post('https://simplestore.up.railway.app/SamplesApp/samples_form/', {
        renerence_number: reference_num,
      }, {
          headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          }  
        }
      )
      .then(function (response) { 
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      }
  }



  const sample_group__reference_numFetchCheck = ( reference_num, starting_num, used_places_count) => {
    const urlBase = `https://simplestore.up.railway.app/SamplesApp/rest_api/validations/sample_batch/limit_starting_num/`
    return new Promise((resolve, reject) => {
      axios
      .get(`${urlBase}${reference_num}/${starting_num}/${used_places_count}/`) 
      .then((response) =>{
        console.log(response.data)
        resolve(response.data)
        setResponseMaxSampleCount(Object.values(response.data)[0])
      })
      .catch((error) => {
        console.log(error.response)
        reject({ status: error.response.status, message: error.message })
      })
    }) 
  }
  const barcodeFetchCheck = ( container_barcode, starting_col) => {
    const urlBase = `https://simplestore.up.railway.app/SamplesApp/rest_api/validations/sample_batch/check_plate_availability/`
    return new Promise((resolve, reject) => {
      axios
      .get(`${urlBase}${container_barcode}/${starting_col}/`) 
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










  const PostButton = () => {
    axios
    .post('https://simplestore.up.railway.app/SamplesApp/samples_form/', {
      // formPostObj,
      'renerence_number': reference_num,
      'starting_num': starting_num,
      'sample_batch__sample_count': sampleBatchSampleCount,
      'dispense_count': dispenseCount

    }, {
        headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
        }  
      }
    )
    .then(function (response) { 
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
    setButtonText('RECORDS SENT')
    setTimeout(() => {
      setButtonText('SUBMIT')
    }, 3000);
   
  }
  
  const SampleGroupForm = () => (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik 
        initialValues={{ reference_num: '', starting_num: '', sample_batch__sample_count: '' , dispense_count: ''}}
        validate={values => {                                                                                        
          const errors = {};
          reference_num = values.reference_num
          ref_numResponseMinStartingNum = Number(values.starting_num)
          sampleBatchSampleCount = Number(values.sample_batch__sample_count)
          dispenseCount = Number(values.dispense_count)

          console.log({'ref_num':reference_num, 'minStartingNum': values.starting_num,'sampleBatchSampleCount': sampleBatchSampleCount, 'dispenseCount': dispenseCount})
          if (!values.reference_num || !values.starting_num || !values.sample_batch__sample_count) {
            errors.reference_num = 'Required';
            errors.starting_num = 'Required';
            errors.sample_batch__sample_count = 'Required';
            errors.dispense_count = 'Required';
          }
          else if (!/^[A-Z0-9._%+-]/i.test(values.reference_num)){errors.reference_num = 'Invalid';}

          else if(values.starting_num<=1 || values.starting_num>=sample_group__sample_count){ errors.starting_num = 'nem létező sorszám'} 
          else if(!/^[0-9]/i.test(values.starting_num)){errors.starting_num = 'Invalid';}
          
          else if(!/^[0-9]/i.test(values.sample_batch__sample_count)){errors.sample_batch__sample_count = 'Invalid';}
          else if(values.sample_batch__sample_count < 1 ){errors.sample_batch__sample_count = `Túl alacsony mintaszám.`}

          else if(maxValue - values.sample_batch__sample_count > 264 ){errors.sample_batch__sample_count = `Túl nagy mintaszám.`}
          else if(sample_count - values.sample_batch__sample_count > 264 ){values.sample_batch__sample_count = 264}

          
          else if(values.dispense !== 1 || values.dispense !== 2 || values.dispense !== 3 ){errors.dispense_count = 'Válsszon letöltés számot'}
        
          return errors;
        }}
        onSubmit={
          ( values, { setSubmitting }) => {
            sampleBatchSampleCount = Number(values.sample_batch__sample_count)
          reference_num = values.reference_num
          setRef_numResponseMinStartingNum(Number(values.starting_num))
          dispenseCount = Number(values.dispense_count)
          console.log(values.sample_batch__sample_count)
          PostButton()

          setTimeout(() => {   
            alert(JSON.stringify( values, null, 2));
            setSubmitting(true);
          }, 400);
          console.log(values)
        }}
        
      >
        
        {({
          
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className='formWrapper'>
            <div className='columnMaker' >
              <div className='inlineInputs'>
                <div className='title'>Reference number</div>
                <input 
                  className='formInput'
                  type="reference_num"
                  name="reference_num"
                  onChange={handleChange}
                  onBlur={handleBlur && refNumPostValue}
                  value={values.reference_num}  
                />
                {errors.reference_num && touched.reference_num && errors.reference_num}             
              </div>

              <div className='inlineInputs'>
                <div className='title'>Starting number</div>
                <input 
                  placeholder='alapértelmezetten 1'
                  className='formInput'
                  type="starting_num"
                  name="starting_num"
                  onChange={handleChange }
                  onBlur={handleBlur}
                  value={values.starting_num}
                />
                {errors.starting_num && touched.starting_num && errors.starting_num}
                                <div>{serverErrors}</div>
              </div>

              <div className='inlineInputs'>
                <div className='title'>sample_batch__sample_count</div>
                <input
                  placeholder={'max ' + maxValue}
                  className='formInput'
                  type="sample_batch__sample_count"
                  name="sample_batch__sample_count"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.sample_group__sample_count}
                />
                {errors.sample_batch__sample_count && touched.sample_batch__sample_count && errors.sample_batch__sample_count}
                                <div>{serverErrors}</div>

              </div>


              <div className='inlineInputs'>
                <div className='title'>dispense_count</div>
                <select className='formInput'
                  type="dispense_count"
                  name="dispense_count"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dispense_count}>
                  <option value=''>---</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value="3">3</option>
                </select>
                
                {errors.dispense_count && touched.dispense_count && errors.dispense_count}
              </div>
              <div className='inlineInputs'>
                <div className='title'>starting site</div>
                <select className='formInput'
                  type="blank_strips_count"
                  name="starting_site"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.starting_site}>
                  <option value=''>---</option>
                  <option value='1'>0</option>
                  <option value='2'>1</option>
                  <option value="3">2</option>
                </select>
             
                {errors.blank_strips_count && touched.blank_strips_count && errors.blank_strips_count}
              </div>
              <div className='inlineInputs'>
                <div className='title'>blank strips count</div>
                <select className='formInput'
                  type="blank_strips_count"
                  name="blank_strips_count"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.blank_strips_count}>
                  <option value=''>---</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value="3">3</option>
                </select>
                
                {errors.blank_strips_count && touched.blank_strips_count && errors.blank_strips_count}
              </div>
              <div className='inlineInputs'>
                <div className='title'>starting strip</div>
                <select className='formInput'
                  type="starting_strip"
                  name="starting_strip"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.starting_strip}>
                  <option value=''>---</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value="3">3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value="6">6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value="9">9</option>
                  <option value='10'>10</option>
                  <option value='11'>11</option>
                  <option value="12">12</option>
                </select>
                
                {errors.starting_strip && touched.starting_strip && errors.starting_strip}
              </div>
            </div>
            <div className='buttonWrapper'>
            <button type="submit" disabled={isSubmitting} className='formButton'>{buttonText}</button>
            </div>
          </form>
                  

        )}
        
      </Formik>
      {/* <button onClick={() => referenceNumFetch().then(response => setData(response))}>validation</button> */}
      {/* <button onMouseUp={PostButton()} >sending data</button> */}

    </div>
  
  );
  
  
return (

  <>
  
  <SampleGroupForm />
  </>
  
)


}










  // const { sampleGroupCategories, setSampleGroupCategories } = useContext(SimpleStoreContext);










//reference_num
// starting_num
// sample_group__sample_count
// dispense_count

//sample_group__sample_count is an integer
//others is string
