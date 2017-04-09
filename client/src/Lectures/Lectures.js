import React from 'react';

export default class Lectures extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    console.log('DISPATCH GET LECTURES');
  }

  render () {
    return (
      <div>
        <p>LECTURES</p>
        {/* <ClassesPanel />  */}

        <p>Should render a table of lectures for each class</p>
        {this.props.courses.map((course) => {
          console.log('course ', course);
          return (
            <div>
              <h1>{course.title}</h1>
              <h3>{course.professor} lectures:</h3>
              <div>
                {course.lectures.map((lecture) => {
                  console.log(lecture);
                  return (
                    <div>
                      <p>{lecture.subject}</p>
                    </div>
                  );
                })
}
              </div>
            </div>
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
        subject: 'Making impossible puzzles'
      }, {
        subject: 'I am a scientist'
      }, {
        subject: 'Computers will be our new brains'
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
