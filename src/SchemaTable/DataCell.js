import React from 'react';

export const DataCell = ({ readValue, updateValue }) => {
  let cellValue = Array.isArray(readValue()) ? `[${readValue()}]` : readValue();

  return (
    <td>
      <textarea
        value={cellValue || ''}
        onInput={(e) => updateValue(e.target.value)}
      >
        {readValue()}
      </textarea>
    </td>
  );
};