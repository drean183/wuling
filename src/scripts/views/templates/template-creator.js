const createCarDetailTemplate = (car) => `
  <h2 class="movie__title">${movie.title}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.poster_path}" alt="${movie.title}" />
  <div class="movie__info">
  <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${movie.tagline}</p>
    <h4>Release Date</h4>
    <p>${movie.release_date}</p>
    <h4>Duration</h4>
    <p>${movie.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${movie.vote_average}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${movie.overview}</p>
  </div>
`;

const createCarItemTemplate = (car) => `
    <div class="car-item card-shadow">
      <img src="../../images/CarPhoto/${car.img}" class="card-img-top" alt="${car.nama}">
      <div class="info">
        <h5 class="car-name">${car.nama}</h5>
        <p class="desc">${car.jumlahType} Type Pilihan</p>
        <a href="#/${car.url}" class="detail-btn">Detail</a>
      </div>
    </div>
`;

const createPromoItemTemplate = (promo) =>`
    <div class="promo-item card-shadow">
      <div class="promo-header">
        <h2 class="promo-title">${promo.title}</h2>
        <p class="published-date">${promo.published}</p>
      </div>
      <div class="promo-img">
        <img src="../../images/Promo/${promo.img}" alt="${promo.title}">
      </div>
    </div>
`;

export {
  createCarItemTemplate,
  createCarDetailTemplate,
  createPromoItemTemplate
};
