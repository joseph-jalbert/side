import moment from 'moment';
import abbrState from '../utils/stateNameToAbbreviation';


function PropertyDetails({listing}) {
  const { property } = listing;
  return (
    <section className="max-w-[315px] mt-1">
      <article className="text-md font-semibold">
        {property.bedrooms} BR | {property.bathsFull + property.bathsHalf/2} Bath | {property.area} Sq Ft
      </article>
      <article className="text-lg font-bold">
        ${listing.listPrice.toLocaleString()}
      </article>
      <article className="text-sm mt-1">{listing.address.streetNumber} {listing.address.streetName}, {listing.address.city}, {abbrState(listing.address.state, 'abbr')}</article>
      <article className="text-xs">Listed: {moment(listing.listDate).format('M/D/YY')}</article>
    </section>
  );
}

export default PropertyDetails;