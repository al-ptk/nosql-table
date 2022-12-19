import { useDispatch, useSelector } from 'react-redux';
import { updateTitle } from '../app/slices/tableSlice';

export const TitleEdit = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.table.title);
  return (
    <input
      type={'text'}
      value={title}
      onInput={(e) => dispatch(updateTitle({ newTitle: e.target.value }))}
      className="title"
    />
  );
};
