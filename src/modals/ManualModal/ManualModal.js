import { useContext } from 'react';
import { Modal } from '../Modal.styles';
import { LanguageContext } from '../../App';
import { useDispatch } from 'react-redux';
import { setModal } from '../../redux/slices/uiKnobsSlice';
import { StyledManual } from './StyledManual';

export function ManualModal() {
  const dispatch = useDispatch();
  const language = useContext(LanguageContext);

  return (
    <Modal.Backdrop>
      <Modal.Container cssOverride={StyledManual.ContainerOverride}>
        <Modal.CloseButton onClick={() => dispatch(setModal({}))}>
          <Modal.CloseIcon />
        </Modal.CloseButton>
        <Modal.Title margin={'0 0 50px 0'} fontSize={36}>
          Features
        </Modal.Title>
        <StyledManual.DetailsContainer>
          <StyledManual.Details>
            <StyledManual.Summary>
              {language['tutKeyFeatsTitle']}
            </StyledManual.Summary>
            <ManualItem text={language['kfExpandCell']} />
            <ManualItem text={language['kfActionsByType']} />
            <ManualItem text={language['kfMassInsert']} />
            <ManualItem text={language['kfShowPreview']} />
          </StyledManual.Details>
          <StyledManual.Details>
            <StyledManual.Summary>
              {language['tutImportTitle']}
            </StyledManual.Summary>
            <ManualItem text={language['tutImportAnswer']} />
          </StyledManual.Details>
          <StyledManual.Details>
            <StyledManual.Summary>
              {language['tutExportTitle']}
            </StyledManual.Summary>
            <ManualItem text={language['tutExportAnswer']} />
          </StyledManual.Details>
        </StyledManual.DetailsContainer>
      </Modal.Container>
    </Modal.Backdrop>
  );
}

function ManualItem({ text }) {
  // parse text
  const parsedText = text.split(/:|\n/);

  return (
    <StyledManual.Item>
      <span style={{ fontWeight: 'bold' }}>{parsedText[0] + ':'}</span>
      {parsedText.slice(1).map((piece) => (
        <p>{piece}</p>
      ))}
    </StyledManual.Item>
  );
}
