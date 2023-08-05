const OpenNav = document.getElementById("OpenNav");
const navLinks = OpenNav.querySelectorAll(".nav_links a");

function menu() {
  OpenNav.classList.toggle("ShowNav");
  document.body.classList.toggle("overflow-hidden");
  document.body.classList.toggle("cross");
}

document.addEventListener("DOMContentLoaded", function () {
  const defaultActiveTab = "Services"; // Change this to the desired default active tab

  navLinks.forEach((navLink) => {
    if (navLink.textContent.trim() === defaultActiveTab) {
      setActiveLink(navLink);
      const targetSectionId = navLink.getAttribute("href");
      scrollToSection(targetSectionId);
    }
  });
});
// slider
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: true,
  centerMode: true,
  focusOnSelect: true,
});
