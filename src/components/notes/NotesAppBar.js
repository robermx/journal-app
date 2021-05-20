import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { startSavingNotes, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
  moment.locale('mx');
  const noteDate = moment(undefined);
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(startSavingNotes(active));
  };

  const handlePicture = () => {
    document.getElementById('fileSelector').click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) dispatch(startUploading(file));
  };

  return (
    <div className="notes__main-bar">
      <span>{noteDate.format('MMM Do YYYY')}</span>
      <div>
        <input
          id="fileSelector"
          type="file"
          name="file"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <button onClick={handlePicture} className="btn btn-red">
          <i className="fas fa-image"></i>
        </button>
        <button onClick={handleSave} className="btn btn-red ms-1">
          <i className="fas fa-save"></i>
        </button>
      </div>
    </div>
  );
};
