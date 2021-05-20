import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title, id } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDeleting(id));
  };

  return (
    <div className="notes__main">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title mb-1"
          name="title"
          value={title}
          onChange={handleInputChange}
        />
        <div className="d-flex justify-between align-start">
          <textarea
            placeholder="In this moment..."
            className="notes__textarea mb-1"
            name="body"
            value={body}
            onChange={handleInputChange}
          ></textarea>

          <div className="notes__img ms-1">
            <img
              src={note.url ? note.url : './assets/images/img_default.jpg'}
              alt={title}
            />
          </div>
        </div>
        <div>
          <button onClick={handleDelete} className="btn btn-red">
            <i className="fas fa-trash-alt"></i> Delete Note
          </button>
        </div>
      </div>
    </div>
  );
};
