import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTitle } from '../../redux/slices/tableSlice';
import { StyledTitleInput } from './TitleInput.styles';

export const TitleInput = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.table.title);
  const [mobileExpanded, setMobileExpanded] = useState(false);

  useEffect(() => {
    // Expand or contract mobile menu based on state
    const newHeight = mobileExpanded ? 'fit-content' : '3em';
    document.querySelector('#MenuBar').style.height = newHeight;
  }, [mobileExpanded]);

  return (
    <StyledTitleInput.Container>
      <StyledTitleInput.Input
        type={'text'}
        value={title}
        onInput={(e) => dispatch(updateTitle({ newTitle: e.target.value }))}
        className="title"
      />
      <ExpandMobileMenuButton {...{ mobileExpanded, setMobileExpanded }} />
    </StyledTitleInput.Container>
  );
};

const ExpandMobileMenuButton = ({ mobileExpanded, setMobileExpanded }) => {
  return (
    <StyledTitleInput.MobileMenuToggler
      id="toggle-mobile-menu"
      onClick={() => {
        setMobileExpanded((b) => !b);
      }}
    >
      {mobileExpanded ? '^' : 'v'}
    </StyledTitleInput.MobileMenuToggler>
  );
};
