import { useDispatch, useSelector } from 'react-redux';
import { updateTitle } from '../../redux/slices/tableSlice';
import { StyledTitleInput } from './TitleInput.styles';

export const TitleInput = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.table.title);
  return (
    <StyledTitleInput
      type={'text'}
      value={title}
      onInput={(e) => dispatch(updateTitle({ newTitle: e.target.value }))}
      className="title"
    />
  );
};
