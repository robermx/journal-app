import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({ id, date, title, body, url }) => {
  const noteDate = moment(date);
  const dispatch = useDispatch();

  const handleEntry = () => {
    dispatch(activeNote(id, { date, title, body, url }));
  };

  return (
    <div
      onClick={handleEntry}
      className="journal__entry pointer animate__animated animate__fadeInLeft"
    >
      <div
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: url
            ? `url(${url})`
            : 'url(./assets/images/img_default.jpg)',
        }}
        className="journal__entry-picture"
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">
          {noteDate.format('dddd, MMMM Do YYYY')}
        </p>
      </div>
    </div>
  );
};
