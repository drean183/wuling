import { createCarItemTemplate } from "../templates/template-creator";
import Cars from "../../data/data";

const MobilWuling = {
    async render(){
        return `
            <section class="content-header">
                <h2>Mobil Wuling</h2>
            </section>
            <div class="car-list"></div>
            `;
    },

    async afterRender() {
        const carList = document.querySelector('.car-list');
        Cars.forEach(car => {
            carList.innerHTML += createCarItemTemplate(car);
        });
    }
};

export default MobilWuling;
