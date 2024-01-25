// Importing React library to define React components
import React from 'react';

// Importing the Movie component to be used within the MovieList component
import Movie from './Movie';

// Functional component MovieList that takes a prop 'movies'
const MovieList = ({ movies }) => {
  // Returning a JSX element, a div that contains a list of Movie components
  return (
    <div> 
       {/* Mapping through the 'movies' array and rendering a Movie component for each movie */}
      {movies.map((movie) => (
        // Using the movie.id as a unique key and spreading the movie object as props to Movie component
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
};

// Exporting the MovieList component to make it available for use in other parts of the application
export default MovieList;
