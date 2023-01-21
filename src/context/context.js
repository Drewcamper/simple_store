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
    let sampleBatchSampleCount = ''
    let sampleBatchDispenseCount = 1
    let sampleBatchRegDateTime = ''
    let sampleBatchComment = ''
    let sampleBatchRegUser = ''




//sending data
    let groupFormReferenceNum = ''
    let groupFormSampleSpecies = ''
    let groupFormSampleCount = ''
    let groupFormComment = ''
  
    

    return (
      <SimpleStoreContext.Provider value={{city, setCity, buttonText, setButtonText, 
      orderNumber,status, comment, sampleBatchStartingNum, sampleBatchSampleCount, sampleBatchDispenseCount,
      sampleBatchRegDateTime, sampleBatchComment, sampleBatchRegUser,
      
      groupFormReferenceNum, groupFormSampleSpecies, groupFormSampleCount, groupFormComment}}>
        {children}
      </SimpleStoreContext.Provider>
    )
  }