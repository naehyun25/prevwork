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
document.addEventListener('scroll', function(){
    let scrollTop = window.scrollY
  if(scrollTop > prevScroll) {
    // scrollDown
    slideDown(scrollTop);
    
  } else {
    // scrollUp
    slideUp(scrollTop);
  }
  prevScroll = scrollTop
})

//SlideDown  
const SlideWrap = document.querySelector(".MainTalent_Carousel");
const Carousels = document.querySelectorAll(".Carousel");
const firstCarousel = document.querySelector(".attract");
const secondCarousel = document.querySelector(".increase");
const thirdCarousel = document.querySelector(".promote");
const lastCarousel = document.querySelector(".deliver");

function slideDown(scrollTop) {
  
const offsetTop = SlideWrap.offsetTop;
const carouselHeight = Carousels[0].clientHeight;
  
if (scrollTop >= offsetTop - 150) {
    firstCarousel.classList.add("fixed");
}
 
if (scrollTop >= offsetTop + carouselHeight - 150) {
    secondCarousel.classList.add("fixed");
  } 

if (scrollTop >= offsetTop + carouselHeight * 2 - 150) {
    thirdCarousel.classList.add("fixed");
  }
if (scrollTop >= offsetTop + carouselHeight * 3 - 150) {
    lastCarousel.classList.add("fixed");
  } 
if (scrollTop >= offsetTop + carouselHeight * 4 -350) {
    Carousels.forEach((carousel) => {
        carousel.classList.remove("fixed")
    })
  }
};
//SlideUp
function slideUp(scrollTop) {
    const offsetTop = SlideWrap.offsetTop;
    const carouselHeight = Carousels[0].clientHeight;
    console.log("scrollTop",scrollTop,"offsetTop",offsetTop, "carouselHeight",carouselHeight )
    
    Carousels.forEach((carousel) => {
        carousel.classList.add("fixed")
    })
    if (scrollTop <= offsetTop - 150) {
        firstCarousel.classList.remove("fixed");
    } 
    if (scrollTop <= offsetTop + carouselHeight - 150) {
        secondCarousel.classList.remove("fixed");
    }
    if (scrollTop <= offsetTop + carouselHeight * 2 - 150) {
        thirdCarousel.classList.remove("fixed");
      }
    if (scrollTop <= offsetTop + carouselHeight * 3 - 350) {
        lastCarousel.classList.remove("fixed");
      } 
}