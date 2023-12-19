document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll("#thumbBox img");
    let bigImage = document.querySelector("figure img");
    let button = document.querySelector("button");
    
    button.addEventListener("click", resetSliders);

    for (let img of images) {
        img.addEventListener("click", function (e) {
            let imgSrcAttr = e.target.getAttribute("src");
            bigImage.setAttribute("src", imgSrcAttr.replace("small", "medium"));

            let em = document.querySelector("figcaption em");
            em.textContent = img.alt;
            let span = document.querySelector("figcaption span");
            span.textContent = img.title;
        })
    };

    const sliderContainer = document.querySelector("#sliderBox");
        sliderContainer.addEventListener("change", function(e) {
            if (e.target && e.target.nodeName == "INPUT") {
                bigImage.style.filter = 'blur(' + document.querySelector('#sliderBlur').value + 'px) '+
                'brightness(' + document.querySelector('#sliderBrightness').value + '%) ' +
                'saturate(' + document.querySelector('#sliderSaturation').value + '%) ' +
                'hue-rotate(' + document.querySelector('#sliderHue').value + 'deg) ' +
                'grayscale(' + document.querySelector('#sliderGray').value + '%) ' +
                'opacity(' + document.querySelector('#sliderOpacity').value + '%) ';
                console.log(bigImage.style.filter.indexOf("blur"));
                console.log(bigImage.style.filter);

                updateRangeText(e);
            }

            function updateRangeText(e) {
                document.querySelector("#numOpacity").textContent = String(document.querySelector('#sliderOpacity').value);
                document.querySelector("#numSaturation").textContent = String(document.querySelector('#sliderSaturation').value);
                document.querySelector("#numHue").textContent = String(document.querySelector('#sliderHue').value);
                document.querySelector("#numGray").textContent = String(document.querySelector('#sliderGray').value);
                document.querySelector("#numBrightness").textContent = String(document.querySelector('#sliderBrightness').value);
                document.querySelector("#numBlur").textContent = String(document.querySelector('#sliderBlur').value);
            };

        });

        
        function resetSliders() {
            bigImage.style.filter = "none";
        }
        
}); 