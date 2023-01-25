import React, { useContext } from 'react';
import { Formik } from 'formik';
import { SimpleStoreContext } from '../context/context';
import axios from 'axios'
import '../components/ui/formInput.css'



export const SampleGroupFormPage = () => {
  let {   buttonText, setButtonText,
          groupFormReferenceNum, StartingNum, sampleBatchSampleCount, dispenseCount,
          sample_group__sample_count, sampleSum
      } = useContext(SimpleStoreContext);

      let maxValue = 264

  const PostButton = () => {
    axios
    .post('https://simplestore.up.railway.app/SamplesApp/samples_form/', {
      renerence_number: groupFormReferenceNum,
      starting_num: StartingNum,
      sample_batch__sample_count: sampleBatchSampleCount,
      dispense_count: dispenseCount

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
          else if(sampleSum - values.sample_batch__sample_count > 264 ){values.sample_batch__sample_count = 264}

          
          else if(values.dispense === '---'){errors.dispense_count = 'Váalsszon letöltés számot'}
        
          return errors;
        }}
        
        onSubmit={
          ( values, { setSubmitting }) => {
            // sampleBatchSampleCount = Number(values.sample_batch__sample_count)
          groupFormReferenceNum = values.reference_num
          StartingNum = values.starting_num
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
            <div className='columnMaker'>
              <div className='inlineInputs'>
                <div className='title'>Reference number</div>
                <input 
                  className='formInput'
                  type="reference_num"
                  name="reference_num"
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.starting_num}
                />
                {errors.starting_num && touched.starting_num && errors.starting_num}
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
                {/* <input
                  className='formInput'
                  type="dispense_count"
                  name="dispense_count"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dispense_count}
                /> */}
                {errors.dispense_count && touched.dispense_count && errors.dispense_count}
              </div>
            </div>
            <div className='buttonWrapper'>
            <button type="submit" disabled={isSubmitting} className='formButton'>{buttonText}</button>
            </div>

          </form>
        )}
      </Formik>
    </div>
  
  );
  
  
return (

  <>
  
  <SampleGroupForm />
{/* <button onMouseUp={postButton()} >sending data</button> */}
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
