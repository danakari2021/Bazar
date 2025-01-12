$(window).on('load',function(){
  $(".loader").fadeOut(1000);
  $("header").fadeIn();
  $("main").fadeIn();
  $("footer").fadeIn();
});

$(document).ready(function () {
  $(".dropdown").click(function () {
    $(this).find(".dropdown-content").slideToggle("fast");
  });
});
$(document).on("click", function (event) {
  var $trigger = $(".dropdown");
  if ($trigger !== event.target && !$trigger.has(event.target).length) {
    $(".dropdown-content").slideUp("fast");
  }
});

var darkmood = document.getElementById("darkmood");
if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "light");
}
let localData = localStorage.getItem("theme");
if (localData == "light") {
  document.getElementById("darkmood").textContent = "Dark Mood";

  document.body.classList.remove("dark");
} else if (localData == "dark") {
  document.getElementById("darkmood").textContent = "Light Mood";
  document.body.classList.add("dark");
}

darkmood.onclick = function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    document.getElementById("darkmood").textContent = "Light Mood";
    localStorage.setItem("theme", "dark");
    darkmood.src = "images/sun.png";
  } else {
    document.getElementById("darkmood").textContent = "Dark Mood";
    localStorage.setItem("theme", "light");
    darkmood.src = "images/moon.png";
  }
};

var moody = document.getElementById("moody");
moody.onclick = function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    document.getElementById("darkmood").textContent = "Light Mood";
  } else {
    document.getElementById("darkmood").textContent = "Dark Mood";
  }
};

/////dark mood for little screen
var darkmood = document.getElementById("moody");
if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "light");
}
let localDatamood = localStorage.getItem("theme");
if (localDatamood == "light") {
  darkmood.src = "images/sun.png";
  document.body.classList.remove("dark");
} else if (localDatamood == "dark") {
  darkmood.src = "images/moon.png";
  document.body.classList.add("dark");
}
darkmood.onclick = function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    document.getElementById("darkmood").textContent = "Light Mood";
    darkmood.src = "images/sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    document.getElementById("darkmood").textContent = "Dark Mood";
    darkmood.src = "images/moon.png";
    localStorage.setItem("theme", "light");
  }
};

var swiper = new Swiper(".swiper", {
  slidesPerGroup: 6,
  speed: 1000,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".as", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  speed:1000,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



