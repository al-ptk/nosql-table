import React from 'react';
import { useSelector } from 'react-redux';
import JsonFormatter from 'react-json-formatter';
import styled from 'styled-components';

export function JSONPreview({ showPreview, setShowPreview }) {
  const instances = useSelector((state) => state.table.instances);
  return showPreview ? (
    <ModalBackdrop>
      <ModalContainer>
        <CloseButton onClick={() => setShowPreview((bool) => !bool)}>
          X
        </CloseButton>
        <JsonFormatter json={JSON.stringify(instances)} tabWith={4} />
      </ModalContainer>
    </ModalBackdrop>
  ) : null;
}

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 10000;
  inset: 0 0 0 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  position: relative;
  overflow-y: scroll;
  width: 80vw;
  height: 80vh;
  margin: 10vh auto;
  padding: 80px 50px;
  background-color: #e5e5e5;

  div {
    background-color: #cfcfcf;
    padding: 20px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  right: 60px;
  top: 30px;
  background-color: #272727;
  color: white;
  border-radius: 50%;
  border: 2px solid #373737;
  width: 1.33em;
  height: 1.33em;
  font-size: 28px;
  font-family: sans-serif;
`;
