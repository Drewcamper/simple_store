import React,{ useState, useEffect, useContext, useMemo} from 'react'
import { SimpleStoreContext } from '../context/context'
import DataTable from "react-data-table-component"
import {useTable, useGlobalFilter} from 'react-data-table-component'
import '../styling/table.css'

export const Table = () => {
    const {orderNumber, status, comment,sampleBatchStartingNum, sampleBatchSampleCount, sampleBatchDispenseCount, simpleBatchRegDatTime, simpleBatchComment, simpleBatchRegUser, groupFormReferenceNum, groupFormSampleSpecies, groupFormSampleCount, groupFormComment} = useContext(SimpleStoreContext);

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedRowId, setSelectedRowId] = useState()





  const handleRowClick = (row) => {
    setSelectedRowId(row.id)
  }
  const columns = [
    {
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
        name: "Státusz",
        selector: (row) => row.status,
        sortable: true,
    },
    {
        name: "Megjegyzés",
        selector: (row) => row.sample_batch__comment,
        sortable: true,
    },
    {
        name: "Minta Csoport IktatóSzám Contains",
        selector: (row) => row.sample_group__reference_num,
        sortable: true,
    },
    {
        name: "Minta Csoport Állatfajta",
        selector: (row) => row.sample_group__sample_species,
        sortable: true,
    },
    {
        name: "Minta Csoport Minták Száma",
        selector: (row) => row.sample_group__sample_count,
        sortable: true,
        
    },
    {
        name: "Minta Csoport Megjegyzés Contains",
        selector: (row) => row.sample_group__comment,
        sortable: true,
        
    },
    {
        name: "Minta Batch Kezdő Száma",
        selector: (row) => row.sample_batch__starting_num,
        sortable: true,
        
    },
    {
        name: "Minta Batch Minták Száma",
        selector: (row) => row.sample_batch__sample_count,
        sortable: true,
        
    },
    {
        name: "Minta Batch Letöltések Száma",
        selector: (row) => row.sample_batch__dispense_count,
        sortable: true,
    },
    {
        name: "Minta Batch Letöltés Dátum, Idő",
        selector: (row) => row.sample_batch__reg_date_time,
        sortable: true,
        
    },
    {
        name: "Felhasználó",
        selector: (row) => row.sample_batch__reg_user,
        sortable: true,
        
    },
    {
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


  const customStyles = {
    row: (base, state) => ({
      ...base,
      backgroundColor: state.id === selectedRowId ? '#f5f5f5' : 'white',
      color: state.id === selectedRowId ? 'black' : 'black'
    }),
  };

  const customFilter = (rows, id, filterValue) => {
    return rows.filter(row => row.name.toLowerCase().startsWith(filterValue.toLowerCase()))
  }
  return (
    <div style={{ margin: "20px" }}>
       <input onChange={customFilter}/>
        <DataTable 
            autoWidth={true}
            onRowClicked={(row)=>{setSelectedRowId(row.id)}}
            customStyles={customStyles}
            pointerOnHover={true}
            customFilter={customFilter}

            

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