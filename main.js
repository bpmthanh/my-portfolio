// video -popup
window.document.onkeydown = function (e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
};

function lightbox_open() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  window.scrollTo(0, 0);
  document.getElementById("light").style.display = "block";
  document.getElementById("fade").style.display = "block";
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById("light").style.display = "none";
  document.getElementById("fade").style.display = "none";
  lightBoxVideo.pause();
  history.replaceState(null, null, window.location.pathname);
}

// read-more
window.addEventListener("DOMContentLoaded", function () {
  var readMoreBtns = document.querySelectorAll(".readMoreBtn");

  readMoreBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var descriptionList = btn.parentNode.querySelector(".description-list");
      var skillsList = btn.parentNode.querySelector(".skills-list");

      descriptionList.classList.toggle("expanded");
      if (skillsList) {
        skillsList.classList.toggle("expanded");
      }
      btn.textContent = descriptionList.classList.contains("expanded")
        ? "Read Less"
        : "Read More";
    });
  });
});

$(document).ready(function () {
  $(".picture-overlay").magnificPopup({
    delegate: ".image-link",
    type: "image",
  });

  $(".popup-video").magnificPopup({
    type: "iframe",
    iframe: {
      patterns: {
        mp4: {
          index: null,
          src: "%src%",
        },
      },
    },
    callbacks: {
      elementParse: function (item) {
        item.src = item.el.attr("href");
      },
      markupParse: function (template, values, item) {
        template.find("iframe").attr("src", item.src);
      },
    },
  });
});

function setActiveStyles(event) {
  var element = event.target;
  element.style.border = "1px solid rgb(254, 44, 85)";
  element.style.textDecoration = "none";
  element.style.color = "rgb(254, 44, 85)";
}

function resetActiveStyles(event) {
  var element = event.target;
  element.style.border = "1px solid #09f";
  element.style.textDecoration = "none";
  element.style.color = "#09f";
}

//carousel
$(document).ready(function () {
  $(".center").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    dots: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});

//header

//anchor
$(document).ready(function () {
  // Xử lý sự kiện click trên các liên kết với thuộc tính data-scroll
  $("a[data-scroll]").on("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

    var target = $(this).attr("data-scroll"); // Lấy giá trị thuộc tính data-scroll của liên kết
    var offset = $(target).offset().top - 70; // Lấy vị trí top của phần tử đích với khoảng cách 20px từ top

    // Cuộn đến vị trí đích với hiệu ứng mượt
    $("html, body").animate(
      {
        scrollTop: offset,
      },
      800
    ); // 800 là thời gian (ms) để thực hiện cuộn đến

    // Đóng menu dropdown nếu có
    $(".dropdown-menu").removeClass("show");
    $(".dropdown-toggle").attr("aria-expanded", "false");
  });
});

//dropdown menu
$(document).ready(function () {
  // Hiển thị dropdown-menu khi hover vào mục dropdown
  $(".dropdown").mouseenter(function () {
    $(this).find(".dropdown-menu").addClass("show");
  });

  // Đóng dropdown-menu khi không hover nữa
  $(".dropdown").mouseleave(function () {
    $(this).find(".dropdown-menu").removeClass("show");
  });
});

window.addEventListener("DOMContentLoaded", function () {
  let headerNavs = document.querySelectorAll(".navbar-nav .nav-link");

  headerNavs.forEach(function (headerNav) {
    headerNav.addEventListener("click", function () {
      headerNavs.forEach(function (nav) {
        nav.classList.remove("active-nav");
      });
      headerNav.classList.add("active-nav");
    });
  });
});

// Hàm chuyển đổi ngôn ngữ
function toggleLanguage(lang) {
  const viLanguage = document.getElementById("viLanguage");
  const enLanguage = document.getElementById("enLanguage");

  if (lang === "vi") {
    viLanguage.classList.add("activeLanguage");
    enLanguage.classList.remove("activeLanguage");
  } else if (lang === "en") {
    viLanguage.classList.remove("activeLanguage");
    enLanguage.classList.add("activeLanguage");
  }
}
