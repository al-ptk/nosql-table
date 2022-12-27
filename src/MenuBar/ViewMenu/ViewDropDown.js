import { DropDown } from '../../components/DropDown.styles';

export const ViewDropDown = ({
  xPos,
  yPos,
  Reference,
  closeMenu,
  setIsVertical,
  setShowPreview,
}) => {
  return (
    <DropDown.Container {...{ xPos, yPos, Reference, closeMenu }}>
      <DropDown.Button onClick={() => setShowPreview((bool) => !bool)}>
        Show Preview
      </DropDown.Button>
      <DropDown.Button onClick={() => setIsVertical((bool) => !bool)}>
        Rotate table
      </DropDown.Button>
    </DropDown.Container>
  );
};
