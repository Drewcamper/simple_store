import React, { createContext, useState } from "react";

export const SimpleStoreContext = createContext()

export const SimpleStoreProvider = ({children}) => {
    const [city, setCity] = useState('order_num=88')
    const [buttonText, setButtonText] = useState('SUBMIT')



//ref num validation response
const [ref_numResponseIsValid, setRef_numResponseIsValid] = useState('')
const [ref_numResponseMinStartingNum, setRef_numResponseMinStartingNum] = useState(Number('9'))
const [ref_numResponseMaxStartingNum, setRef_numResponseMaxStartingNum] = useState(Number('56'))
const [sample_count, setSample_count] = useState(109)
const [ref_numResponseMessage, setRef_numResponseMessage] = useState('')

//ref group ref num
const [responseMaxSampleCount, setResponseMaxSampleCount] = useState()

//barcode
const [barcodeIsValid, setBarcodeIsValid] = useState()
const [barcodeFirstFreeCol, setBarcodeFirstFreeCol] = useState()
const [barcodeContainerType, setBarcodeContainerType] = useState()
const [barcodeMessage, setBarcodeMessage] = useState()



//asking for data
let orderNumber = ''
let status = ''
let comment = ' '
let sampleBatchStartingNum = ''
let sampleBatchRegDateTime = ''
let sampleBatchComment = ''
let sampleBatchRegUser = ''



//sending data
let serverErrors = ''
let groupFormReferenceNum = ''
let StartingNum = 9
let sampleBatchSampleCount = sample_count - StartingNum
let dispenseCount = Number('')



    return (
      <SimpleStoreContext.Provider value={{
        city, setCity, buttonText, setButtonText, 
      orderNumber,status, comment, sampleBatchStartingNum, sampleBatchRegDateTime, sampleBatchComment, sampleBatchRegUser,
      serverErrors, groupFormReferenceNum, StartingNum, sampleBatchSampleCount, dispenseCount,
      ref_numResponseIsValid, setRef_numResponseIsValid,ref_numResponseMinStartingNum, setRef_numResponseMinStartingNum,ref_numResponseMaxStartingNum, setRef_numResponseMaxStartingNum,sample_count, setSample_count, ref_numResponseMessage, setRef_numResponseMessage,
      responseMaxSampleCount, setResponseMaxSampleCount,
      barcodeIsValid, setBarcodeIsValid,barcodeFirstFreeCol, setBarcodeFirstFreeCol,barcodeContainerType, setBarcodeContainerType,barcodeMessage, setBarcodeMessage
      
      }}>
        {children}
      </SimpleStoreContext.Provider>
    )
  }