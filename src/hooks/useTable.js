import { useState } from "react"

const emptyTable = [
    { 'property 0': '', 'property 1': '' },
    { 'property 0': '', 'property 1': '' },
  ]

export default function useTableRows (tableStream = emptyTable) {
  const [tableRows, setTableRows] = useState(tableStream)

  return {
    tableRows, setTableRows
  }
}