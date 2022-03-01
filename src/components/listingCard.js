import { useState, useEffect } from 'react';
import heartFill from '../assets/heart-fill.svg';
import heartStroke from '../assets/heart-stroke.svg';
import PropertyDetails from './propertyDetails';


function useFavorite(listingId) {
  const favoritesKey = 'favorites';
  const savedFavorites = JSON.parse(localStorage.getItem(favoritesKey));

  const [favoritesCollection, setFavoritesCollection] = useState({...savedFavorites});
  const [isFavorite, setFavorite] = useState(savedFavorites && savedFavorites[listingId])

  function toggleFavorite(listingId) {
    const favoritesToSave = {
        ...favoritesCollection,
    };
  
    if (favoritesCollection[listingId]) {
      favoritesToSave[listingId] = false;
      setFavoritesCollection({favoritesCollection});
      setFavorite(false);
    } else {
      favoritesToSave[listingId] = true;
      setFavoritesCollection(favoritesToSave);
      setFavorite(true);
    }
    
  }
  useEffect(() => {
      localStorage.setItem(favoritesKey, JSON.stringify(favoritesCollection));
  }, [favoritesCollection])

  return [isFavorite, toggleFavorite]
}

function ListingCard({listing}) {
  const { photos, listingId } = listing;
  const src = photos[0];

  const [isFavorite, toggleFavorite] = useFavorite(listingId);

  return (
    <section key={listingId} className="mx-auto my-0">
      <button onClick={() => toggleFavorite(listingId)} style={{ position: 'relative', left: '89%', top: '8%' }}>
        <img src={isFavorite ? heartFill : heartStroke} alt="toggle favorite"/>
      </button>
      <img className="w-[315px] h-[280px] object-cover" src={src} alt="house" />
      <PropertyDetails listing={listing} />
    </section>
  );
}

export default ListingCard;