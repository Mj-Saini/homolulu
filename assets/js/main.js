const OpenNav = document.getElementById("OpenNav");
const navLinks = OpenNav.querySelectorAll(".nav_links a");

function menu() {
  OpenNav.classList.toggle("ShowNav");
  document.body.classList.toggle("overflow-hidden");
  document.body.classList.toggle("cross");
}
function changeTab(tabIndex) {
  const tabContent = document.getElementById("tabContent");
  const tabs = tabContent.getElementsByClassName("tab-pane");
  for (let i = 0; i < tabs.length; i++) {
    if (i === tabIndex) {
      tabs[i].style.display = "block";
    } else {
      tabs[i].style.display = "none";
    }
  }

  const tabList = document.querySelector(".nav-tabs");
  const tabItems = tabList.querySelectorAll(".nav_links");
  tabItems.forEach((item, index) => {
    if (index === tabIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
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
