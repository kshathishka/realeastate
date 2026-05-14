const listings = [
  {
    title: 'Maple Grove Family House',
    location: 'Springfield',
    beds: 4,
    baths: 3,
    area: '2,450 sq ft',
    price: '$460,000',
    image: 'assets/images/home-1.svg'
  },
  {
    title: 'Skyline View Apartment',
    location: 'Downtown',
    beds: 2,
    baths: 2,
    area: '1,140 sq ft',
    price: '$325,000',
    image: 'assets/images/home-2.svg'
  },
  {
    title: 'Lakeside Modern Villa',
    location: 'Willow Lake',
    beds: 5,
    baths: 4,
    area: '3,200 sq ft',
    price: '$780,000',
    image: 'assets/images/home-3.svg'
  }
];

const listingGrid = document.getElementById('listing-grid');

listingGrid.innerHTML = listings
  .map(
    (listing) => `
      <article class="listing-card">
        <img src="${listing.image}" alt="${listing.title}" />
        <div class="listing-card-content">
          <h4>${listing.title}</h4>
          <p>${listing.location}</p>
          <p>${listing.beds} beds · ${listing.baths} baths · ${listing.area}</p>
          <p class="price">${listing.price}</p>
        </div>
      </article>
    `
  )
  .join('');
