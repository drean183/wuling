import PromoData from "../../data/promo-data";
import { createPromoItemTemplate } from "../templates/template-creator";

const Promo = {
    async render(){
        return `
            <section class="content-header">
                <h2>Promo Tersedia</h2>
            </section>
            <div class="promo-wrap"></div>
            `;
    },
    async afterRender() {
        const container = document.querySelector('.promo-wrap');
        PromoData.forEach(promo => {
            container.innerHTML += createPromoItemTemplate(promo);
        });
    }
};

export default Promo;