import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

export function ExportDataButton() {
  const title = useSelector((state) => state.table.title);
  const instances = useSelector((state) => state.table.instances);
  const schema = useSelector((state) => state.table.schema);
  
  const linkRef = useRef(null);

  const downloadTable = async () => {
    const JTEstream = JSON.stringify({
      title,
      schema,
      instances,
    });
    const tableFile = new File([JTEstream], `${title}.jte`, {
      type: 'application/json',
    });
    linkRef.current.href = URL.createObjectURL(tableFile);
    linkRef.current.click();
  };

  return (
    <span>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        aria-hidden
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
