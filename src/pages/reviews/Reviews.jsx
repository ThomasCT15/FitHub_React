  import React, { useState, useEffect } from 'react';
  import './Reviews.css';
  import Header from "../../components/Header";
  import Footer from "../../components/Footer";

  const ReviewSection = () => {
    const [reviews, setReviews] = useState(() => {
      const stored = localStorage.getItem('reviews');
      return stored ? JSON.parse(stored) : [];
    });
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const [photo, setPhoto] = useState(null);
    const [average, setAverage] = useState(0);

    useEffect(() => {
      updateAverage(reviews);
    }, [reviews]);

    const handleStarClick = (value) => {
      setRating(value);
    };

    const handleSubmit = () => {
      if (!name.trim() || !comment.trim() || rating === 0) {
        alert('Por favor completa todos los campos y selecciona una calificación.');
        return;
      }

      if (photo) {
        const reader = new FileReader();
        reader.onload = (e) => {
          saveReview(e.target.result);
        };
        reader.readAsDataURL(photo);
      } else {
        saveReview(null);
      }
    };

    const saveReview = (photoData) => {
      const newReview = {
        id: Date.now(),
        name,
        comment,
        rating,
        photo: photoData,
        date: new Date().toLocaleDateString('es-CO'),
      };

      const updatedReviews = [newReview, ...reviews];
      setReviews(updatedReviews);
      localStorage.setItem('reviews', JSON.stringify(updatedReviews));

      setName('');
      setComment('');
      setRating(0);
      setPhoto(null);
    };

    const deleteReview = (id) => {
      if (window.confirm('¿Deseas eliminar esta reseña?')) {
        const updated = reviews.filter((r) => r.id !== id);
        setReviews(updated);
        localStorage.setItem('reviews', JSON.stringify(updated));
      }
    };

    const updateAverage = (reviewsList) => {
      if (reviewsList.length === 0) {
        setAverage(0);
        return;
      }
      const avg =
        reviewsList.reduce((sum, r) => sum + Number(r.rating), 0) / reviewsList.length;
      setAverage(avg.toFixed(1));
    };

    return (
      <>| 
        <Header />
      <section className="review-section">
        <h2>Reseñas de Nuestros Clientes 💬</h2>

        <div className="average-rating">⭐ Promedio: {average} / 5.0</div>

        <div className="review-form">
          <input
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Escribe tu opinión..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="stars" id="stars">
            {[1, 2, 3, 4, 5].map((val) => (
              <span
                key={val}
                data-value={val}
                className={val <= rating ? 'active' : ''}
                onClick={() => handleStarClick(val)}
              >
                ★
              </span>
            ))}
          </div>

          <label htmlFor="photo" className="photo-label">
            📸 Subir foto (opcional)
          </label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
          />

          <button id="submit" className="reseña" onClick={handleSubmit}>
            Enviar reseña
          </button>
        </div>

        <div className="reviews-container">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <img
                src={
                  review.photo ||
                  'https://cdn-icons-png.flaticon.com/512/149/149071.png'
                }
                className="review-photo"
                alt={`foto de ${review.name}`}
              />
              <div className="review-content">
                <p className="review-name">{review.name}</p>
                <p className="review-stars">
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </p>
                <p className="review-comment">{review.comment}</p>
                <p className="review-date">{review.date}</p>
              </div>
              <button
                className="delete-btn"
                title="Eliminar"
                onClick={() => deleteReview(review.id)}
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
      </section>
        <Footer />
      </>
    );
  };

  export default ReviewSection;