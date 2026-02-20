157355// services section

// header
const header = document.querySelector("#header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 800) {
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
})

// services tab menu
$(function () {
  $(".tabs button").click(function () {
    const target = $(this).parent().data("target");
    $(".tab").removeClass("active");
    $("." + target).addClass("active");

    $(".tabs li").removeClass("active");
    $(this).parent().addClass("active");
  });
});

// ba tab menu
$(function () {
  $(".ba-tabs button").click(function () {
    const filter = $(this).parent().data("filter");
    $(".ba-tab").removeClass("active");
    $("." + filter).addClass("active");

    $(".ba-tabs li").removeClass("active");
    $(this).parent().addClass("active");
  });
});


// clinic section

// clinic swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: true,

  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1025: {
      slidesPerView: 1.92,
      spaceBetween: 110
    }
  }
});

// contact form
const contactForm = document.querySelector('.contact-user-box');
const submitBtn = document.querySelector('.contact-user-btn');

function checkForm() {
  const requiredFields = contactForm.querySelectorAll('[required]');
  const isAllValid = Array.from(requiredFields).every(field => {
    if (field.type === 'checkbox') {
      return field.checked;
    }
    return field.value.trim() !== "";
  });

  if (isAllValid) {
    submitBtn.disabled = false;
    submitBtn.classList.add('active');
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.remove('active');
  }
}

contactForm.addEventListener('input', checkForm);
contactForm.addEventListener('change', checkForm);

// map
kakao.maps.load(function () {
  var mapContainer = document.getElementById('map'),
    mapOption = {
      center: new kakao.maps.LatLng(37.529505, 126.967319), // 지도 중심좌표
      level: 3
    };

  var map = new kakao.maps.Map(mapContainer, mapOption);

  var imageSrc = './assets/images/map_pin.png',
    imageSize = new kakao.maps.Size(40, 40),
    imageOption = { offset: new kakao.maps.Point(10, 40) };

  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.529505, 126.967319); // 마커가 표시 위치

  var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage
  });

  marker.setMap(map);
});