import React from 'react';
import { useState } from 'react';
import { StyledTable } from './SchemaTable.styled';
import currentTable from '../mockTable.json';
import { vectorizeObjectArray } from '../helperFunctions';

const vectors = vectorizeObjectArray([...currentTable]);
const tableHeadings = Object.keys(vectors);

export function SchemaTable({ table, setTable }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          {tableHeadings.map((heading, index) => (
            <HeadingCell text={heading} key={index}/>
          ))}
        </tr>
      </thead>
    </StyledTable>
  );
}

const Cell = (props) => {
  const { text } = props;
  const [active, setActive] = useState(false);

  if (active)
    return (
      <td>
        <input
          type={'text'}
          value={text}
          onBlur={() => setActive(false)}
          autoFocus={true}
        />
      </td>
    );

  return <td onClick={() => setActive(true)}>{text}</td>;
};

const HeadingCell = (props) => {
  const { text } = props;
  const [active, setActive] = useState(false);

  if (active)
    return (
      <th>
        <input
          type={'text'}
          value={text}
          onBlur={() => setActive(false)}
          autoFocus={true}
        />
      </th>
    );

  return <th onClick={() => setActive(true)}>{text}</th>;
};
