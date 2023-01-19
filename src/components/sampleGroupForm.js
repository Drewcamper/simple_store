import React, { useContext,useCallback} from 'react';
import { Formik } from 'formik';
import { SimpleStoreContext } from '../context/context';
import { PostSamples } from '../services/apiPost';
import axios from 'axios'



export const SampleGroupFormPage = () => {
  const {buttonText, setButtonText, city, setCity, groupFormReferenceNum, setGroupFormReferenceNum, groupFormSampleSpecies, setGroupFormSampleSpecies, groupFormSampleCount, setGroupFormSampleCount, groupFormComment, setGroupFormComment } = useContext(SimpleStoreContext);
  
  const postButton = () => {
    axios.post('https://reqres.in/api/users', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
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
        initialValues={{ reference_num: '', sample_species: '', sample_count: '', comment: '' }}
        validate={values => {                                                                                        
          const errors = {};
          if (!values.reference_num || !values.sample_species || !values.sample_count || !values.comment) {
            errors.reference_num = 'Required';
            errors.sample_species = 'Required';
            errors.sample_count = 'Required';
            errors.comment = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]/i.test(values.reference_num&&values.sample_species&&values.sample_count&&values.comment)
          ) {
            errors.reference_num = 'Invalid';
            errors.sample_species = 'Invalid';
            errors.sample_count = 'Invalid';
            errors.comment = 'Invalid';
          }
          return errors;
        }}
        onSubmit={( values, { setSubmitting }) => {

          
          setGroupFormReferenceNum(values.reference_num)
          setGroupFormSampleSpecies(values.sample_species)
          setGroupFormSampleCount(Number(values.sample_count))
          setGroupFormComment(values.comment)
          
          
          // handleInputKeyPress()

        if(groupFormReferenceNum === values.reference_num &&
           groupFormSampleSpecies === values.sample_species &&
           groupFormSampleCount === Number(values.sample_count) &&
           groupFormComment === values.comment
          ){postButton()}

          setTimeout(() => {
            alert(JSON.stringify( values, null, 2));
            setSubmitting(true);
          }, 400);
          console.log(groupFormReferenceNum, groupFormSampleSpecies, groupFormSampleCount, groupFormComment)
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
          <form onSubmit={handleSubmit}>
            Reference num
            <input
              type="reference_num"
              name="reference_num"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.reference_num}
            />
            {errors.reference_num && touched.reference_num && errors.reference_num}
              <br />
            Sample Species
            <input
              type="sample_species"
              name="sample_species"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.sample_species}
            />
            {errors.sample_species && touched.sample_species && errors.sample_species}
  
            <br />
            Sample count
            <input
              type="sample_count"
              name="sample_count"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.sample_count}
            />
            {errors.sample_count && touched.sample_count && errors.sample_count}
  
            <br />
              Comment
            <input
              type="comment"
              name="comment"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.comment}
            />
            {errors.comment && touched.comment && errors.comment}
            <br />

            <button type="submit" disabled={isSubmitting}>
            {buttonText}
            </button>
          </form>
        )}
      </Formik>
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
// sample_species
// sample_count
// comment

//sample_count is an integer
//others is string
