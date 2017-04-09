import React, {PropTypes} from 'react';

export default class LeftPanel extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    console.log(this);
  }

  render () {
    return (
      <section className='left-panel'>
        {(window.location.pathname.split('/')[2] === '2390142') ?
          <div>
            <h1>{this.props.lecture.subject}</h1> <p>{this.props.lecture.notes}</p>
          </div> : <h1>No notes for this lecture yet!</h1>}
      </section>
    );
  }
}

LeftPanel.defaultProps = {
  title: 'Physics 101',
  professor: 'Alan Turing',
  lecture: {
    subject: 'Making impossible puzzles',
    id: '2390142',
    notes: 'Following these preliminary remarks, the first three chapters will therefore outline the relation of physics to the rest of the sciences, the relations of the sciences to each other, and the meaning of science, to help us develop a “feel” for the subject.You might ask why we cannot teach physics by just giving the basic laws on page one and then showing how they work in all possible circumstances, as we do in Euclidean geometry, where we state the axioms and then make all sorts of deductions. (So, not satisfied to learn physics in four years, you want to learn it in four minutes?) We cannot do it in this way for two reasons. First, we do not yet know all the basic laws: there is an expanding frontier of ignorance. Second, the correct statement of the laws of physics involves some very unfamiliar ideas which require advanced mathematics for their description. Therefore, one needs a considerable amount of preparatory training even to learn what the words mean.'
  }
};
