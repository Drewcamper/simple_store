import React, { useContext, useEffect } from "react";
import { Formik } from "formik";
import { SimpleStoreContext } from "../../context/context";
import "../ui/formInput.css";

export function ThreeFixedElements() {
  let {
    buttonText,
    setButtonText,
    starting_site,
    blank_strips_count,
    starting_strip,
    sampleBatchSampleCount,
    formPostObj,
    sample_group__sample_count,

    ref_numResponseIsValid,
    setRef_numResponseIsValid,
    ref_numResponseMinStartingNum,
    setRef_numResponseMinStartingNum,
    ref_numResponseMaxStartingNum,
    setRef_numResponseMaxStartingNum,
    sample_count,
    setSample_count,
    ref_numResponseMessage,
    setRef_numResponseMessage,
    responseMaxSampleCount,
    setResponseMaxSampleCount,
    barcodeIsValid,
    setBarcodeIsValid,
    barcodeFirstFreeCol,
    setBarcodeFirstFreeCol,
    barcodeContainerType,
    setBarcodeContainerType,
    barcodeMessage,
    setBarcodeMessage,
    dataRefNum,
    setDataRefNum,
    dataSGSCount,
    setDataSGSCount,
    refNumServerError,
    setRefNumServerError,
    sgsCountServerError,
    setSgsCountServerError,
  } = useContext(SimpleStoreContext);

  let maxValue = 264;

  const SampleGroupForm = () => (
    <div>
      <h1>Dispense 1</h1>
      <Formik
        initialValues={{
          starting_site: "",
          blank_strips_count: "",
          starting_strip: "",
        }}
        validate={(values) => {
          const errors = {};
          starting_site = values.starting_site;
          sampleBatchSampleCount = Number(values.blank_strips_count);
          ref_numResponseMinStartingNum = Number(values.starting_strip); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

          // console.log({'ref_num':starting_site, 'minStartingNum': values.starting_strip,'sampleBatchSampleCount': sampleBatchSampleCount})
          if (
            !values.starting_site ||
            !values.blank_strips_count ||
            !values.starting_strip 
          ) {
            errors.starting_site = "Required";
            errors.blank_strips_count = "Required";
            errors.starting_strip = "Required";
          } else if(
              values.blank_strips_count >= values.starting_strip 
          ){errors.starting_strip = 'A választott kezdő oszlop száma túl alacsony'}
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          sampleBatchSampleCount = Number(values.starting_strip);
          starting_site = values.starting_site;
          setRef_numResponseMinStartingNum(Number(values.blank_strips_count));
          console.log(values.starting_strip);

          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(true);
          }, 400);
          console.log(values);
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
          <form onSubmit={handleSubmit} className="formWrapper">
            <div className="columnMaker">
              <div className="inlineInputs">
                <div className="title">starting site</div>
                <select
                  className="formInput"
                  type="starting_site"
                  name="starting_site"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.starting_site}
                >
                  <option value="">---</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                {errors.starting_site &&
                  touched.starting_site &&
                  errors.starting_site}
              </div>

              <div className="inlineInputs">
                <div className="title">blank strips count</div>
                <select
                  className="formInput"
                  type="blank_strips_count"
                  name="blank_strips_count"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.blank_strips_count}
                >
                  <option value="">---</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>

                {errors.blank_strips_count &&
                  touched.blank_strips_count &&
                  errors.blank_strips_count}
              </div>
              <div className="inlineInputs">
                <div className="title">starting strip</div>
                <select
                  className="formInput"
                  type="starting_strip"
                  name="starting_strip"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.starting_strip}
                >
                  <option value="">---</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>

                {errors.starting_strip &&
                  touched.starting_strip &&
                  errors.starting_strip}
              </div>
            </div>
            <div className="buttonWrapper">
              {/* <button type="submit" disabled={isSubmitting} className='formButton'>{buttonText}</button> */}
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
  );
}
