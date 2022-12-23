import GithubIcon from '../assets/GithubIcon';
import { EditMenuAchonr } from './EditMenu/EditMenu';
import { FileMenuAnchor } from './FileMenu/FileMenu';
import { InsertMenuAnchor } from './InsertMenu/InsertMenu';
import { TitleInput } from './TitleInput/TitleInput';
import { ViewMenuAnchor } from './ViewMenu/ViewMenu';
import { StyledAnchorContainer, StyledMenuBar } from './MenuBar.styled';

export default function MenuBar({ setIsVertical, setShowPreview }) {
  return (
    <StyledMenuBar>
      <div style={{ display: 'flex', gap: 20 }}>
        <FileMenuAnchor />
        <EditMenuAchonr />
        <InsertMenuAnchor />
        <ViewMenuAnchor {...{ setIsVertical, setShowPreview }} />
      </div>
      <TitleInput />
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
