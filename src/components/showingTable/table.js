import React,{ useState, useEffect, useContext } from 'react'
import { SimpleStoreContext } from '../../context/context'
import DataTable from "react-data-table-component"
import '../ui/table.css'
// import { lodash } from 'lodash'

export const Table = () => {
    const {orderNumber, status, /*comment,sampleBatchStartingNum, sampleBatchSampleCount, sampleBatchDispenseCount, simpleBatchRegDatTime, simpleBatchComment, simpleBatchRegUser, groupFormReferenceNum, groupFormSampleSpecies, groupFormSampleCount, groupFormComment*/} = useContext(SimpleStoreContext);

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
//   const [filteringQuery, setFilteringQuery] = useState('1')
//  const [filteredData, setFilteredData] = useState(data);
//   const [filterText, setFilterText] = useState('');
//   const [resetPaginationToggle, setResetPaginationToggle] = useState(false)


  const columns = [
    {
        id: 1,
        name: "Minta Sorszám",
        selector: (row) => row.order_num,
        sortable: true,
        grow: 0.7,
		style: {
			backgroundColor: 'rgba(63, 195, 128, 0.9)',
		    color: 'white',
            
		},
    },
    {
        id: 2,
        name: "Státusz",
        selector: (row) => row.status,
        sortable: true,
    },
    {
        id: 3,
        name: "Megjegyzés",
        selector: (row) => row.sample_batch__comment,
        sortable: true,
    },
    {
        id: 4,
        name: "Minta Csoport IktatóSzám Contains",
        selector: (row) => row.sample_group__reference_num,
        sortable: true,
    },
    {
        id: 5,
        name: "Minta Csoport Állatfajta",
        selector: (row) => row.sample_group__sample_species,
        sortable: true,
    },
    {
        id: 6,
        name: "Minta Csoport Minták Száma",
        selector: (row) => row.sample_group__sample_count,
        sortable: true,
        
    },
    {
        id: 7,
        name: "Minta Csoport Megjegyzés Contains",
        selector: (row) => row.sample_group__comment,
        sortable: true,
        
    },
    {
        id: 8,
        name: "Minta Batch Kezdő Száma",
        selector: (row) => row.sample_batch__starting_num,
        sortable: true,
        
    },
    {
        id: 9,
        name: "Minta Batch Minták Száma",
        selector: (row) => row.sample_batch__sample_count,
        sortable: true,
        
    },
    {
        id: 10,
        name: "Minta Batch Letöltések Száma",
        selector: (row) => row.sample_batch__dispense_count,
        sortable: true,
    },
    {
        id: 11,
        name: "Minta Batch Letöltés Dátum, Idő",
        selector: (row) => row.sample_batch__reg_date_time,
        sortable: true,
        
    },
    {
        id: 12,
        name: "Felhasználó",
        selector: (row) => row.sample_batch__reg_user,
        sortable: true,
        
    },
    {
        id: 13,
        name: "Minta Batch Megjegyzés",
        selector: (row) => row.sample_batch__comment,
        sortable: true,
    },
  ]

  useEffect(() => {
    fetchTableData()
    console.log({'data': data}) 
  }, [])


  async function fetchTableData() {
    setLoading(true)
    const URL = `https://simplestore.up.railway.app/SamplesApp/samples_info/?comment=&comment2=&format=json&order_num=${orderNumber}&status=${status}`
    const response = await fetch(URL)
    const users = await response.json()
    setData(users)
    setLoading(false)
    
  }

  
  return (
    <div style={{ margin: "20px" }}>
        
      
        <DataTable 
            autoWidth={true}
            pointerOnHover={true}
            // filter={filteringQuery}

            
           
            

            title="Data"
            columns={columns}
            data={data}
            progressPending={loading}
            pagination
        />
       </div>
  )
}

// export default Table
