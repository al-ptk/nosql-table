import GithubIcon from '../assets/svgs/GithubIcon';
import { EditMenuAnchor } from './EditMenu/EditMenu';
import { FileMenuAnchor } from './FileMenu/FileMenu';
import { InsertMenuAnchor } from './InsertMenu/InsertMenu';
import { TitleInput } from './TitleInput/TitleInput';
import { ViewMenuAnchor } from './ViewMenu/ViewMenu';
import { StyledMenuBar } from './MenuBar.styles';
import { DropDownAnchor } from '../components/DropDown.styles';
import { useDispatch } from 'react-redux';
import { setModal } from '../redux/slices/uiKnobsSlice';

export default function MenuBar() {
  const dispatch = useDispatch();

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
        <DropDownAnchor.Button
          onClick={() => {
            dispatch(setModal({}));
          }}
        >
          Credits
        </DropDownAnchor.Button>
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
