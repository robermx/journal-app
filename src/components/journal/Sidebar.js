import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { starLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(starLogout());
  };

  const handleAddNew = () => {
    dispatch(startNewNote());
  };

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3>{name}</h3>
        <button onClick={handleLogout} className="btn">
          <i className="fas fa-power-off fa-2x"></i>
        </button>
      </div>
      <div onClick={handleAddNew} className="journal__new-entry mb-1">
        <i className="fas fa-calendar-plus fa-3x"></i>
        <span> New Entry</span>
      </div>
      <JournalEntries />
    </aside>
  );
};
