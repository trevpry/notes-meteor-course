import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

import {Notes} from '../api/notes';

export const NoteListHeader = (props) => {
  return (
    <div>
      <button onClick={() => props.meteorCall('notes.insert')}>Create Note</button>
    </div>
  );
};

export default createContainer(() => {
  return {
    meteorCall: Meteor.call
  }
}, NoteListHeader);