import React, {PropTypes} from 'react';
import TopPanel from './Panels/TopPanel';
import LeftPanel from './Panels/LeftPanel';

export default class Lecture extends React.Component {
  constructor (props) {
    super(props);
  }
    // feed in lecture data from here to right and left panels
  componentDidMount () {
  }

  render () {
    return (
      <div className='wrapper'>
        {/* <TopPanel /> */}
        <LeftPanel subject='Atoms in Motion 1–1 Introduction' />
      </div>
    );
  }
}

Lecture.propTypes = {};
