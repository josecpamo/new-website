const scrollTop = () => {
    const scrollBtn = document.getElementById("scrolltop-btn");
    
    document.addEventListener("scroll", e => {
        const ypos = document.documentElement.scrollTop || window.pageYOffset;
        
        if (ypos > 300) scrollBtn.classList.remove("translate150");
        else scrollBtn.classList.add("translate150");
    });

    document.addEventListener("click", e => {
        if (e.target.matches("#scrolltop-btn, #scrolltop-btn >*")) {
          scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }
    });
}

export default scrollTop;