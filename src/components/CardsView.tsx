import React, { useState, useEffect } from "react";
import type { CardItem } from "../types/types";
import "./cardsView.css";

interface CardsViewProps {
  cards: CardItem[];
}

const CardSkeleton = () => (
  <div className="card skeleton">
    <div className="skeleton-image"></div>
    <div className="skeleton-content">
      <div className="skeleton-title"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text short"></div>
    </div>
  </div>
);

// CardView component
const CardView = ({ title, description, image }: CardItem) => (
  <div className="card">
    <div className="image" style={{ backgroundImage: `url(${image})` }}>
      <img
        src="/assets/game-info-frame-a.webp"
        alt=""
        role="presentation"
        loading="lazy"
      />
    </div>
    <div className="title">{title}</div>
    <div className="description">{description}</div>
  </div>
);

const CardsView = ({ cards }: CardsViewProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for skeleton
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="cards-container">
        {Array.from({ length: cards.length }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <CardView
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default CardsView;
