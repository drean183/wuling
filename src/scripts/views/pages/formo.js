import activatePanel from "../../utils/tab-panel-initiator";
import colorService from "../../utils/color-initiator";

const Formo = {
    async render(){
        return `
        <style>
            .color[data-color="White"] {
                background-color: #FAFAFA;
            }
            .color[data-color="Silver"] {
                background-color: #BFBFBF;
            }
            .color[data-color="Black"] {
                background-color: #121218;
            }
        </style>
            <div class="banner">
                <img src="../images/CarPhoto/formo/formo-jumbotron.webp">
            </div>
            <div class="detail-wrap">
                <section class="content-header">
                    <h2>Pilihan Warna</h2>
                </section>
                <div class="product-color card-shadow">
                    <div class="product-photo">                    
                        <img id="product-img" src="../images/CarPhoto/formo/White.webp">
                    </div>
                    <div class="color-list">
                        <div class="color-name">Pristine White</div>
                        <div class="color-tab">
                            <div class="color" data-color="White"></div>
                            <div class="color" data-color="Silver"></div>
                            <div class="color" data-color="Black"></div>
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
                                            <img src="../images/CarPhoto/formo/int1.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/formo/int2.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/formo/int3.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/formo/int4.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/formo/int5.webp" class="d-block w-100" alt="...">
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
                                            <img src="../images/CarPhoto/formo/ext1.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/formo/ext2.webp" class="d-block w-100" alt="...">
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
                                            <img src="../images/CarPhoto/formo/s1.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/formo/s2.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/formo/s3.webp" class="d-block w-100" alt="...">
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
                            <td>Formo Max Standard</td>
                            <td>Rp. 162.000.000</td>
                        </tr>
                        <tr>
                            <td>Formo Max AC</td>
                            <td>Rp. 170.000.000</td>
                        </tr>
                    </tbody>
                </table>
                <div class="spec">
                    <section class="content-header">
                        <h2>Specification</h2>
                    </section>
                    <div id="tab-panel">
                        <div class="tab-wrap">
                            <div class="tab" id="tab-1">DIMENSION AND CHASSIS</div>
                            <div class="tab" id="tab-2">ENGINE</div>
                            <div class="tab" id="tab-3">TRANSMISSION</div>
                            <div class="tab" id="tab-4">SAFETY & SECURITY</div>
                            <div class="tab" id="tab-5">CONVENIENCE</div>
                        </div>
                        <div class="tab-content" id="content-1">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Total length x width x height (mm)</td>
                                        <td>5,135 x 1,725 x 1,740</td>
                                    </tr>
                                    <tr>
                                        <td>Wheelbase (mm)</td>
                                        <td>3.160</td>
                                    </tr>
                                    <tr>
                                        <td>Cargo length x width x height</td>
                                        <td>2,695 x 1,725 x 390</td>
                                    </tr>
                                    <tr>
                                        <td>Tire size</td>
                                        <td>175/75 R14C</td>
                                    </tr>
                                    <tr>
                                        <td>Suspension</td>
                                        <td>McPherson strut (Front) + Leaf spring (Rear)</td>
                                    </tr>
                                    <tr>
                                        <td>Brakes</td>
                                        <td>Disc (Front) + Drum (Rear)</td>
                                    </tr>
                                    <tr>
                                        <td>Fuel tank capacity (L)</td>
                                        <td>42</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-content" id="content-2">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Engine layout</td>
                                        <td>4 cylinders, in-line, DOHC</td>
                                    </tr>
                                    <tr>
                                        <td>Capacity (cc)</td>
                                        <td>1.485</td>
                                    </tr>
                                    <tr>
                                        <td>Bore x stroke (mm)</td>
                                        <td>74.7 x 84.7</td>
                                    </tr>
                                    <tr>
                                        <td>Maximum power (hp)</td>
                                        <td>98 @5,800 rpm</td>
                                    </tr>
                                    <tr>
                                        <td>Maximum torque (Nm)</td>
                                        <td>140 @3,400-4,400 rpm</td>
                                    </tr>
                                    <tr>
                                        <td>Fuel distribution</td>
                                        <td>Multipoint injection</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-content" id="content-3">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Type</td>
                                        <td></td>
                                        <td>Manual, 5 speed</td>
                                    </tr>
                                    <tr>
                                        <td rowspan="7">Gear Ratio</td>
                                        <td>1st</td>
                                        <td>3,729</td>
                                    </tr>
                                    <tr>
                                        <td>2nd</td>
                                        <td>2,085</td>
                                    </tr>
                                    <tr>
                                        <td>3rd</td>
                                        <td>1,479</td>
                                    </tr>
                                    <tr>
                                        <td>4th</td>
                                        <td>1,000</td>
                                    </tr>
                                    <tr>
                                        <td>5th</td>
                                        <td>0,799</td>
                                    </tr>
                                    <tr>
                                        <td>Reverse</td>
                                        <td>3,744</td>
                                    </tr>
                                    <tr>
                                        <td>Final</td>
                                        <td>5,125</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-content" id="content-4">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>ABS+EBD</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Retractable seatbelt</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Driver seatbelt reminder</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Anti-theft alarm</td>
                                        <td>Yes</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-content" id="content-5">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Electric Power Steering</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Foldable remote key	</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Air conditioner</td>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <td>Adjustable headrest</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>AM/FM radio + USB</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Power windows</td>
                                        <td>Yes</td>
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
        const url = `../images/CarPhoto/formo/`;
        activatePanel();
        colorService(url);
    }
};

export default Formo;
