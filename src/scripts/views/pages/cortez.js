import activatePanel from "../../utils/tab-panel-initiator";
import colorService from "../../utils/color-initiator";

const Cortez = {
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
        </style>
            <div class="banner">
                <img src="../images/CarPhoto/cortez/cortez-jumbotron.png">
            </div>
            <div class="detail-wrap">
                <section class="content-header">
                    <h2>Pilihan Warna</h2>
                </section>
                <div class="product-color card-shadow">
                    <div class="product-photo">                    
                        <img id="product-img" src="../images/CarPhoto/cortez/Pristine White.webp">
                    </div>
                    <div class="color-list">
                        <div class="color-name">Pristine White</div>
                        <div class="color-tab">
                            <div class="color" data-color="Pristine White"></div>
                            <div class="color" data-color="Dazzling Silver"></div>
                            <div class="color" data-color="Aurora Silver"></div>
                            <div class="color" data-color="Starry Black"></div>
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
                                            <img src="../images/CarPhoto/cortez/int1.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/cortez/int2.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/cortez/int3.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/cortez/int4.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/cortez/int5.webp" class="d-block w-100" alt="...">
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
                                            <img src="../images/CarPhoto/cortez/ext1.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/cortez/ext2.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/cortez/ext3.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/cortez/ext4.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/cortez/ext5.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/cortez/ext6.webp" class="d-block w-100" alt="...">
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
                                            <img src="../images/CarPhoto/cortez/s1.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/cortez/s2.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/cortez/s3.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/cortez/s4.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/cortez/s5.webp" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="galery-item">
                                            <img src="../images/CarPhoto/cortez/s6.webp" class="d-block w-100" alt="...">
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
                            <td>Cortez 1.5S T MT</td>
                            <td>Rp. 254.500.000</td>
                        </tr>
                        <tr>
                            <td>Cortez 1.5L T Lux+ CVT</td>
                            <td>Rp. 325.650.000</td>
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
                                        <td>4780 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Width</td>
                                        <td>1816 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Height</td>
                                        <td>1,755 mm (with roof rail)</td>
                                    </tr>
                                    <tr>
                                        <td>Wheelbase</td>
                                        <td>2750 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Front Tread</td>
                                        <td>1546 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Rear Tread</td>
                                        <td>1541 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Fuel Tank Capacity</td>
                                        <td>52 L</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-content" id="content-2">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <td>Engine Type</td>
                                        <td>Turbocharged 4 cylinders, in-line, DOHC, DVVT</td>
                                    </tr>
                                    <tr>
                                        <td>Displacement (Cc)</td>
                                        <td>1,451 cc</td>
                                    </tr>
                                    <tr>
                                        <td>Bore x Stroke</td>
                                        <td>73.8 x 84.7 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Max. Power</td>
                                        <td>140 / 5,200 HP/rpm</td>
                                    </tr>
                                    <tr>
                                        <td>Max. Torque</td>
                                        <td>250 / (1,600 – 3,600) Nm/rpm</td>
                                    </tr>
                                    <tr>
                                        <td>Fuel</td>
                                        <td>Gasoline</td>
                                    </tr>
                                    <tr>
                                        <td>Emission Standard</td>
                                        <td>Euro 4</td>
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
                                        <td>6 Speed Manual</td>
                                        <td>CVT</td>
                                    </tr>
                                    <tr>
                                        <td rowspan="7">Gear Ratio</td>
                                        <td>1st</td>
                                        <td>3,727</td>
                                        <td rowspan="5">2.631 ~ 0.378</td>
                                    </tr>
                                    <tr>
                                        <td>2nd</td>
                                        <td>2,211</td>
                                    </tr>
                                    <tr>
                                        <td>3rd</td>
                                        <td>1,414</td>
                                    </tr>
                                    <tr>
                                        <td>4th</td>
                                        <td>1,061</td>
                                    </tr>
                                    <tr>
                                        <td>5th</td>
                                        <td>0,814</td>
                                    </tr>
                                    <tr>
                                        <td>6th</td>
                                        <td>0,723</td>
                                    </tr>
                                    <tr>
                                        <td>Reverse</td>
                                        <td>3,545</td>
                                        <td>1,754</td>
                                    </tr>
                                    <tr>
                                        <td>Final Gear Ratio</td>
                                        <td></td>
                                        <td>4,176</td>
                                        <td>5,511</td>
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
                                        <td>Front Wheel Drive</td>
                                    </tr>
                                    <tr>
                                        <td>Steering Type</td>
                                        <td></td>
                                        <td>Rack & pinion, Electric Power Steering (EPS)</td>
                                    </tr>
                                    <tr>
                                        <td rowspan="2">Suspension</td>
                                        <td>Front</td>
                                        <td>McPherson strut</td>
                                    </tr>
                                    <tr>
                                        <td>Rear</td>
                                        <td>Semi-independent</td>
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
                                        <td>205/55 R16</td>
                                    </tr>
                                    <tr>
                                        <td>Wheel</td>
                                        <td></td>
                                        <td>Alloy</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="keterangan-spec"><p></p>Spesifikasi yang ditampilkan merupakan unit dengan tipe tertinggi.
                untuk informasi lebih lanjut mengenai tipe lainnya, Anda dapat menghubungi kontak yang tersedia pada website ini.</div>
                <div class="hub-sales"><a class="contact-btn" href="#" target="_blank">Hubungi Sales</a></div>
            </div>
            `;
    },

    async afterRender() {
        const url = `../images/CarPhoto/cortez/`;
        activatePanel();
        colorService(url);
    }
};

export default Cortez;
