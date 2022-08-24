const TableData = ({ rows, headings, updateCell, addRow }) => {
  return rows.map((row, rowIndex) => (
    <TableRow
      key={rowIndex}
      rowIndex={rowIndex}
      rowData={row}
      updateCell={updateCell}
      order={headings}
    />
  ));
};

const TableCell = ({ text, updateCell }) => {
  return (
    <td>
      <input type={'text'} value={text || ''} onInput={updateCell} />
    </td>
  );
};

const TableRow = ({ rowIndex, rowData, updateCell, order }) => {
  return (
    <tr key={rowIndex}>
      {order.map((key, cellIndex) => (
        <TableCell
          key={cellIndex}
          text={rowData[key] || ''}
          updateCell={(event) => updateCell(event, key, rowIndex)}
        />
      ))}
    </tr>
  );
};

export const AddRowButton = ({ addRow }) => {
  return (
    <tr>
      <td>
        <button onClick={addRow}>Add Row</button>
      </td>
    </tr>
  );
};

export default TableData;
