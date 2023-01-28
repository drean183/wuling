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
  createPromoItemTemplate
};
