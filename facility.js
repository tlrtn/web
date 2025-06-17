$("#fullpage").fullpage({
  autoScrolling: true,
  navigation: true,
  navigationPosition: "left",
  menu: ".menu",
  anchors: ["1", "2", "3", "4"],
  afterLoad: function (origin, destination, direction, trigger) {
    console.log(destination.index);
    if (destination.index == 2) {
      // section 3
      $(".text3-1 img").addClass("active");
      $(".text3-2 img").addClass("active");
    } else {
      $(".text3-1 img").removeClass("active");
      $(".text3-2 img").removeClass("active");
    }

    if (destination.index == 3) {
      // section 4
      $(".text4-1 img").addClass("active");
      $(".text4-2 img").addClass("active");
    } else {
      $(".text4-1 img").removeClass("active");
      $(".text4-2 img").removeClass("active");
    }
  },
});

$(".d1").colorbox({ rel: "gal" });
$(".d1pop").colorbox({ iframe: true, innerWidth: 800, innerHeight: 600 });

$(".win").on("click", () => {
  window.open("./popup.html", "popup", "width=600,height=400");
});

$(".step_num a:nth-child(1), .circle ul li:nth-child(1) a").mouseover(
  function () {
    $(".step .speech li:nth-child(1)").stop().slideDown();
  }
);
$(".step_num a:nth-child(2), .circle ul li:nth-child(2) a").mouseover(
  function () {
    $(".step .speech li:nth-child(2)").stop().slideDown();
  }
);
$(".step_num a:nth-child(3), .circle ul li:nth-child(3) a").mouseover(
  function () {
    $(".step .speech li:nth-child(3)").stop().slideDown();
  }
);

// $(".step_num a:nth-child(1), .circle ul li:nth-child(1) a").mouseleave(
//   function () {
//     $(".step .speech li:nth-child(1)").stop().slideUp();
//   }
// );
// $(".step_num a:nth-child(2), .circle ul li:nth-child(2) a").mouseleave(
//   function () {
//     $(".step .speech li:nth-child(2)").stop().slideUp();
//   }
// );
// $(".step_num a:nth-child(3), .circle ul li:nth-child(3) a").mouseleave(
//   function () {
//     $(".step .speech li:nth-child(3)").stop().slideUp();
//   }
// );

// 유니버설디자인 7원칙 원형
$(document).ready(function () {
  const $icons = $(".explain_wrap a");
  const centerX = 200;
  const centerY = 200;
  const radius = 250;
  const total = $icons.length;

  let angleOffset = 0;
  let isPaused = false;

  const descriptionsTitles = [
    "공평한 사용",
    "사용의 유연성",
    "직관적인 사용",
    "정보의 인지 용이성",
    "오류에 대한 관용성",
    "적은 물리적 노력",
    "접근과 사용을 위한 충분한 공간"
  ];

  const descriptionsTexts = [
    "유니버설 디자인은 모든 사람을 위한 디자인입니다.",
    "누구나 접근 가능하게 설계되어야 합니다.",
    "물리적, 사회적 장벽을 줄이는 것이 핵심입니다.",
    "고령자와 장애인을 포함한 모두를 고려합니다.",
    "범용적 설계는 사회 통합에 기여합니다.",
    "편리함과 안전함을 모두 갖추는 것이 목표입니다.",
    "보편성과 효율성을 동시에 추구합니다."
  ];

  // 호버 시 멈춤
  $icons.on("mouseenter", function () {
    isPaused = true;
  });

  $icons.on("mouseleave", function () {
    isPaused = false;
  });

  // 클릭 시 모달 띄우기
  $icons.on("click", function (e) {
    e.preventDefault();
    const index = $icons.index(this);
    $("#modal-name").text(descriptionsTitles[index]);
    $("#modal-text").text(descriptionsTexts[index]);
    $("#modal").fadeIn();
  });



  // 모달 닫기 (X 버튼)
  $(".close").on("click", function () {
    $("#modal").fadeOut();
  });


  // 모달 바깥 클릭 시 닫기
  $(window).on("click", function (e) {
    if ($(e.target).is("#modal")) {
      $("#modal").fadeOut();
    }
  });

  // 아이콘 회전 애니메이션
  function rotateIcons() {
    if (!isPaused) {
      angleOffset += 0.2;
    }

    $icons.each(function (i) {
      const angle = (angleOffset + i * (360 / total)) * (Math.PI / 180);
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      $(this).css({ left: `${x}px`, top: `${y}px`, position: "absolute" });
    });

    requestAnimationFrame(rotateIcons);
  }

  rotateIcons();
});
