const hamburguerMenu = (container, menu, trigger) => {
    const ctn = document.querySelector(container);
    const panel= document.querySelector(menu);

    document.addEventListener("click", e => {
        if (e.target.matches(trigger)) {
            ctn.classList.toggle("active");
            panel.classList.toggle("active");
        }

        if (e.target.matches(container)) {
            ctn.classList.remove("active");
            panel.classList.remove("active");
        }
    });
}

export default hamburguerMenu;