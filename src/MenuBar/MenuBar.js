// @todo @delete
// import GithubIcon from '../assets/svgs/GithubIcon';
import { EditMenuAnchor } from './EditMenu/EditMenu';
import { FileMenuAnchor } from './FileMenu/FileMenu';
import { InsertMenuAnchor } from './InsertMenu/InsertMenu';
import { TitleInput } from './TitleInput/TitleInput';
import { ViewMenuAnchor } from './ViewMenu/ViewMenu';
import { StyledMenuBar } from './MenuBar.styles';
import { DropDownAnchor } from '../components/DropDown.styles';
import { useDispatch } from 'react-redux';
import { setModal } from '../redux/slices/uiKnobsSlice';
import CreditsModal from '../modals/CreditsModal';
import { useContext } from 'react';
import { LanguageContext } from '../App';
import ManualModal from '../modals/ManualModal';
import LoginArea from './LoginArea';

export default function MenuBar() {
  const dispatch = useDispatch();
  const language = useContext(LanguageContext);

  return (
    <StyledMenuBar.Container id="MenuBar">
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
            dispatch(setModal({ modal: <ManualModal /> }));
          }}
        >
          {'Manual'}
        </DropDownAnchor.Button>
        <DropDownAnchor.Button
          onClick={() => {
            dispatch(setModal({ modal: <CreditsModal /> }));
          }}
        >
          {language['credits']}
        </DropDownAnchor.Button>
        <StyledMenuBar.Link
          href="https://github.com/al-ptk/json-table-editor/issues"
          target={'_blank'}
          rel="noreferrer"
        >
          {language['feedback']}
        </StyledMenuBar.Link>
        <LoginArea />
      </StyledMenuBar.FlexWrapper>
    </StyledMenuBar.Container>
  );
}
