import DataTable from "react-data-table-component"
import { useState, useEffect, useContext } from "react"
import { SimpleStoreContext } from '../../context/context'


export const TableApp = () => {
    const {orderNumber, status, /*comment,sampleBatchStartingNum, sampleBatchSampleCount, sampleBatchDispenseCount, simpleBatchRegDatTime, simpleBatchComment, simpleBatchRegUser, groupFormReferenceNum, groupFormSampleSpecies, groupFormSampleCount, groupFormComment*/} = useContext(SimpleStoreContext);

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const columns = [
    {
      name: "User ID",
      selector: (row) => row.userId,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Completed",
      selector: (row) => (row.completed ? "Yes" : "No"),
    },
  ]

  useEffect(() => {
    fetchTableData()
    console.log(data)
  }, [])

  async function fetchTableData() {
    setLoading(true)
    const URL = "https://jsonplaceholder.typicode.com/todos"
    const response = await fetch(URL)

    const users = await response.json()
    console.log(users)
    setData(users)
    setLoading(false)
  }

  return (
    <div style={{ margin: "20px" }}>
      <DataTable
        title="Data"
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
      />
    </div>
  )
}