import React from 'react';

export const DataCell = ({ readValue, updateValue, ...props }) => {
  let cellValue = Array.isArray(readValue()) ? `[${readValue()}]` : readValue();

  return (
    <td {...props}>
      <textarea
        value={cellValue || ''}
        onInput={(e) => {
          updateValue(e.target.value);
        }}
      ></textarea>
    </td>
  );
};
