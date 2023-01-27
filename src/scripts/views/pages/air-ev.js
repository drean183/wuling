import activatePanel from "../../utils/tab-panel-initiator";
import colorService from "../../utils/color-initiator";

const AirEv = {
    async render(){
        return `
        <style>
        .color[data-color="White"] {
            background-color: white;
        }
        .color[data-color="Galaxy Blue"] {
            background-color: #CFD9EA;
        }
        .color[data-color="Peach Pink"] {
            background-color: #EFD7CC;
        }
        .color[data-color="Lemon Yellow"] {
            background-color: #FFD35D;
        }
        .color[data-color="Avocado Green"] {
            background-color: #ACC4B4;
        }
        </style>
            <div class="banner">
                <img src="../images/CarPhoto/airev/airev-jumbotron.png">
            </div>
            <div class="detail-wrap">
                <section class="content-header">
                    <h2>Pilihan Warna</h2>
                </section>
                <div class="product-color card-shadow">
                    <div class="product-photo">                    
                        <img id="product-img" src="../images/CarPhoto/airev/White.webp">
                    </div>
                    <div class="color-list">
                        <div class="color-name">White</div>
                        <div class="color-tab">
                            <div class="color" data-color="White"></div>
                            <div class="color" data-color="Galaxy Blue"></div>
                            <div class="color" data-color="Peach Pink"></div>
                            <div class="color" data-color="Lemon Yellow"></div>
                            <div class="color" data-color="Avocado Green"></div>
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
                            <td>AIR EV STANDARD RANGE 200km</td>
                            <td>Rp. 243.000.000</td>
                        </tr>
                        <tr>
                            <td>AIR EV LONG RANGE 300km</td>
                            <td>Rp. 299.500.000</td>
                        </tr>
                        <tr>
                            <td>AIR EV LONG RANGE WITH CHARGING DEVICE</td>
                            <td>Rp. 315.500.000</td>
                        </tr>
                    </tbody>
                </table>
                <div class="spec">
                    <section class="content-header">
                        <h2>Specification</h2>
                    </section>
                    <div id="tab-panel">
                        <div class="tab-wrap">
                            <div class="tab" id="tab-1">STEERING</div>
                            <div class="tab" id="tab-2">WHEEL & TYRE</div>
                            <div class="tab" id="tab-3">SUSPENSION & BRAKES</div>
                            <div class="tab" id="tab-4">TRANSMISSION</div>
                            <div class="tab" id="tab-5">CAPACITY</div>
                            <div class="tab" id="tab-6">PERFORMANCE</div>
                            <div class="tab" id="tab-7">ENGINE DETAILS</div>
                        </div>
                        
                        
                        <div class="tab-content" id="content-1">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Steering Gear Type</td>
                                        <td>Rack & Pinion</td>
                                    </tr>
                                    <tr>
                                        <td>Steering Column</td>
                                        <td>Adjustable</td>
                                    </tr>
                                    <tr>
                                        <td>Adjustable Steering Column</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Steering Type</td>
                                        <td>Power</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-content" id="content-2">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Tyre Type</td>
                                        <td>Radial</td>
                                    </tr>
                                    <tr>
                                        <td>Tyre Size</td>
                                        <td>145/70 R12</td>
                                    </tr>
                                    <tr>
                                        <td>Alloy Wheel Size</td>
                                        <td>12 Inch</td>
                                    </tr>
                                    <tr>
                                        <td>Wheel Size</td>
                                        <td>R12</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-content" id="content-3">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Front Suspension</td>
                                        <td>MacPherson Strut</td>
                                    </tr>
                                    <tr>
                                        <td>Rear Suspension</td>
                                        <td>Multi-Link</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-content" id="content-4">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Transmission Type</td>
                                        <td>Automatic</td>
                                    </tr>
                                    <tr>
                                        <td>Gear Box</td>
                                        <td>Single Speed</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-content" id="content-5">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Seating Capacity</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>Height</td>
                                        <td>1665 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Wheel Base</td>
                                        <td>1960 mm</td>
                                    </tr>
                                    <tr>
                                        <td>No Of Doors</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>Length</td>
                                        <td>3061 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Width</td>
                                        <td>1520 mm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-content" id="content-6">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Torque</td>
                                        <td>110 Nm</td>
                                    </tr>
                                    <tr>
                                        <td>Power</td>
                                        <td>40</td>
                                    </tr>
                                    <tr>
                                        <td>Fuel Type</td>
                                        <td>Electric</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-content" id="content-7">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Battery Type</td>
                                        <td>Lithium-ion</td>
                                    </tr>
                                    <tr>
                                        <td>Battery Capacity</td>
                                        <td>26.5 kWh</td>
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
        const url = `../images/CarPhoto/airev/`;
        activatePanel();
        colorService(url);
    }
};

export default AirEv;
