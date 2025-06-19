$(document).ready(function () {
  const images = [
    "images/facility_img1.png",
    "images/facility_img2.png",
    "images/facility_img3.png",
    "images/facility_img4.png",
    "images/facility_img5.jpg",
    "images/facility_img6.jpg",
    "images/facility_img7.jpg"
  ];

  $(".show a img").each(function (index) {
    $(this).on("click", function () {
      $("#circleImg").attr("src", images[index]);
    });
  });
});



