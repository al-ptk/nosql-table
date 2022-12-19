import { useState } from 'react';
import { EditMenuAchonr } from './EditMenu';
import { FileMenuAnchor } from './FileMenu';
import { InsertMenuAnchor } from './InsertMenu';
import { StyledMenuBar } from './MenuBar.styled';
import { TitleEdit } from './TitleEdit';

export default function MenuBar() {
  const [showPreview, setShowPreview] = useState(false);

  const togglePreview = (e) => {
    if (!showPreview) {
      setShowPreview(true);
      e.target.textContent = 'Hide Preview';
    } else {
      setShowPreview(false);
      e.target.textContent = 'Show Preview';
    }
  };

  return (
    <StyledMenuBar>
      <FileMenuAnchor />
      <EditMenuAchonr />
      <InsertMenuAnchor />
      <TitleEdit />
      <button onClick={togglePreview}>Preview</button>
    </StyledMenuBar>
  );
}
