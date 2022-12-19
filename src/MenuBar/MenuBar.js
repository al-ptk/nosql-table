import { useState } from 'react';
import { StyledMenuBar } from './MenuBar.styled';
import { FileButton } from './FileButton';
import { EditButton } from './EditButton';
import { InsertButton } from './InsertButton';
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
      <FileButton />
      <EditButton />
      <InsertButton />
      <TitleEdit />
      <button onClick={togglePreview}>Preview</button>
    </StyledMenuBar>
  );
}
