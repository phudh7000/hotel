var header = document.querySelector('#header');
var slider = document.querySelector('.slider');
var bannerItem = document.getElementsByClassName('banner_item');
var btnBars = document.querySelector('.btn-bars');
var menu = document.querySelector('.navbar_items');
var btnNext = document.getElementById('next');
var btnPrevious = document.getElementById('previous');


function moveHeader() {
    var ok = 0;
    window.onscroll = () => {
        if (window.scrollY >= 2 * header.clientHeight) {
            header.style.top = -header.clientHeight + 'px';
            setTimeout(() => {
                header.style.position = 'sticky'
            }, 2);
            header.style.transform = `translateY(${header.clientHeight}px)`;
            ok = 1;
        }
        else {
            if (ok == 1) {
                header.style.transitionDuration = 0 + 's';
                ok = 0;
            } else header.style.transitionDuration = 1 + 's';

            header.style.transform = `translateY(0px)`;
            header.style.position = 'inherit'
        }
    }
}


function runSlides() {
    let i = 0;
    let flag =false;
    
    var listSlide = [
        'https://mariaelenavillas.gr/wp-content/uploads/2018/10/maria-elena-villas-halkidiki-daphne-13_result-1350x650.jpg',
        'https://mariaelenavillas.gr/wp-content/uploads/2018/10/maria-elena-villas-halkidiki-daphne-14_result-1350x650.jpg',
        'https://www.chaitanyafurniture.com/wp-content/uploads/2020/07/slide11-1350x650.jpg',
        'https://suradtrading.com/wp-content/uploads/2018/04/books-1350x650.jpg',
        'https://suradtrading.com/wp-content/uploads/2018/04/meeting-chair-1350x650.jpg',
    ]
        
    btnPrevious.onclick = ()=>{
        slider.style.backgroundImage = `url(${listSlide[i]})`;
        if (i == 0)
            i = listSlide.length - 1;
        else i--;

        flag = true;

        setTimeout(() => {
            flag =false;
        }, 4000);

        }
    btnNext.onclick = ()=>{
        slider.style.backgroundImage = `url(${listSlide[i]})`;
        if (i >= listSlide.length - 1)
            i = 0;
        else i++;
        flag = true;

        setTimeout(() => {
            flag =false;
        }, 4000);

        }
    
    setInterval(() => {

        if(!flag){
            slider.style.backgroundImage = `url(${listSlide[i]})`;
            if (i >= listSlide.length - 1)
                i = 0;
            else i++;
        }

    }, 7000);
}


function nextContentBanner() {
    let i = 0;
    setInterval(() => {
        bannerItem[i].classList.add('hidden');
        bannerItem[i].classList.remove('show');
        i == bannerItem.length-1 ? i = 0 : i++;
        bannerItem[i].classList.remove('hidden');
        bannerItem[i].classList.add('show');
    }, 3000);
}

function menuShow(){
    let flag = true;

   btnBars.onclick = ()=>{
       if(flag){
        menu.style.display ='flex';  
        flag = false;
       }else{
        menu.style.display ='none';
        flag = true;
       }
    
}; 
}

menuShow();

nextContentBanner();
runSlides();
moveHeader();

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:1,
    autoplay:true,
    autoplayTimeout:10000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})