// DYNAMIC FAVICON INJECTION
(function() {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = 'logo/favicon.png';
    document.getElementsByTagName('head')[0].appendChild(link);
})();

function loadComponent(id, file) {

    fetch(file)
    .then(res => res.text())
    .then(data => {

        document.getElementById(id).innerHTML = data;

        if(id === "footer"){
            if (typeof L !== 'undefined') {
                const map = L.map('voyamap').setView(
                    [30.3274324, 78.0337968],
                    15
                );

                L.tileLayer(
                    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    {
                        attribution: '&copy; OpenStreetMap contributors'
                    }
                ).addTo(map);

                L.marker([30.3274324, 78.0337968])
                    .addTo(map)
                    .bindPopup('<b>Voya Connect</b><br>Dehradun')
                    .openPopup();
            } else {
                console.warn('Leaflet is not loaded; footer map initialization skipped.');
            }
        }

        if(id === "header"){

            const currentPage =
            window.location.pathname.split("/").pop();

            const navLinks =
            document.querySelectorAll(".premium-link");

            navLinks.forEach(link => {

                const linkPage =
                link.getAttribute("href");

                if(linkPage === currentPage){
                    link.classList.add("active");
                }

            });

            if(
                currentPage === "uttrakhand.html" ||
                currentPage === "sikkim.html"
            ){
                document
                .querySelector(".dropdown-toggle")
                ?.classList.add("active");
            }

        }

    });

}

loadComponent("header", "header.html");
loadComponent("footer", "footer.html");


function openForm(){

    document
    .getElementById("popupForm")
    .classList.add("active");

}

function closeForm(){

    document
    .getElementById("popupForm")
    .classList.remove("active");

}

console.log("JS loaded");


/* SLIDER */

let slidebox =
document.querySelector(".slider-images");

let next =
document.querySelector(".next");

let prev =
document.querySelector(".prev");

let current = 0;

let total =
document.querySelectorAll(".slide-img").length;


function updateSlider(){

    if(!slidebox) return;

    slidebox.style.transform =
    `translateX(-${current * 100}%)`;

}


if(next){

    next.onclick = function(){

        current++;

        if(current >= total){
            current = 0;
        }

        updateSlider();

    };

}

if(prev){

    prev.onclick = function(){

        current--;

        if(current < 0){
            current = total - 1;
        }

        updateSlider();

    };

}


if(slidebox){

    setInterval(function(){

        current++;

        if(current >= total){
            current = 0;
        }

        updateSlider();

    },3000);

}



let num = 43876;
let sum = 0;

while(num > 0){
   let lastDigit = num%10;
   sum = sum+lastDigit;
   num = Math.floor(num/10);
}

console.log(sum)


// Badge color change on accordion toggle
        document.querySelectorAll('.collapse').forEach(function (el) {
            const badge = el.closest('.card') && el.closest('.card').querySelector('.badge');
            if (!badge) return;
            el.addEventListener('show.bs.collapse', () => badge.classList.replace('bg-dark', 'bg-primary'));
            el.addEventListener('hide.bs.collapse', () => badge.classList.replace('bg-primary', 'bg-dark'));
        });

        // Dribbble-style FAQ toggle
        function toggleFaq(btn) {
            const answer = btn.nextElementSibling;
            const isOpen = btn.classList.contains('open');
            document.querySelectorAll('.faq-custom-btn').forEach(b => {
                b.classList.remove('open');
                b.nextElementSibling.classList.remove('show');
            });
            if (!isOpen) {
                btn.classList.add('open');
                answer.classList.add('show');
            }
        }

        // Sticky bar — hide when booking section is visible
      const stickyBar = document.getElementById('stickyBar');

if (stickyBar) {
    window.addEventListener('scroll', () => {
        const scrollBottom = window.scrollY + window.innerHeight;
        const docHeight = document.body.scrollHeight;

        if (scrollBottom > docHeight - 300) {
            stickyBar.classList.add('hide');
        } else {
            stickyBar.classList.remove('hide');
        }
    });
}



let a=4;
let b=6;
let c=12;

c=c+a+b;
console.log(c);
