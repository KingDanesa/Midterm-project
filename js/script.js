function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
;
let burger_icon = document.querySelector(".icon-menu");
burger_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector(".icon-menu");
  user_menu.classList.toggle("_active");
  document.querySelector(".menu__body").classList.toggle("_active");
});
;

let user_icon = document.querySelector(".user-header__icon");
user_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector(".user-header__menu");
  user_menu.classList.toggle("_active");
});

document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest(".user-header")) {
    let user_menu = document.querySelector(".user-header__menu");
    user_menu.classList.remove("_active");
  }
});
