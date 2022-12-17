import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeExportFile } from '../app/slices/tableSlice';

export function ExportDataButton() {
  const title = useSelector((state) => state.table.title);
  const dispatch = useDispatch();
  const linkRef = useRef(null);

  const downloadTable = async () => {
    const tableFile = await dispatch(makeExportFile());
    if (!tableFile) {
      alert('Something went wrong');
      return;
    }
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
