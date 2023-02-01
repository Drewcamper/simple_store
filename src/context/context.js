import React, { createContext, useState } from "react";
import { useTheme } from "styled-components";

export const SimpleStoreContext = createContext()

export const SimpleStoreProvider = ({children}) => {
    const [city, setCity] = useState('order_num=88')
    const [buttonText, setButtonText] = useState('SUBMIT')



//ref num validation response
const [ref_numResponseIsValid, setRef_numResponseIsValid] = useState()
const [ref_numResponseMinStartingNum, setRef_numResponseMinStartingNum] = useState('12')
const [ref_numResponseMaxStartingNum, setRef_numResponseMaxStartingNum] = useState('')
const [sample_count, setSample_count] = useState(34)
const [ref_numResponseMessage, setRef_numResponseMessage] = useState('')

//ref group ref num
const [responseMaxSampleCount, setResponseMaxSampleCount] = useState()

//barcode
const [barcodeIsValid, setBarcodeIsValid] = useState()
const [barcodeFirstFreeCol, setBarcodeFirstFreeCol] = useState()
const [barcodeContainerType, setBarcodeContainerType] = useState('Kérem válasszon')
const [barcodeMessage, setBarcodeMessage] = useState('')



//asking for data
let orderNumber = ''
let status = ''
let comment = ''
let sampleBatchStartingNum = ''
let sampleBatchRegDateTime = ''
let sampleBatchComment = ''
let sampleBatchRegUser = ''



//sending data
let reference_num = ''
let starting_num = 9 || 105 || 201
let sampleBatchSampleCount = sample_count - starting_num
let dispenseCount = Number('')
let formPostObj = {
  'form_data':{
    'sample_groups':[
      {
      'renerence_number': reference_num,
      'starting_num': starting_num,
      'sb_sample_count': sampleBatchSampleCount
      }
    ],
    'dispense_count': dispenseCount,
    'dispenses':[
      {
        'single_dispense_infos':{
          'expected_volume': undefined,
          "starting_site": undefined,
          "starting_strip": undefined,
          "blank_strips_count": 2
        },
        'used_plates_informatios':[
          {
            'container_barcode': undefined,
            'container_type': barcodeContainerType,
            'container_comment': barcodeMessage,
          }
        ]
      }
    ]
  }
}



const [selected, setSelected] = useState(93);
const [sampleLeftvers, setSampleLeftovers] = useState()
const [blackList, setBlackList] = useState()
const [blackListArray, setBlackListArray] = useState([1,2,3,4,5,6,7,8,9,97,98,99,100,101,102,103,104,193,194,195,196,197,198,199,200])

const [dataRefNum, setDataRefNum] = useState([]);
const [dataSGSCount, setDataSGSCount] = useState([])

const [refNumServerError, setRefNumServerError] = useState()
const [sgsCountServerError, setSgsCountServerError] = useState()


    return (
      <SimpleStoreContext.Provider value={{
        city, setCity, buttonText, setButtonText, 
      orderNumber,status, comment, sampleBatchStartingNum, sampleBatchRegDateTime, sampleBatchComment, sampleBatchRegUser,
       reference_num, starting_num, sampleBatchSampleCount, dispenseCount, formPostObj,
      ref_numResponseIsValid, setRef_numResponseIsValid,ref_numResponseMinStartingNum, setRef_numResponseMinStartingNum,ref_numResponseMaxStartingNum, setRef_numResponseMaxStartingNum,sample_count, setSample_count, ref_numResponseMessage, setRef_numResponseMessage,
      responseMaxSampleCount, setResponseMaxSampleCount,
      barcodeIsValid, setBarcodeIsValid,barcodeFirstFreeCol, setBarcodeFirstFreeCol,barcodeContainerType, setBarcodeContainerType,barcodeMessage, setBarcodeMessage,
      selected, setSelected, sampleLeftvers, setSampleLeftovers, blackList, setBlackList, blackListArray, setBlackListArray,
      dataRefNum, setDataRefNum,dataSGSCount, setDataSGSCount,
      refNumServerError, setRefNumServerError, sgsCountServerError, setSgsCountServerError
      
      }}>
        {children}
      </SimpleStoreContext.Provider>
    )
  }