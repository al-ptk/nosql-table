import React from 'react';
import { LanguageContext } from '../../App';
import { Modal } from '../Modal.styles';
import { setModal } from '../../redux/slices/uiKnobsSlice';
import { useDispatch, useSelector } from 'react-redux';

export function AllProjects() {
  const language = React.useContext(LanguageContext);
  const dispatch = useDispatch();
  const [projectList] = useProjectsList();
  console.log(projectList);

  return (
    <Modal.Backdrop>
      <Modal.Container>
        <Modal.CloseButton
          aria-label={language['closeModal']}
          onClick={() => {
            dispatch(setModal({}));
          }}
        >
          <Modal.CloseIcon />
        </Modal.CloseButton>
        {projectList &&
          projectList.map((elem) => (
            <p>
              {elem.title} — {new Date(elem.createdAt).toLocaleDateString()}
            </p>
          ))}
      </Modal.Container>
    </Modal.Backdrop>
  );
}

function useProjectsList() {
  const user = useSelector((state) => state.uiKnobs.user);
  console.log(user.token);

  function getAllProjects() {
    fetch('https://jte-backend.glitch.me/projects', {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setProjectList(data));
  }

  const [projectList, setProjectList] = React.useState([]);

  React.useEffect(() => {
    getAllProjects();
  }, []);

  return [projectList];
}
