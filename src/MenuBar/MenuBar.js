import GithubIcon from '../assets/GithubIcon';
import { EditMenuAnchor } from './EditMenu/EditMenu';
import { FileMenuAnchor } from './FileMenu/FileMenu';
import { InsertMenuAnchor } from './InsertMenu/InsertMenu';
import { TitleInput } from './TitleInput/TitleInput';
import { ViewMenuAnchor } from './ViewMenu/ViewMenu';
import { StyledMenuBar } from './MenuBar.styles';

export default function MenuBar() {
  return (
    <StyledMenuBar.Container>
      <StyledMenuBar.FlexWrapper>
        <FileMenuAnchor />
        <EditMenuAnchor />
        <InsertMenuAnchor />
        <ViewMenuAnchor />
      </StyledMenuBar.FlexWrapper>
      <TitleInput />
      <StyledMenuBar.FlexWrapper>
        <StyledMenuBar.Link
          href="https://github.com/al-ptk/json-table-editor/issues"
          target={'_blank'}
          rel="noreferrer"
        >
          Feedback
        </StyledMenuBar.Link>
        <StyledMenuBar.Link
          href="https://github.com/al-ptk/json-table-editor/"
          target={'_blank'}
          rel="noreferrer"
          aria-label="Json table editor's github page"
        >
          <GithubIcon height={'24px'} />
        </StyledMenuBar.Link>
      </StyledMenuBar.FlexWrapper>
    </StyledMenuBar.Container>
  );
}
