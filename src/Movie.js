// Importing React library and necessary components for defining React components
// This Movie component handles the rendering of movie details, the star rating, a list of reviews,
// and a form to add new reviews. It also provides a button to clear all reviews. The logic includes using 
//local storage to persist data and managing state with React hooks.
import React, { useState, useEffect } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

// Functional component Movie that takes props (title, image, synopsis)
const Movie = ({ title, image, synopsis }) => {
  // State hooks for managing reviews, rating, and resetRating
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [resetRating, setResetRating] = useState(false);

  // Load reviews, rating, and resetRating from local storage on component mount
  useEffect(() => {
    // Retrieve stored reviews, rating, and resetRating from local storage
    const storedReviews = JSON.parse(localStorage.getItem(`reviews-${title}`)) || [];
    const storedRating = localStorage.getItem(`rating-${title}`) || 0;
    const storedResetRating = localStorage.getItem(`resetRating-${title}`) || false;

    // Set component state with retrieved values
    setReviews(storedReviews);
    setRating(Number(storedRating));
    setResetRating(storedResetRating === 'true');
  }, [title]);

  // Function to add a review
  const addReview = (review) => {
    // Create an updated review with the current rating
    const updatedReview = { ...review, rating: localStorage.getItem(`rating-${title}`) || 0 };
    // Create an updated array of reviews
    const updatedReviews = [...reviews, updatedReview];

    // Save updated reviews, rating, and set resetRating to true in local storage
    localStorage.setItem(`reviews-${title}`, JSON.stringify(updatedReviews));
    localStorage.setItem(`rating-${title}`, updatedReview.rating);
    localStorage.setItem(`resetRating-${title}`, 'true');

    // Update component state with the updated values
    setReviews(updatedReviews);
    setResetRating(true);
  };

  // Reset resetRating state to false after a brief delay
  useEffect(() => {
    // Set a timeout to reset resetRating after 500 milliseconds
    const timeout = setTimeout(() => {
      setResetRating(false);
    }, 500);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, [resetRating]);

  // Function to clear all reviews
  const clearReviews = () => {
    // Remove reviews from local storage
    localStorage.removeItem(`reviews-${title}`);
    // Update state to clear reviews
    setReviews([]);
  };

  // JSX structure representing the Movie component
  return (
    <div>
      {/* Displaying the movie title */}
      <h2>{title}</h2>
      {/* Displaying the movie image */}
      <img src={image} alt={title} />
      {/* Displaying the movie synopsis */}
      <p>{synopsis}</p>
      {/* Rendering the Stars component to allow rating */}
      <Stars movieId={title} setRating={setRating} resetRating={resetRating} />
      {/* Rendering the ReviewList component to display reviews */}
      <ReviewList reviews={reviews} rating={rating} />
      {/* Rendering the ReviewForm component to add new reviews */}
      <ReviewForm addReview={addReview} movieId={title} setRating={setRating} />
      {/* Button to clear all reviews, triggering the clearReviews function */}
      <button onClick={clearReviews}>Clear All Reviews</button>
    </div>
  );
};

// Exporting the Movie component to make it available for use in other parts of the application
export default Movie;
