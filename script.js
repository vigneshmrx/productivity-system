let hamburger = document.getElementsByClassName("hamburger")[0];
        let theBars = Array.from(document.getElementsByClassName("bar"));
        let menu = document.getElementsByClassName("theMenu")[0];
        hamburger.addEventListener("click", () => {
            theBars.forEach(bar => {
                bar.classList.toggle("show");
                menu.classList.toggle("show");
            })
        });

        let footerText = document.getElementsByClassName("copyright-text")[0];
        let dat = new Date();
        let curYear = dat.getFullYear();

        footerText.innerHTML = "Copyright &#169; " + curYear + ", Vignesh Sundrani. All Rights Reserved.";
