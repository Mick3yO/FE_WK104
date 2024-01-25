// Importing React library to define React components
import React from 'react';

// Importing the MovieList component and the App.css stylesheet
import MovieList from './MovieList';
import './App.css';

// Array of movie objects with id, title, image, and synopsis properties
const movies = [
  {
    id: 1,
    title: 'The Dark Night',
    image: process.env.PUBLIC_URL + '/images/Batman.jpg',
    synopsis: 'Welcome To A World Without Rules',
  },
  {
    id: 2,
    title: 'Spider-man',
    image: process.env.PUBLIC_URL + '/images/Spiderman.jpg',
    synopsis: 'Your Neighborhood Friend',
  },
  {
    id: 3,
    title: 'Rocky',
    image: process.env.PUBLIC_URL + '/images/Rocky.jpg',
    synopsis: 'Underdog to Champion',
  },
];

// Functional component App that represents the main application
function App() {
  // JSX structure representing the App component
  return (
    <div>
      <h1>Rottentomatoes - Movie Voting and Reviews</h1>
      {/* Rendering the MovieList component and passing the movies array as a prop */}
      <MovieList movies={movies} />
    </div>
  );
  }

// Exporting the App component to make it available for use in other parts of the application
export default App;
