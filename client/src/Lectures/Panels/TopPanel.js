import React, {PropTypes} from 'react';

export default class TopPanel extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <section className='top-panel'>
        <h1>Phisics 304 lecture 6</h1>
        <h3>STYLE ME :)</h3>
      </section>
    );
  }
}

TopPanel.propTypes = {};
