import React, {PropTypes} from 'react';

export default class LeftPanel extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <section className='left-panel'>
        <div>
          <h2>Atoms in Motion 1–1 Introduction</h2>
          <p>
            <mark>Following these preliminary remarks, the first three chapters will therefore outline the relation of physics to the rest of the sciences, the relations of the sciences to each other, and the meaning of science, to help us develop a “feel” for the subject.</mark>
                        You might ask why we cannot teach physics by just giving the basic laws on page one and then showing how they work in all possible circumstances, as we do in
                        <mark className='selected'>Euclidean geometry</mark>, where we state the axioms and then make all sorts of deductions. (So, not satisfied to learn physics in four years, you want to learn it in four minutes?) We cannot do it in this way for two reasons. First, we do not yet know all the basic laws: there is an expanding frontier of ignorance. Second, the correct statement of the laws of physics involves some very unfamiliar ideas which require advanced mathematics for their description. Therefore, one needs a considerable amount of preparatory training even to learn what the words mean. No, it is not possible to do it that way. We can only do it piece by piece. Each piece, or part, of the whole of nature is always merely an approximation to the complete truth, or the complete truth so far as we know it. In fact, everything we know is only some kind of approximation, because we know that we do not know all the laws as yet. Therefore, things must be learned only to be unlearned again or, more likely, to be corrected. The principle of science, the definition, almost, is the following: The test of all knowledge is experiment. Experiment is the sole judge of scientific “truth.” But what is the source of knowledge? Where do the laws that are to be tested come from? Experiment, itself, helps to produce these laws, in the sense that it gives us hints. But also needed is imagination to create from these hints the great generalizations—to guess at the wonderful, simple, but very strange patterns beneath them all, and then to experiment to check again whether we have made the right guess.
                        <mark>This imagining process is so difficult that there is a division of labor in physics: there are theoretical physicists who imagine, deduce, and guess at new laws, but do not experiment; and then there are experimental physicists who experiment, imagine, deduce, and guess.</mark>
                        We said that the laws of nature are approximate: that we first find the “wrong” ones, and then we find the “right” ones. Now, how can an experiment be “wrong”? First, in a trivial way: if something is wrong with the apparatus that you did not notice. But these things are easily fixed, and checked back and forth. So without snatching at such minor things, how can the results of an experiment be wrong? Only by being inaccurate. For example, the mass of an object never seems to change: a spinning top has the same weight as a still one. So a “law” was invented: mass is constant, independent of speed. That “law” is now found to be incorrect. Mass is found to increase with velocity, but appreciable increases require velocities near that of light. A true law is: if an object moves with a speed of less than one hundred miles a second the mass is constant to within one part in a million. In some such approximate form this is a correct law.
                        <mark>So in practice one might think that the new law makes no significant difference. Well, yes and no. For ordinary speeds we can certainly forget it and use the simple constant-mass law as a good approximation.</mark>
                        But for high speeds we are wrong, and the higher the speed, the more wrong we are. Finally, and most interesting, philosophically we are completely wrong with the approximate law. Our entire picture of the world has to be altered even though the mass changes only by a little bit. This is a very peculiar thing about the philosophy, or the ideas, behind the laws. Even a very small effect sometimes requires profound changes in our ideas. Now, what should we teach first? Should we teach the correct but unfamiliar law with its strange and difficult conceptual ideas, for example the theory of relativity, four-dimensional space-time, and so on? Or should we first teach the simple “constant-mass” law, which is only approximate, but does not involve such difficult ideas?
                        <mark>The first is more exciting, more wonderful, and more fun, but the second is easier to get at first, and is a first step to a real understanding of the first idea.</mark>
          </p>
        </div>
      </section>
    );
  }
}

LeftPanel.propTypes = {};
