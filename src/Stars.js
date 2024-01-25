/* This Stars component handles the rendering of star ratings. I'm using local storage to persist the rating,
 updates the local rating based on changes in the resetRating prop, 
 and calls the setRating function if provided when a star is clicked. 
The logic ensures that the star rating reflects changes based on user interactions and local storage.*/
// Importing React library and necessary hooks for defining React components
import React, { useState, useEffect } from 'react';

// Functional component Stars that takes props (movieId, setRating, resetRating)
const Stars = ({ movieId, setRating, resetRating }) => {
  // State hook for managing the local rating based on movieId
  const [rating, setLocalRating] = useState(localStorage.getItem(`rating-${movieId}`) || 0);

  // useEffect hook to update local rating when resetRating changes
  useEffect(() => {
    // Update local rating only if resetRating is false
    if (!resetRating) {
      setLocalRating(localStorage.getItem(`rating-${movieId}`) || 0);
    }
  }, [resetRating, movieId]);

  // Function to handle clicking on a star
  const handleStarClick = (star) => {
    // Update local rating, save it to local storage, and call setRating if provided
    setLocalRating(star);
    localStorage.setItem(`rating-${movieId}`, star);
    setRating && setRating(star);
  };

  // JSX structure representing the Stars component
  return (
    <div>
      {/* Mapping through star values (1 to 5) and rendering stars with click event */}
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} onClick={() => handleStarClick(star)}>
          {/* Displaying a filled star if star value is less than or equal to the current rating, otherwise an empty star */}
          {star <= rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

// Exporting the Stars component to make it available for use in other parts of the application
export default Stars;
