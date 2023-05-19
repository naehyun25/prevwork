// BrandSlide
// transition수정 or Animation 으로 수정
const brandSlide=document.querySelector(".brandsCarousel")
const brands=document.querySelectorAll(".brand")
const brandsNum = brands.length;
const brandsWidth = brands[0].offsetWidth+50;
let now=0;
const copybrands = Array.from(brands).map((brand) => brand.cloneNode(true));
copybrands.forEach((brand)=>{
    brandSlide.appendChild(brand);
})
function outoMove(){
    now++;
    brandSlide.style.transition="margin-left 3s";
    brandSlide.style.marginLeft=-brandsWidth*now+"px";
    if(now==brandsNum){
        now=0;
        brandSlide.style.transition="margin-left 0.1s";
        brandSlide.style.marginLeft='0';
    }
}
startSlide();
function startSlide(){
    slideMoving = setInterval(outoMove,3000);
}
function stopSlide(){
    clearInterval(slideMoving)
}
brandSlide.addEventListener("mouseover",stopSlide)
brandSlide.addEventListener("mouseout",startSlide)

//ScrollEvent
let prevScroll = document.documentElement.scrollTop || 0
document.addEventListener('scroll', function(e){
    let scrollTop = window.scrollY
    console.log(
        "스크롤값",scrollTop,
        "윈도우 높이",window.innerHeight,
        "화면에서 갤러리까지 위치", SlideWrap.offsetTop,
        "갤러리높이값", SlideWrap.clientHeight,
        "갤러리하나의 높이값", Carousels[0].clientHeight
    )
  if(scrollTop > prevScroll) {
    // scrollDown
    slideUp(scrollTop);
    steakyHeader(scrollTop);
} else {
    // scrollUp
    slideDown(scrollTop);
    steakyHeader(scrollTop);
  }
  prevScroll = scrollTop
})
// header
function steakyHeader(scrollTop){
    const Header =  document.querySelector("header")
    if(scrollTop>100){
        Header.classList.add("stickyHeader");
    }else{
        Header.classList.remove("stickyHeader");
    }
}

//SlideDown  - > reFactory수정요망
const SlideWrap = document.querySelector(".MainTalent_Carousel");
const Carousels = document.querySelectorAll(".Carousel");
const firstCarousel = document.querySelector(".attract");
const secondCarousel = document.querySelector(".increase");
const thirdCarousel = document.querySelector(".promote");
const lastCarousel = document.querySelector(".deliver");


function slideUp(scrollTop){
    if(scrollTop>SlideWrap.offsetTop-window.innerHeight+Carousels[0].clientHeight){
        Carousels[0].classList.add('fixed');
        Carousels[0].style.top=window.innerHeight-Carousels[0].clientHeight+"px"
    }
    if(scrollTop>SlideWrap.offsetTop-window.innerHeight+Carousels[0].clientHeight*2){
        Carousels[1].classList.add('fixed');
        Carousels[1].style.top=window.innerHeight-Carousels[0].clientHeight+"px"
        Carousels[0].classList.remove('fixed');
        Carousels[0].style.top=0+"px"
    }
    if(scrollTop>SlideWrap.offsetTop-window.innerHeight+Carousels[0].clientHeight*3){
        Carousels[2].classList.add('fixed');
        Carousels[2].style.top=window.innerHeight-Carousels[0].clientHeight+"px"
        Carousels[1].classList.remove('fixed');
        Carousels[1].style.top=Carousels[0].clientHeight+"px"
    }
    if(scrollTop>SlideWrap.offsetTop-window.innerHeight+Carousels[0].clientHeight*4){
        Carousels.forEach((slide)=>{slide.classList.remove('fixed')})
        Carousels[2].classList.remove('fixed');
        Carousels[2].style.top=Carousels[0].clientHeight*3+"px"
    }
}

function slideDown(scrollTop){
    if(
        scrollTop<SlideWrap.offsetTop-window.innerHeight+Carousels[0].clientHeight*4){
            Carousels[2].classList.add('fixed');
            Carousels[2].style.top=109+"px"
        }
    if(
        scrollTop<SlideWrap.offsetTop-window.innerHeight+Carousels[0].clientHeight*3){
            Carousels[2].classList.remove('fixed');
            Carousels[2].style.top=1880+"px"
            Carousels[1].classList.add('fixed');
            Carousels[1].style.top=109+"px"
        }
    if(
        scrollTop<SlideWrap.offsetTop-window.innerHeight+Carousels[0].clientHeight*2){
            Carousels[1].classList.remove('fixed');
            Carousels[1].style.top=940+"px"
            Carousels[0].classList.add('fixed');
            Carousels[0].style.top=109+"px"
        }
    if(
        scrollTop<SlideWrap.offsetTop-window.innerHeight+Carousels[0].clientHeight*1){
            Carousels[0].classList.remove('fixed');
            Carousels[0].style.top=0+"px"
        }
    }
//draggable Slide - Swifer 
const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    direction: 'horizontal',
    spaceBetween: 10,
    loop: true,
    mousewheel : true,
});

//Recommend Slide
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const RecommendSlide = document.querySelectorAll(".textBox");
let prevIdx = 0;
let nowIdx;
nextBtn.addEventListener("click",function(){
    if(nowIdx==RecommendSlide.length){return;}
    nowIdx = ++prevIdx;
    forWard(nowIdx)
})
prevBtn.addEventListener("click",function(){
    if(nowIdx==0){return;}
    nowIdx = --prevIdx;
    backWard(nowIdx)
})
function forWard(idx){
    if(idx==RecommendSlide.length){prevIdx==idx
    }else{
        RecommendSlide[idx].style.transform = `translateX(-${RecommendSlide[0].clientWidth*idx}px)`
    }
};
function backWard(idx){
    if(idx==0){prevIdx==idx
    }else{
        RecommendSlide[idx].style.transform = `translateX(${RecommendSlide[0].clientWidth*idx}px)`
    }
};
