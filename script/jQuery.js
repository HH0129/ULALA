// 햄버거 메뉴
var i = 0;
$(".hamburger").click(function(){
    $(".hamburger span:nth-of-type(1)").toggleClass("active");
    $(".hamburger span:nth-of-type(2)").toggleClass("active");
    $(".hamburger span:nth-of-type(3)").toggleClass("active");

    if (i == 0) {
      $(".menuWrap").stop().animate({ "right": "0" },200);
      i = 1;
    } else {
      $(".menuWrap").stop().animate({ "right": "-75%" },200);
      i = 0;
    }
  });