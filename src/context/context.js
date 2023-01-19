import React, { createContext, useState } from "react";

export const SimpleStoreContext = createContext()

export const SimpleStoreProvider = ({children}) => {
    const [city, setCity] = useState('order_num=88')

    const [groupFormReferenceNum, setGroupFormReferenceNum] = useState('')
    const [groupFormSampleSpecies, setGroupFormSampleSpecies] = useState('')
    const [groupFormSampleCount, setGroupFormSampleCount] = useState()
    const [groupFormComment, setGroupFormComment] = useState('')

    const [buttonText, setButtonText] = useState('SUBMIT')
  
    

    return (
      <SimpleStoreContext.Provider value={{buttonText, setButtonText, city, setCity, groupFormReferenceNum, setGroupFormReferenceNum,groupFormSampleSpecies, setGroupFormSampleSpecies,groupFormSampleCount, setGroupFormSampleCount,groupFormComment, setGroupFormComment}}>
        {children}
      </SimpleStoreContext.Provider>
    )
  }