import React, {PropTypes} from 'react';
import TopPanel from './Panels/TopPanel';
import RightPanel from './Panels/RightPanel';
import LeftPanel from './Panels/LeftPanel';

export default class Lecture extends React.Component {
  constructor (props) {
    super(props);
  }
    // feed in lecture data from here to right and left panels
  componentDidMount () {
    console.log(this.props.match.params.id);
  }
  render () {
    return (
      <div className='wrapper'>
        <TopPanel />
        <RightPanel />
        <LeftPanel />
      </div>
    );
  }
}

Lecture.propTypes = {};
