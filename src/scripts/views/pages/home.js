import { createCarItemTemplate } from "../templates/template-creator";
import Cars from "../../data/data";

const Home = {
    async render(){
        return `
            <div class="slider-container">
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="images/Slider-1.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="images/Slider-2.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="images/Slider-3.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="images/Slider-4.webp" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <section class="content-header">
                <h2>Produk Kami</h2>
            </section>
            <div class="car-list"></div>
            <div class="show-more">
                <div class="show-more-btn"><a href="#/mobil-wuling">Tampilkan Produk Lain</a></div>
            </div>
            <section class="content-header">
                <h2>Promo Kami</h2>
            </section>
            <div class="container">
                <a href="#/promo"><img src="images/Slider-1.webp" class="d-block w-100" alt="Promo"></a>
            </div>
            <div class="contact-wrap">
                <section class="content-header">
                    <h2>Hubungi Saya</h2>
                </section>
                <p class="keterangan">Sales Wuling Prima Kebon jeruk siap melayani anda dengan memberikan informasi dan program terbaik dari WULING.<p>
                <div class="profil-wrapper card-shadow">
                    <img src="images/foto.webp" alt="Foto Profil">
                    <div class="info-sales">
                        <h2>Wesley Niel</h2>
                        <p>Saya Wesley Niel siap membantu anda dalam memilih produk terbaik yang cocok dengan anda.</p>
                        <div class="social-media ">
                            <a href="#" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="#" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                        </div>
                    </>
                </div>
            </div>
            <div class="lokasi">
                <section class="content-header">
                    <h2>Lokasi Dealer</h2>
                </section>
                <p class="keterangan">Wuling Prima Kebon Jeruk, Jl. Panjang No 46 Kedoya Kebon Jeruk - Jakarta Barat<p>
                <div class="map-dealer"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6589437944567!2d106.76359811468551!3d-6.176391295528466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f719588b272f%3A0x7674efe0a1e6eae8!2sWULING%20PRIMA%20KEBON%20JERUK!5e0!3m2!1sid!2sid!4v1674615724790!5m2!1sid!2sid" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
            </div>
            `;
    },

    async afterRender() {
        const carList = document.querySelector('.car-list');
        for(let i = 0; i < 3; i++){
            carList.innerHTML += createCarItemTemplate(Cars[i]);
        }
    }
};

export default Home;