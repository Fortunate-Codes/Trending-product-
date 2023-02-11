let progressbars = document.querySelectorAll(".progress-bar");
 
progressbars.forEach(function(progressbar) {
    let styleWidth = progressbar.style.width;
    if (styleWidth <= "50%") {
        progressbar.style.backgroundColor = "red";
    }else {
        progressbar.style.backgroundColor = "orange";
    }
});
