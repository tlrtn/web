$("#fullpage").fullpage({
  autoScrolling: true,
  navigation: true,
  navigationPosition: "right",
  menu: ".menu",
  anchors: ["1", "2", "3", "4"],
  afterLoad: function (origin, destination, direction, trigger) {
    console.log(destination.index);
    if (destination.index == 2) {
      $(".text1").fadeToggle(2000, function(){
        $('.text1').hide();
        $('.text2').fadeToggle(2000);
        $('.facility').fadeToggle(2000);
      });
    }
    else{
        $('.text1').hide();
        $('.text2').hide();
        $('.facility').hide();
    }
  },
});

$(".d1").colorbox({ rel: "gal" });
$(".d1pop").colorbox({ iframe: true, innerWidth: 800, innerHeight: 600 });

$(".win").on("click", () => {
  window.open("./popup.html", "popup", "width=600,height=400");
});

// $(() => {
//   function reback() {
//     let i = 0;
//     if (i < 2) {
//       i++;
//     } else {
//       i = 0;
//     }
//   }
//   $(".section3_wrap .text").mouseover(function () {});
//   setInterval(reback, 3000);
// });
