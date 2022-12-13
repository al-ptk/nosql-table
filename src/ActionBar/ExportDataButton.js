import React, { useRef } from 'react';

export function ExportDataButton({
  tableRows,
  rowNumber,
  headingOrder,
  title,
}) {
  const linkRef = useRef(null);

  const downloadTable = () => {
    const json = JSON.stringify(tableRows);
    const file = new File([json], `${title}.json`, {
      type: 'application/json',
    });
    linkRef.current.href = URL.createObjectURL(file);
    linkRef.current.click();
  };

  return (
    <span>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        target={'_blank'}
        ref={linkRef}
        style={{ display: 'none' }}
        download={`${title}.json`}
      >
        &nbsp;
      </a>
      <button onClick={downloadTable} className="btn btn-primary">
        Export Data
      </button>
    </span>
  );
}
