import React, { createContext, useState } from "react";

export const SimpleStoreContext = createContext()

export const SimpleStoreProvider = ({children}) => {
    const [city, setCity] = useState('order_num=88')
    const [buttonText, setButtonText] = useState('SUBMIT')



//asking for data
    let orderNumber = ''
    let status = ''
    let comment = ''
    let sampleBatchStartingNum = ''
    let sampleBatchRegDateTime = ''
    let sampleBatchComment = ''
    let sampleBatchRegUser = ''
    


//sending data
    let sampleSum = 264
    let groupFormReferenceNum = ''
    let StartingNum = 1
    let sampleBatchSampleCount = sampleSum - StartingNum
    let dispenseCount = Number('')
 

    return (
      <SimpleStoreContext.Provider value={{city, setCity, buttonText, setButtonText, 
      orderNumber,status, comment, sampleBatchStartingNum, sampleBatchSampleCount, dispenseCount,
      sampleBatchRegDateTime, sampleBatchComment, sampleBatchRegUser,
      StartingNum,
      groupFormReferenceNum}}>
        {children}
      </SimpleStoreContext.Provider>
    )
  }