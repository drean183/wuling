import activatePanel from "../../utils/tab-panel-initiator";
import colorService from "../../utils/color-initiator";

const Almaz = {
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
                <img src="../images/CarPhoto/almaz/almaz-jumbotron.png">
            </div>
            <div class="detail-wrap">
                <section class="content-header">
                    <h2>Pilihan Warna</h2>
                </section>
                <div class="product-color card-shadow">
                    <div class="product-photo">                    
                        <img id="product-img" src="../images/CarPhoto/almaz/Pristine White.webp">
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
                                            <img src="../images/CarPhoto/almaz/int1.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almaz/int2.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almaz/int3.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almaz/int4.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almaz/int5.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almaz/int6.webp" class="d-block w-100" alt="...">
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
                                            <img src="../images/CarPhoto/almaz/ext1.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almaz/ext2.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almaz/ext3.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almaz/ext4.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almaz/ext5.webp" class="d-block w-100" alt="...">
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
                                            <img src="../images/CarPhoto/almaz/safe1.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almaz/safe2.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almaz/safe3.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almaz/safe4.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/almaz/safe5.webp" class="d-block w-100" alt="...">
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
                            <td>Almaz 1.5 S+ T MT (Smart Enjoy MT)</td>
                            <td>Rp. 303.500.000</td>
                        </tr>
                        <tr>
                            <td>Almaz 1.5 S+ T CVT (Smart Enjoy CVT)</td>
                            <td>Rp. 321.500.000</td>
                        </tr>
                        <tr>
                            <td>Almaz 1.5L T Lux CVT (Exclusive 5 seat)</td>
                            <td>Rp. 375.100.000</td>
                        </tr>
                        <tr>
                            <td>Almaz 1.5L T Lux+ CVT (Exclusive 7 seat)</td>
                            <td>Rp. 385.800.000</td>
                        </tr>
                    </tbody>
                </table>
                <div class="spec">
                    <section class="content-header">
                        <h2>Specification</h2>
                    </section>
                    <div id="tab-panel">
                        <div class="tab-wrap">
                            <div class="tab" id="tab-1">SMART VOICE COMMAND</div>
                            <div class="tab" id="tab-2">TECHNOLOGY POWERTRAIN</div>
                            <div class="tab" id="tab-3">DIMENSION</div>
                            <div class="tab" id="tab-4">SAFETY & SECURITY</div>
                            <div class="tab" id="tab-5">COMFORT</div>
                            <div class="tab" id="tab-6">MULTIMEDIA</div>
                        </div>
                        
                        
                        <div class="tab-content" id="content-1">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Window (Driver Side)</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>AC, Application, Phone, Music, Time & Date, Audio Volume, Radio</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Sunroof</td>
                                        <td>Yes</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-content" id="content-2">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Engine</td>
                                        <td>1,451cc , DOHC, DVVT, with Turbocharger</td>
                                    </tr>
                                    <tr>
                                        <td>Max.Power / Max. Torque</td>
                                        <td>140HP @ 5,200 rpm / 250 Nm @(1,800 – 3,600 rpm)</td>
                                    </tr>
                                    <tr>
                                        <td>Transmission</td>
                                        <td>CVT with 8-Speed Manual Simulation</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-content" id="content-3">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Length</td>
                                        <td>4,655 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Width</td>
                                        <td>1,835 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Height</td>
                                        <td>1,760 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Wheelbase</td>
                                        <td>2,750 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Front Tread</td>
                                        <td>1,554 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Rear Tread</td>
                                        <td>1,549 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Fuel Tank Capacity</td>
                                        <td>52 L</td>
                                    </tr>
                                    <tr>
                                        <td>Passenger Capacity</td>
                                        <td>5 or 7</td>
                                    </tr>
                                    <tr>
                                        <td>Tire Size</td>
                                        <td>215 / 60 R17</td>
                                    </tr>
                                    <tr>
                                        <td>Wheel</td>
                                        <td>Alloy With Machining</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-content" id="content-4">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Airbags</td>
                                        <td>Front & Side</td>
                                    </tr>
                                    <tr>
                                        <td>Seatbelt Reminder (Driver & Front Passenger)</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>ISOFIX, Child-Proof Rear Door Lock</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Emergency Stop Signal</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Tire Pressure Monitoring System</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Front & Rear Disc Brakes</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>ABS & EBD, Brake Assist, Hill Hold Control</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Electronic Stability Control, Traction Control System</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Immobilizer, Alarm, Auto Door Lock</td>
                                        <td>Yes</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-content" id="content-5">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Power Window</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Tilt Steering, Steering Switch</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Electric Parking Brake(EPB) with Auto Vehicle Holding (EVH)</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Auto AC</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Panoramic Sunroof</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Keyless Entry & Engine Start/Stop Button</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Electric Seat Adjuster(Driver)	</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Cruise Control</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Parking Sensors</td>
                                        <td>Front & Rear</td>
                                    </tr>
                                    <tr>
                                        <td>Electric Mirror</td>
                                        <td>Adjustable & Foldable</td>
                                    </tr>
                                    <tr>
                                        <td>Leather-Wrapped Steering Wheel</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Seat Material</td>
                                        <td>Semi Leather</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-content" id="content-6">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Speakers</td>
                                        <td>9 Speakers by Infinity®</td>
                                    </tr>
                                    <tr>
                                        <td>Parking Camera</td>
                                        <td>360° Camera</td>
                                    </tr>
                                    <tr>
                                        <td>Wuling Link, AM/FM Radio, USB, AUX-in, Bluetooth</td>
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
        const url = `../images/CarPhoto/almaz/`;
        activatePanel();
        colorService(url);

        $('#interior').carousel();
        $('#exterior').carousel();
    }
};

export default Almaz;
