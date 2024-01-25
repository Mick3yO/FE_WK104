/* This Review component is responsible for displaying a user review text and associated stars.
 It checks if review and review.text exist before rendering the review content.
  The stars are displayed either from the current review or using the overall rating.
 */
// Importing React library to define React components
import React from 'react';

// Functional component Review that takes props (review, rating)
const Review = ({ review, rating }) => {
  // Returning a JSX element, a div that displays user review text and associated stars
  return (
    <div>
      {/* Checking if review and review.text exist before rendering */}
      {review && review.text && (
        <>
          {/* Displaying user review text */}
          <p>User Review: {review.text}</p>
          {/* Displaying stars either from the current review or using the overall rating */}
          <p>Stars: {review.rating || rating}</p>
        </>
      )}
    </div>
  );
};

// Exporting the Review component to make it available for use in other parts of the application
export default Review;
