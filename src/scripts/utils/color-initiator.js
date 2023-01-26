const colorService = (url) => {
    const colorTabs = document.getElementsByClassName('color');
        const productImg = document.getElementById('product-img');
        const colorName = document.querySelector('.color-name')

        for (let i = 0; i < colorTabs.length; i++) {
            colorTabs[i].addEventListener('click', function() {
                productImg.style.opacity = "0";
                colorName.style.opacity = "0";
                setTimeout(() => {
                    const color = this.getAttribute('data-color');
                    productImg.src = `${url}${color}.webp`;
                    colorName.innerHTML = color;
                    productImg.style.opacity = "1";
                    colorName.style.opacity = "1";
                }, 200);
            });
        }
}

export default colorService;