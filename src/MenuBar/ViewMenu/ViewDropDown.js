import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LanguageContext } from '../../App';
import { DropDown } from '../../components/DropDown.styles';
import { JSONPreview } from '../../modals/JSONPreview/JSONPreview';
import { toggleIsVertical, setModal } from '../../redux/slices/uiKnobsSlice';


export const ViewDropDown = ({ xPos, yPos, Reference, closeMenu }) => {
  const language = useContext(LanguageContext);
  const dispatch = useDispatch();
  const isTableEmpty = !Boolean(
    useSelector((state) => state.table.instances).length
  );
  return (
    <DropDown.Container {...{ xPos, yPos, Reference, closeMenu }}>
      <DropDown.Button
        disabled={isTableEmpty}
        onClick={() => dispatch(setModal({ modal: <JSONPreview /> }))}
      >
        {language['showPreview']}
      </DropDown.Button>
      <DropDown.Button
        disabled={isTableEmpty}
        onClick={() => dispatch(toggleIsVertical())}
      >
        {language['rotateTable']}
      </DropDown.Button>
    </DropDown.Container>
  );
};
