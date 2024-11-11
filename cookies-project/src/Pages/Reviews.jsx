import React, { useState, useEffect } from 'react';

const GoogleReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    const fetchReviews = async () => {
        try {
            let accessToken = sessionStorage.getItem('Token');
            if (!accessToken) {
                throw new Error('Access token is missing. Please log in.');
            }

            accessToken = JSON.parse(accessToken);

            const accountId = '4848820560940755913'; // Replace with your Google My Business account ID
            const locationId = 'ChIJHW_oLAuv3zgRKNio8oDVu3o'; // Replace with your location ID

            const response = await fetch(
                `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews`,
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`, // Ensure there's no extra space
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            setReviews(data.reviews || []);
        } catch (err) {
            setError(err.message);
            console.error('Failed to fetch reviews:', err.message);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    if (error) {
        return <div className='fs-1 m-5'>{error}</div>;
    }

    return (
        <div>
            <h2>Google Reviews</h2>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map((review) => (
                        <li key={review.reviewId}>
                            <strong>{review.reviewer.displayName}:</strong> {review.comment} ({review.starRating})
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reviews found.</p>
            )}
        </div>
    );
};

export default GoogleReviews;
