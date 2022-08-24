const ColumnHeading = ({ text, updateHeading }) => {
  return (
    <th>
      <input type={'text'} value={text} onInput={updateHeading} />
    </th>
  );
};

const HeadingRow = ({ headings, updateHeading, addColumn }) => {
  return (
    <tr>
      {headings.map((heading, index) => (
        <ColumnHeading
          key={index}
          text={heading}
          updateHeading={(event) => updateHeading(event, index)}
        />
      ))}
      <th>
        <button onClick={addColumn}>Add Heading</button>
      </th>
    </tr>
  );
};

export default HeadingRow;
