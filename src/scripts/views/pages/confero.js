import activatePanel from "../../utils/tab-panel-initiator";
import colorService from "../../utils/color-initiator";

const Confero = {
    async render(){
        return `
        <style>
            .color[data-color="Pristine White"] {
                background-color: #FAFAFA;
            }
            .color[data-color="Dazzling Silver"] {
                background-color: #BFBFBF;
            }
            .color[data-color="Aurora Silver"] {
                background-color: #757170;
            }
            .color[data-color="Starry Black"] {
                background-color: #121218;
            }
            .color[data-color="Carnelian Red"] {
                background-color: #C00000;
            }
        </style>
            <div class="banner">
                <img src="../images/CarPhoto/confero/confero-jumbotron.webp">
            </div>
            <div class="detail-wrap">
                <section class="content-header">
                    <h2>Pilihan Warna</h2>
                </section>
                <div class="product-color card-shadow">
                    <div class="product-photo">                    
                        <img id="product-img" src="../images/CarPhoto/confero/Pristine White.webp">
                    </div>
                    <div class="color-list">
                        <div class="color-name">Pristine White</div>
                        <div class="color-tab">
                            <div class="color" data-color="Pristine White"></div>
                            <div class="color" data-color="Dazzling Silver"></div>
                            <div class="color" data-color="Aurora Silver"></div>
                            <div class="color" data-color="Starry Black"></div>
                            <div class="color" data-color="Carnelian Red"></div>
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
                            <td>New Confero 1.5 DB MY MT</td>
                            <td>Rp. 181.300.000</td>
                        </tr>
                        <tr>
                            <td>New Confero S 1.5C MY Lux MT</td>
                            <td>Rp. 203.700.000</td>
                        </tr>
                        <tr>
                            <td>New Confero S 1.5L MY Lux+ MT</td>
                            <td>Rp. 218.850.000</td>
                        </tr>
                        <tr>
                            <td>New Confero S 1.5 L AC Lux+ MT</td>
                            <td>Rp. 228.300.000</td>
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
                            <div class="tab" id="tab-2">ENGINE</div>
                            <div class="tab" id="tab-3">TRANSMISSION</div>
                            <div class="tab" id="tab-4">CHASSIS</div>
                        </div>
                        
                        
                        <div class="tab-content" id="content-1">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Length</td>
                                        <td>4,530 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Width</td>
                                        <td>1,691 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Height</td>
                                        <td>1,730 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Wheelbase</td>
                                        <td>2,720 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Front Tread</td>
                                        <td>1,430 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Rear Tread</td>
                                        <td>1,450 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Fuel Tank Capacity</td>
                                        <td>42 L</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-content" id="content-2">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Engine Type</td>
                                        <td>4 cylinders, in-line, DOHC</td>
                                    </tr>
                                    <tr>
                                        <td>Displacement (Cc)</td>
                                        <td>1,485 cc</td>
                                    </tr>
                                    <tr>
                                        <td>Max. Power</td>
                                        <td>107/5,800 (PS/rpm)</td>
                                    </tr>
                                    <tr>
                                        <td>Max. Torque</td>
                                        <td>142/(3,800~4,400) Nm/rpm</td>
                                    </tr>
                                    <tr>
                                        <td>Fuel</td>
                                        <td>Gasoline</td>
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
                                        <td>6-Speed with Auto Clutchl</td>
                                    </tr>
                                    <tr>
                                        <td rowspan="6">Gear Ratio</td>
                                        <td>1st</td>
                                        <td>3.729</td>
                                    </tr>
                                    <tr>
                                        <td>2nd</td>
                                        <td>2.085</td>
                                    </tr>
                                    <tr>
                                        <td>3rd</td>
                                        <td>1.351</td>
                                    </tr>
                                    <tr>
                                        <td>4th</td>
                                        <td>1.000</td>
                                    </tr>
                                    <tr>
                                        <td>5th</td>
                                        <td>0.799</td>
                                    </tr>
                                    <tr>
                                        <td>Reverse</td>
                                        <td>3.744</td>
                                    </tr>
                                    <tr>
                                        <td>Final Gear Ratio</td>
                                        <td></td>
                                        <td>4.889</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-content" id="content-4">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Drive Type</td>
                                        <td></td>
                                        <td>Rear Wheel Drive</td>
                                    </tr>
                                    <tr>
                                        <td>Steering Type</td>
                                        <td></td>
                                        <td>Rack & Pinion, Electric Power Steering (EPS)</td>
                                    </tr>
                                    <tr>
                                        <td>Tilt Steering</td>
                                        <td></td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td rowspan="2">Suspension</td>
                                        <td>Front</td>
                                        <td>McPherson Strut, Independent Suspension</td>
                                    </tr>
                                    <tr>
                                        <td>Rear</td>
                                        <td>Coil Spring, Semi-Independent</td>
                                    </tr>
                                    <tr>
                                        <td rowspan="2">Brakes</td>
                                        <td>Front</td>
                                        <td>Disc</td>
                                    </tr>
                                    <tr>
                                        <td>Rear</td>
                                        <td>Disc</td>
                                    </tr>
                                    <tr>
                                        <td>Tires</td>
                                        <td></td>
                                        <td>195/60 R15</td>
                                    </tr>
                                    <tr>
                                        <td>Wheel</td>
                                        <td></td>
                                        <td>Alloy wheel with Machining</td>
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
        const url = `../images/CarPhoto/confero/`;
        activatePanel();
        colorService(url);
    }
};

export default Confero;
