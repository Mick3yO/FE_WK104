/* This ReviewList component is a container for rendering a list of Review components based on the reviews prop.
 It displays a heading for the reviews section and maps through the array of reviews,
  rendering individual Review components for each review in the list.
 The index is used as a unique key for each review.*/
// Importing React library to define React components
import React from 'react';

// Importing the Review component to be used within the ReviewList component
import Review from './Review';

// Functional component ReviewList that takes props (reviews, rating)
const ReviewList = ({ reviews, rating }) => {
  // Returning a JSX element, a div that contains a list of Review components
  return (
    <div>
      <h3>Reviews:</h3>
      {reviews.map((review, index) => ( //Mapping through the 'reviews' array and rendering a Review component for each review
        <Review key={index} review={review} rating={rating} /> // Using the index as a unique key and passing review and rating as props to Review component
      ))}
    </div>
  );
};

// Exporting the ReviewList component to make it available for use in other parts of the application
export default ReviewList;
