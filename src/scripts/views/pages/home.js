import { createCarItemTemplate } from "../templates/template-creator";
import Cars from "../../data/data";

const Home = {
    async render(){
        return `
            <div class="container">
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
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
                </div>
            </div>
            <section class="content-header">
                <h2>Produk Kami</h2>
            </section>
            <div class="car-list"></div>
            <div class="show-more">
                <div class="show-more-btn"><a href="#/mobil-wuling">Tampilkan Produk Lain</a></div>
            </div>
            <div class="contact-wrap">
                <section class="content-header">
                    <h2>Hubungi Saya</h2>
                </section>
                <p class="keterangan">Sales Wuling Prima Kebon jeruk siap melayani anda dengan memberikan informasi dan program terbaik dari WULING.<p>
                <div class="profil-wrapper card-shadow">
                    <img src="images/foto.png" alt="Foto Profil">
                    <div class="info-sales">
                        <h2>Wesley Niel</h2>
                        <p>Saya Wesley Niel siap membantu anda dalam memilih produk terbaik yang cocok dengan anda.</p>
                        <div class="social-media ">
                            <a href="https://wa.me/6285156362622?text=Selamat%20Datang%20di%20Wuling%20Prima%20Kebun%20Jeruk%20Pelayanan%20dan%20Pemesanan%20Mobil%20Wuling%20se-JaBodetabek.%0ASaya%20dengan%20Wesley%20Niel.%20%0AMohon%20info%20%3A%0ANama%20%3A%0ADomisili%20ktp%20%3A%0APromo%20mobil%20yang%20ingin%20di%20tanyakan%20%3A%0A%0AApakah%20sudah%20punya%20kendaraan%20mobil%20Wuling%20sebelumnya%3F" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="https://www.facebook.com/profile.php?id=100080313706073&mibextid=ZbWKwL" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
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