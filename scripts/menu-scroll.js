const menuScroll = () => {
    const container = document.querySelectorAll(".container");

    document.addEventListener("click", e => {
        if (e.target.matches(".hamburguer-link")) {
            container.forEach(el => {
                if (e.target.dataset.id === el.id) {
                    scrollTo({
                        top: el.offsetTop,
                        behavior: 'smooth'
                    });
                }
            })
        }
    });
}

export default menuScroll;