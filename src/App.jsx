import React, { useState } from 'react';
import './App.css';
import RepitionExercise from './Components/RepetitionExercise/index.jsx';
import DurationExercise from './Components/DurationExercise/index.jsx';

function App() {
  const [chosenExercise, setChosenExercise] = useState(null);

  const exercises = [
    { name: 'Push-ups', type: 'repition' },
    { name: 'Bicycling', type: 'duration' },
    { name: 'Jumping-Jacks', type: 'repition' },
    { name: 'Running', type: 'duration' },
    { name: 'Sit-ups', type: 'repition' },
  ];

  return (
    <div className="App">
      <h1>Exercise Tracker</h1>
      {!chosenExercise ? (
        <div>
          <h2>Select an Exercise:</h2>
          <div className="exercise-buttons">
            {exercises.map((exercise) => (
              <button
                key={exercise.name}
                onClick={() => setChosenExercise(exercise)}
              >
                {exercise.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>{chosenExercise.name}</h2>
          {chosenExercise.type === 'repition' ? (
            <RepitionExercise name={chosenExercise.name} />
          ) : (
            <DurationExercise name={chosenExercise.name} />
          )}
          <button onClick={() => setChosenExercise(null)}>Return</button>
        </div>
      )}
    </div>
  );
}

export default App;