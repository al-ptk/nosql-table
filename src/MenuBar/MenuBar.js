import { EditMenuAchonr } from './EditMenu';
import { FileMenuAnchor } from './FileMenu';
import { InsertMenuAnchor } from './InsertMenu';
import { StyledMenuBar } from './MenuBar.styled';
import { TitleEdit } from './TitleEdit';

export default function MenuBar({
  setIsVertical,
  showPreview,
  setShowPreview,
}) {
  return (
    <StyledMenuBar>
      <FileMenuAnchor />
      <EditMenuAchonr />
      <InsertMenuAnchor />
      <TitleEdit />
      <button onClick={() => setShowPreview((bool) => !bool)}>Preview</button>
      <button onClick={() => setIsVertical((bool) => !bool)}>
        Toggle Orientation
      </button>
      <button onClick={() => alert('Not implemented yet.')}>
        Report a bug
      </button>
    </StyledMenuBar>
  );
}
