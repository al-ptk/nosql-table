import GithubIcon from '../assets/GithubIcon';
import { EditMenuAchonr } from './EditMenu';
import { FileMenuAnchor } from './FileMenu';
import { InsertMenuAnchor } from './InsertMenu';
import { StyledAnchorContainer, StyledMenuBar } from './MenuBar.styled';
import { TitleEdit } from './TitleEdit';
import { ViewMenuAnchor } from './ViewMenu';

export default function MenuBar({
  setIsVertical,
  showPreview,
  setShowPreview,
}) {
  return (
    <StyledMenuBar>
      <div style={{ display: 'flex', gap: 20 }}>
        <FileMenuAnchor />
        <EditMenuAchonr />
        <InsertMenuAnchor />
        <ViewMenuAnchor {...{ setIsVertical, setShowPreview, showPreview }} />
      </div>
      <TitleEdit />
      <StyledAnchorContainer>
        <a
          href="https://github.com/al-ptk/json-table-editor/issues"
          target={'_blank'}
          rel="noreferrer"
        >
          Feedback
        </a>
        <a
          href="https://github.com/al-ptk/json-table-editor/"
          target={'_blank'}
          rel="noreferrer"
          aria-label="Json table editor's github page"
        >
          <GithubIcon height={'24px'} style={{ marginBottom: '-3px' }} />
        </a>
      </StyledAnchorContainer>
    </StyledMenuBar>
  );
}
