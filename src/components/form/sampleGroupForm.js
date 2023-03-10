import React, { useContext, useEffect } from "react";
import { Formik } from "formik";
import { SimpleStoreContext } from "../../context/context";
import axios from "axios";
import "../ui/formInput.css";
import { ThreeFixedElements } from "./threeFixedElements";

export const SampleGroupFormPage = () => {
  let {
    buttonText,
    setButtonText,
    reference_num,
    starting_num,
    sampleBatchSampleCount,
    dispenseCount,
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

  const ReferenceNumFetch = (used_places_count, reference_num) => {
    const urlBase = `https://simplestore.up.railway.app/SamplesApp/rest_api/validations/sample_batch/check_reference_num/iktato01/0/`;
    return new Promise((resolve, reject) => {
      axios
        .get(urlBase)
        .then((response) => {
          console.log(response.data);
          resolve(response.data);
          setRef_numResponseIsValid(Object.values(response.data)[0]);
          setRef_numResponseMinStartingNum(
            Number(Object.values(response.data)[1])
          );
          setRef_numResponseMaxStartingNum(
            Number(Object.values(response.data)[2])
          );
          setSample_count(Object.values(response.data)[3]);
          setRef_numResponseMessage(Object.values(response.data)[4]);
        })
        .catch((error) => {
          console.log(error.response);
          reject({ status: error.response.status, message: error.message });
        });
    });

    useEffect(() => {
      ReferenceNumFetch().then((response) => {
        setDataRefNum(response);
        if (ref_numResponseIsValid === false) {
          setRefNumServerError("A referencia sz??m nem l??tezik.");
        }
      });
    }, [
      ref_numResponseIsValid,
      ref_numResponseMinStartingNum,
      ref_numResponseMaxStartingNum,
      sample_count,
      ref_numResponseMessage,
    ]);
  };
  // if(reference_num!==''){

  const SBSCountFetch = (reference_num, starting_num, used_places_count) => {
    const urlBase = `https://simplestore.up.railway.app/SamplesApp/rest_api/validations/sample_batch/check_reference_num/iktato01/0/`;
    return new Promise((resolve, reject) => {
      axios
        .get(urlBase)
        .then((response) => {
          console.log(response.data);
          resolve(response.data);
          setResponseMaxSampleCount(Object.values(response.data)[0]);
        })
        .catch((error) => {
          console.log(error.response);
          reject({ status: error.response.status, message: error.message });
        });
    });

    useEffect(() => {
      SBSCountFetch().then((response) => {
        setDataSGSCount(response);
        if (ref_numResponseIsValid === false) {
          setSgsCountServerError("A referencia sz??m nem l??tezik.");
        }
      });
    }, [
      ref_numResponseIsValid,
      ref_numResponseMinStartingNum,
      ref_numResponseMaxStartingNum,
      sample_count,
      ref_numResponseMessage,
    ]);
  };

  const BarcodeFetch = (reference_num, starting_num, used_places_count) => {
    const urlBase = `https://simplestore.up.railway.app/SamplesApp/rest_api/validations/sample_batch/check_plate_availability/plate012/1/`;
    return new Promise((resolve, reject) => {
      axios
        .get(urlBase)
        .then((response) => {
          console.log(response.data);
          resolve(response.data);
          setBarcodeIsValid(Object.values(response.data)[0]);
          setBarcodeFirstFreeCol(Object.values(response.data)[1]);
          setBarcodeContainerType(Object.values(response.data)[2]);
          setBarcodeMessage(Object.values(response.data)[3]);
        })
        .catch((error) => {
          console.log(error.response);
          reject({ status: error.response.status, message: error.message });
        });
    });

    useEffect(() => {
      SBSCountFetch().then((response) => {
        setDataSGSCount(response);
        if (ref_numResponseIsValid === false) {
          setSgsCountServerError("A referencia sz??m nem l??tezik.");
        }
      });
    }, [
      ref_numResponseIsValid,
      ref_numResponseMinStartingNum,
      ref_numResponseMaxStartingNum,
      sample_count,
      ref_numResponseMessage,
    ]);
  };

  const PostButton = () => {
    axios
      .post(
        "https://simplestore.up.railway.app/SamplesApp/samples_form/",
        {
          // formPostObj,
          renerence_number: reference_num,
          starting_num: starting_num,
          sample_batch__sample_count: sampleBatchSampleCount,
          dispense_count: dispenseCount,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setButtonText("RECORDS SENT");
    setTimeout(() => {
      setButtonText("SUBMIT");
    }, 3000);
  };

  const SampleGroupForm = () => (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={{
          reference_num: "",
          starting_num: "",
          sample_batch__sample_count: "",
          dispense_count: "",
        }}
        validate={(values) => {
          const errors = {};
          reference_num = values.reference_num;
          ref_numResponseMinStartingNum = Number(values.starting_num);
          sampleBatchSampleCount = Number(values.sample_batch__sample_count);
          dispenseCount = Number(values.dispense_count);

          // console.log({'ref_num':reference_num, 'minStartingNum': values.starting_num,'sampleBatchSampleCount': sampleBatchSampleCount, 'dispenseCount': dispenseCount})
          if (
            !values.reference_num ||
            !values.starting_num ||
            !values.sample_batch__sample_count
          ) {
            errors.reference_num = "Required";
            errors.starting_num = "Required";
            errors.sample_batch__sample_count = "Required";
            errors.dispense_count = "Required";
          } else if (!/^[A-Z0-9._%+-]/i.test(values.reference_num)) {
            errors.reference_num = "Invalid";
          } else if (
            values.starting_num <= 1 ||
            values.starting_num >= sample_group__sample_count
          ) {
            errors.starting_num = "nem l??tez?? sorsz??m";
          } else if (!/^[0-9]/i.test(values.starting_num)) {
            errors.starting_num = "Invalid";
          } else if (values.starting_num < ref_numResponseMinStartingNum) {
            errors.starting_num = `T??l alacsony ??rt??k. Min ${ref_numResponseMinStartingNum}`;
          } else if (values.starting_num > ref_numResponseMaxStartingNum) {
            errors.starting_num = `T??l magas ??rt??k. Max ${ref_numResponseMaxStartingNum}`;
          } else if (!/^[0-9]/i.test(values.sample_batch__sample_count)) {
            errors.sample_batch__sample_count = "Invalid";
          } else if (values.sample_batch__sample_count < 1) {
            errors.sample_batch__sample_count = `T??l alacsony mintasz??m.`;
          } else if (maxValue - values.sample_batch__sample_count > 264) {
            errors.sample_batch__sample_count = `T??l nagy mintasz??m.`;
          } else if (sample_count - values.sample_batch__sample_count > 264) {
            values.sample_batch__sample_count = 264;
          } else if (
            values.dispense !== 1 ||
            values.dispense !== 2 ||
            values.dispense !== 3
          ) {
            errors.dispense_count = "V??lsszon let??lt??s sz??mot";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          sampleBatchSampleCount = Number(values.sample_batch__sample_count);
          reference_num = values.reference_num;
          setRef_numResponseMinStartingNum(Number(values.starting_num));
          dispenseCount = Number(values.dispense_count);
          console.log(values.sample_batch__sample_count);
          PostButton();

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
            <div className="fixedElements">
              <div className="columnMaker">
                <div className="title">Reference number</div>
                <div className="inlineInputs">
                  <input
                    className="firstFormInput"
                    type="reference_num"
                    name="reference_num"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.reference_num}
                  />
                  {errors.reference_num &&
                    touched.reference_num &&
                    errors.reference_num}
                  <div>{refNumServerError}</div>
                </div>
                <div className="columnMaker">
                  <div className="title">Starting number</div>
                  <div className="inlineInputs">
                    <input
                      placeholder="alap??rtelmezetten 1"
                      className="firstFormInput"
                      type="starting_num"
                      name="starting_num"
                      onChange={handleChange}
                      onBlur={handleBlur && SBSCountFetch}
                      value={values.starting_num}
                    />
                    {errors.starting_num &&
                      touched.starting_num &&
                      errors.starting_num}
                    <div>{sgsCountServerError}</div>
                  </div>
                </div>
                <div className="columnMaker">
                  <div className="title">Let??lt??s mintasz??m </div>

                  <div className="inlineInputs">
                    <input
                      placeholder={"max " + maxValue}
                      className="firstFormInput"
                      type="sample_batch__sample_count"
                      name="sample_batch__sample_count"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.sample_group__sample_count}
                    />
                    {errors.sample_batch__sample_count &&
                      touched.sample_batch__sample_count &&
                      errors.sample_batch__sample_count}
                  </div>
                </div>
                <div className="columnMaker">
                  <div className="title">dispense_count</div>

                  <div className="inlineInputs">
                    <select
                      className="formInput"
                      type="dispense_count"
                      name="dispense_count"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.dispense_count}
                    >
                      <option value="">---</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>

                    {errors.dispense_count &&
                      touched.dispense_count &&
                      errors.dispense_count}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="columnMaker">
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
            </div> */}
                  <ThreeFixedElements />
                  <ThreeFixedElements />
                  <ThreeFixedElements />

            
          </form>
        )}
      </Formik>
      <div className="buttonWrapper">
              <button
                type="submit"
                // disabled={isSubmitting}
                className="formButton"
              >
                {buttonText}
              </button>
            </div>
      {/* <button onClick={() => referenceNumFetch().then(response => setData(response))}>validation</button> */}
      {/* <button onMouseUp={PostButton()} >sending data</button> */}
    </div>
  );

  return (
    <>
      <SampleGroupForm />
    </>
  );
};

// const { sampleGroupCategories, setSampleGroupCategories } = useContext(SimpleStoreContext);

//reference_num
// starting_num
// sample_group__sample_count
// dispense_count

//sample_group__sample_count is an integer
//others is string
