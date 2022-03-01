import { useState, useEffect } from 'react';
import { getListings } from '../APIs/simplyRETS';
import ListingCard from './listingCard';

function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function fetchListings() {
      const data = await getListings();
      setListings(data);
    }
    fetchListings();
  }, []); 

  return (
    listings ? 
      <main className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {
          listings.map(listing => {
            return <ListingCard listing={listing} key={listing.listingId} />
          })
        }
      </main>
    :
    <section>Loading...</section>
  );
}

export default Listings;