// //반응형 헤더
// $(function () {
//   $(window).scroll(function () {
//       var top = $(window).scrollTop();

//       if (top > 700) {
//           $('.desktop').css({'background-color':'white','box-shadow':'0 3px 10px rgba(0,0,0,0.07)'});
//           $('.desktop a').css({'color':'black'});
//       } else {
//           $('.desktop').css({'background-color':'unset','box-shadow':'none'});
//           $('.desktop a').css({'color':'white'});
//       };
//   });
// });

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