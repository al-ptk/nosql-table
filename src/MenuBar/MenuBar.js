import GithubIcon from '../assets/GithubIcon';
import { EditMenuAchonr } from './EditMenu';
import { FileMenuAnchor } from './FileMenu';
import { InsertMenuAnchor } from './InsertMenu';
import { StyledMenuBar } from './MenuBar.styled';
import { TitleEdit } from './TitleEdit';
import { ViewMenuAnchor } from './ViewMenu';

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
      <ViewMenuAnchor {...{ setIsVertical, setShowPreview, showPreview }} />
      <TitleEdit />
      <a
        href="https://github.com/al-ptk/json-table-editor/issues"
        target={'_blank'}
        rel="noreferrer"
      >
        Bugs & Suggestions
      </a>
      <a
        href="https://github.com/al-ptk/json-table-editor/"
        target={'_blank'}
        rel="noreferrer"
      >
        <GithubIcon height={'24px'} style={{ marginBottom: '-3px' }} />
      </a>
    </StyledMenuBar>
  );
}
