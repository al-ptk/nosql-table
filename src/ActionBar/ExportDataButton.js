import React, { useContext, useRef } from 'react';
import AppStateContext from '../App';

export function ExportDataButton() {
  const { title, exportTable } = useContext(AppStateContext);
  const linkRef = useRef(null);

  const downloadTable = () => {
    const tableFile = exportTable();
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
