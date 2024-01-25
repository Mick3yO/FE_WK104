/* This ReviewForm component provides a form with a textarea for entering review text and a button to submit the review. 
I'm using local storage to retrieve the current rating,
 and if provided, it resets the rating to 0 after submitting the review.*/
// Importing React library and necessary hooks for defining React components
import React, { useState } from 'react';

// Functional component ReviewForm that takes props (addReview, movieId, setRating)
const ReviewForm = ({ addReview, movieId, setRating }) => {
  // State hook for managing the review text input
  const [reviewText, setReviewText] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    // Preventing the default form submission behavior
    e.preventDefault();

    // Retrieving the rating from local storage or defaulting to 0
    const rating = localStorage.getItem(`rating-${movieId}`) || 0;
    
    // Creating a review object with the entered text and the retrieved rating
    const review = { text: reviewText, rating: rating };
    
    // Calling the addReview function with the created review
    addReview(review);

    // Resetting the review text input
    setReviewText('');

    // Resetting the rating to 0 if setRating function is provided
    setRating && setRating(0);
  };

  // JSX structure for the ReviewForm component
  return (
    <form onSubmit={handleSubmit}>
      {/* Textarea input for entering the review text */}
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Write your review..."
      />
      {/* Button to submit the review */}
      <button type="submit">Submit Review</button>
    </form>
  );
};

// Exporting the ReviewForm component to make it available for use in other parts of the application
export default ReviewForm;

