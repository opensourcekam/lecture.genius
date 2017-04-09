import React, {PropTypes} from 'react';
import TopPanel from './Panels/TopPanel';
import LeftPanel from './Panels/LeftPanel';

export default class NewLecture extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <TopPanel />
        <LeftPanel subject='Atoms in Motion 1–1 Introduction' />
      </div>
    );
  }
}

NewLecture.propTypes = {};
