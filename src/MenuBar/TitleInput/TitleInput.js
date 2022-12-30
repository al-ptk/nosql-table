import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTitle } from '../../redux/slices/tableSlice';
import { StyledTitleInput } from './TitleInput.styles';

export const TitleInput = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.table.title);
  const [mobileExpanded, setMobileExpanded] = useState(true); // it has to start at true for the toggling to work
  // @todo fix this toggling behavior to make more sense

  return (
    <div>
      <StyledTitleInput
        type={'text'}
        value={title}
        onInput={(e) => dispatch(updateTitle({ newTitle: e.target.value }))}
        className="title"
      />
      <button
        id="toggle-mobile-menu"
        onClick={() => {
          setMobileExpanded((b) => !b);
          const newHeight = mobileExpanded ? 'fit-content' : '3em';
          document.querySelector('#MenuBar').style.height = newHeight;
        }}
      >
        v
      </button>
    </div>
  );
};
