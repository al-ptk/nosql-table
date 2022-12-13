import React from 'react';

export const DataCell = ({ readValue, updateValue, coords }) => {
  let cellValue = Array.isArray(readValue()) ? `[${readValue()}]` : readValue();

  return (
    <td data-row={coords[0]} data-column={coords[1]}>
      <textarea
        value={cellValue || ''}
        onInput={(e) => updateValue(e.target.value)}
      ></textarea>
    </td>
  );
};
