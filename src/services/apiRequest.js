import axios from "axios";
import { SimpleStoreContext } from "../context/context";
import { useContext } from "react";


export const GetSamples = () => {

  const {orderNumber, status, comment,sampleBatchStartingNum, sampleBatchSampleCount, sampleBatchDispenseCount, simpleBatchRegDatTime, simpleBatchComment, simpleBatchRegUser, groupFormReferenceNum, groupFormSampleSpecies, groupFormSampleCount, groupFormComment} = useContext(SimpleStoreContext);
  
  const link = `https://simplestore.up.railway.app/SamplesApp/samples_info/?order_num=${orderNumber}&status=${status}&comment=${comment}&reference_num=${groupFormReferenceNum}&sample_species=${groupFormSampleSpecies}&sample_count1=${groupFormSampleCount}&comment1=${groupFormComment}&starting_num=${sampleBatchStartingNum}&sample_count2=${sampleBatchSampleCount}&dispense_count=${sampleBatchDispenseCount}&reg_date_time2_after=&reg_date_time2_before=&reg_user=${simpleBatchRegUser}&comment2=${simpleBatchComment}`


  return new Promise((resolve, reject) => {

    axios
      .get(link)
      .then((res) => {
        console.log(res.data)
        resolve(res.data);
      })
      .catch((err) => {
        console.log({'error response': err.response, 'error message': err.message, 'error response status': err.response.status})
        reject({ status: err.resopnse.status, message: err.message });
      });
  });
};
