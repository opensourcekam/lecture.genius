import React from 'react';
import { Link } from 'react-router-dom';

export default class Lectures extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    console.log('DISPATCH GET LECTURES');
  }

  render () {
    return (
      <div style={{display: 'grid', 'gridTemplateColumns': '400px repeat(auto-fill, 400px)',
        'justifyContent': 'space-around'}}>
        {/* <ClassesPanel />  */}
        {this.props.courses.map((course) => {
          console.log('course ', course);
          return (
            <table>
              <tr>
                <h1>{course.title}</h1>
              </tr>
              <h3>{course.professor} lectures:</h3>
              <div>
                {course.lectures.map((lecture) => {
                  console.log(lecture);
                  return (
                    <td style={{display: 'block'}}>
                      <Link to={`/lecture/${lecture.id}`}>{lecture.subject}</Link>
                    </td>
                  );
                })
              }
              </div>
            </table>
          );
        })}
      </div>
    );
  }
}

Lectures.defaultProps = {
  courses: [
    {
      title: 'Physics 101',
      professor: 'Alan Turing',
      lectures: [{
        subject: 'Making impossible puzzles',
        id: '2390142',
        notes: 'Following these preliminary remarks, the first three chapters will therefore outline the relation of physics to the rest of the sciences, the relations of the sciences to each other, and the meaning of science, to help us develop a “feel” for the subject.You might ask why we cannot teach physics by just giving the basic laws on page one and then showing how they work in all possible circumstances, as we do in Euclidean geometry, where we state the axioms and then make all sorts of deductions. (So, not satisfied to learn physics in four years, you want to learn it in four minutes?) We cannot do it in this way for two reasons. First, we do not yet know all the basic laws: there is an expanding frontier of ignorance. Second, the correct statement of the laws of physics involves some very unfamiliar ideas which require advanced mathematics for their description. Therefore, one needs a considerable amount of preparatory training even to learn what the words mean.'
      }, {
        subject: 'I am a scientist',
        id: '3414123',
        notes: 'For example, the mass of an object never seems to change: a spinning top has the same weight as a still one. So a “law” was invented: mass is constant, independent of speed. That “law” is now found to be incorrect. Mass is found to increase with velocity, but appreciable increases require velocities near that of light. A true law is: if an object moves with a speed of less than one hundred miles a second the mass is constant to within one part in a million. In some such approximate form this is a correct law.So in practice one might think that the new law makes no significant difference. Well, yes and no. For ordinary speeds we can certainly forget it and use the simple constant-mass law as a good approximation.'
      }, {
        subject: 'Computers will be our new brains',
        id: '9043128'
      }]
    }, {
      title: 'Computer science 221',
      professor: 'Grace Hopper',
      lectures: [
        {
          subject: 'Modern programming languages'
        }, {
          subject: 'How to launch a space shuttle'
        }, {
          subject: 'compilers'
        }
      ]
    }, {
      title: 'Philosophy 447',
      professor: 'J. cole',
      lectures: [
        {
          subject: 'Born Sinner'
        }, {
          subject: '4 Your Eyez Only'
        }, {
          subject: '2014 Forest Hill Drive'
        }
      ]
    }
  ]
};
