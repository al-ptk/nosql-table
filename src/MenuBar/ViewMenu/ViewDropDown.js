import { useDispatch } from 'react-redux';
import { DropDown } from '../../components/DropDown.styles';
import { JSONPreview } from '../../modals/JSONPreview/JSONPreview';
import { toggleIsVertical, setModal } from '../../redux/slices/uiKnobsSlice';

export const ViewDropDown = ({ xPos, yPos, Reference, closeMenu }) => {
  const dispatch = useDispatch();

  return (
    <DropDown.Container {...{ xPos, yPos, Reference, closeMenu }}>
      <DropDown.Button
        onClick={() => dispatch(setModal({ modal: <JSONPreview /> }))}
      >
        Show Preview
      </DropDown.Button>
      <DropDown.Button onClick={() => dispatch(toggleIsVertical())}>
        Rotate table
      </DropDown.Button>
    </DropDown.Container>
  );
};
