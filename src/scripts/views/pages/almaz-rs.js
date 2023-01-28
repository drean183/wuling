import activatePanel from "../../utils/tab-panel-initiator";
import colorService from "../../utils/color-initiator";

const AlmazRs = {
    async render(){
        return `
        <style>
            .color[data-color="RS EX Pristine White"] {
                background-color: #FAFAFA;
            }
            .color[data-color="RS EX Dazzling Silver"] {
                background-color: #BFBFBF;
            }
            .color[data-color="RS EX Aurora Silver"] {
                background-color: #757170;
            }
            .color[data-color="Starry Black"] {
                background-color: #121218;
            }
            .color[data-color="RS EX Carnelian Red"] {
                background-color: #C00000;
            }
            .color[data-color="RS Pro Pristine White + Black"] {
                background: linear-gradient(
                    to top,
                    #121218 0%,
                    #121218 50%,
                    #FAFAFA 50%,
                    #FAFAFA 100%
                );
            }
            .color[data-color="RS Pro Dazzling Silver + Black"] {
                background: linear-gradient(
                    to top,
                    #121218 0%,
                    #121218 50%,
                    #BFBFBF 50%,
                    #BFBFBF 100%
                );
            }
            .color[data-color="RS Pro Aurora Silver + Black"] {
                background: linear-gradient(
                    to top,
                    #121218 0%,
                    #121218 50%,
                    #757170 50%,
                    #757170 100%
                );
            }
            .color[data-color="RS Pro Carnelian Red + Black"] {
                background: linear-gradient(
                    to top,
                    #121218 0%,
                    #121218 50%,
                    #C00000 50%,
                    #C00000 100%
                );
            }
        </style>
            <div class="banner">
                <img src="../images/CarPhoto/almazrs/almazrs-jumbotron.webp">
            </div>
            <div class="detail-wrap">
                <section class="content-header">
                    <h2>Pilihan Warna</h2>
                </section>
                <div class="product-color card-shadow">
                    <div class="product-photo">                    
                        <img id="product-img" src="../images/CarPhoto/almazrs/RS EX Pristine White.webp">
                    </div>
                    <div class="color-list">
                        <div class="color-name">Pristine White</div>
                        <div class="color-tab">
                            <div class="color" data-color="RS EX Pristine White"></div>
                            <div class="color" data-color="RS EX Dazzling Silver"></div>
                            <div class="color" data-color="RS EX Aurora Silver"></div>
                            <div class="color" data-color="RS EX Carnelian Red"></div>
                            <div class="color" data-color="Starry Black"></div>
                            <div class="color" data-color="RS Pro Pristine White + Black"></div>
                            <div class="color" data-color="RS Pro Dazzling Silver + Black"></div>
                            <div class="color" data-color="RS Pro Aurora Silver + Black"></div>
                            <div class="color" data-color="RS Pro Carnelian Red + Black"></div>
                        </div>
                    </div>
                </div>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Interior
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="img-galery">
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almazrs/int1.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almazrs/int2.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almazrs/int3.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almazrs/int4.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almazrs/int5.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almazrs/int6.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almazrs/int7.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almazrs/int8.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almazrs/int9.webp" class="d-block w-100" alt="...">
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Exterior
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="img-galery">
                                    <div class="galery-item">
                                            <img src="../images/CarPhoto/almazrs/ext1.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almazrs/ext2.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almazrs/ext3.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almazrs/ext4.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almazrs/ext5.webp" class="d-block w-100" alt="...">
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Safety
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="img-galery">
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almazrs/s1.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almazrs/s2.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almazrs/s3.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almazrs/s4.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almazrs/s5.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almazrs/s6.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almazrs/s7.webp" class="d-block w-100" alt="...">
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="content-header">
                    <h2>Price List</h2>
                </section>
                <table class="pricelist card-shadow">
                    <tbody>
                        <tr>
                            <th>TYPE</th>
                            <th>ON THE ROAD</th>
                        </tr>
                        <tr>
                            <td>Almaz 1.5L T Lux+ CVT - RS EX 5 seat</td>
                            <td>Rp. 402.100.000</td>
                        </tr>
                        <tr>
                            <td>Almaz 1.5 L T Lux+ CVT - RS EX 7 seat</td>
                            <td>Rp. 414.100.000</td>
                        </tr>
                        <tr>
                            <td>Almaz 1.5L T Lux+ RS PRO (Two Tone)</td>
                            <td>Rp. 439.200.000</td>
                        </tr>
                        <tr>
                            <td>Almaz RS 2.0DHT A/T (RS HYBRID)</td>
                            <td>Rp. 472.000.000</td>
                        </tr>
                    </tbody>
                </table>
                <div class="spec">
                    <section class="content-header">
                        <h2>Specification</h2>
                    </section>
                    <div id="tab-panel">
                        <div class="tab-wrap">
                            <div class="tab" id="tab-1">DIMENSION</div>
                            <div class="tab" id="tab-2">POWER TRAIN</div>
                            <div class="tab" id="tab-3">CHASSIS</div>
                        </div>
                        
                        
                        <div class="tab-content" id="content-1">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Length x Width x Height (mm)</td>
                                        <td>4,655 x 1,835 x 1,760</td>
                                    </tr>
                                    <tr>
                                        <td>Wheelbase (mm)</td>
                                        <td>2,750</td>
                                    </tr>
                                    <tr>
                                        <td>Front / rear tread (mm)</td>
                                        <td>1,544 / 1,549</td>
                                    </tr>
                                    <tr>
                                        <td>Passenger Capacity</td>
                                        <td>5 or 7</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-content" id="content-2">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Engine Type</td>
                                        <td>1,451 cc, 4 cylinders, in-line, DOHC, DVVT, with Turbocharger</td>
                                    </tr>
                                    <tr>
                                        <td>Max.Power / Max. Torque</td>
                                        <td>140 hp @5,200 rpm / 250 Nm @ 1,600 – 3,600 rpm</td>
                                    </tr>
                                    <tr>
                                        <td>Transmission</td>
                                        <td>CVT</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-content" id="content-3">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Steering Type</td>
                                        <td>Rack & pinion with Electric Power Steering (EPS)</td>
                                    </tr>
                                    <tr>
                                        <td>Suspension (Front / Rear)</td>
                                        <td>McPherson strut / Multi-link, independent</td>
                                    </tr>
                                    <tr>
                                        <td>New design sporty wheel</td>
                                        <td>215/60 R17</td>
                                    </tr>
                                    <tr>
                                        <td>Brakes (Front / Rear)</td>
                                        <td>Disc / Disc</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                </div>
                <div class="keterangan-spec"><p></p>Spesifikasi yang ditampilkan merupakan unit dengan tipe tertinggi.
                untuk informasi lebih lanjut mengenai tipe lainnya, Anda dapat menghubungi kontak yang tersedia pada website ini.</div>
                <div class="hub-sales"><a class="contact-btn" href="https://wa.me/6285156362622?text=Selamat%20Datang%20di%20Wuling%20Prima%20Kebun%20Jeruk%20Pelayanan%20dan%20Pemesanan%20Mobil%20Wuling%20se-JaBodetabek.%0ASaya%20dengan%20Wesley%20Niel.%20%0AMohon%20info%20%3A%0ANama%20%3A%0ADomisili%20ktp%20%3A%0APromo%20mobil%20yang%20ingin%20di%20tanyakan%20%3A%0A%0AApakah%20sudah%20punya%20kendaraan%20mobil%20Wuling%20sebelumnya%3F" target="_blank">Hubungi Sales</a></div>
            </div>
            `;
    },

    async afterRender() {
        const url = `../images/CarPhoto/almazrs/`;
        activatePanel();
        colorService(url);
    }
};

export default AlmazRs;
