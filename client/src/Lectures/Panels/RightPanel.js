import React, {PropTypes} from 'react';

export default class RightPanel extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <section className='right-panel'>
        <div className='arrow-left' />
        <h2>"Euclidean geometry"</h2>
        <p>A mathematical system attributed to the Alexandrian Greek mathematician Euclid, which he described in his textbook on geometry: the Elements. Euclids method consists in assuming a small set of intuitively appealing axioms, and deducing many other propositions (theorems) from these.</p>
        <textarea className='annotation-comment-input' placeholder='Comment Annotation' />
      </section>
    );
  }
}

RightPanel.propTypes = {};
