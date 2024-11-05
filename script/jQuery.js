// //반응형 헤더
// $(function () {
//   $(window).scroll(function () {
//       var top = $(window).scrollTop();

//       if (top > 700) {
//           $('header').css({'background-color':'white','box-shadow':'0 3px 10px rgba(0,0,0,0.07)'});
//           $('header a').css({'color':'black'});
//       } else {
//           $('header').css({'background-color':'unset','box-shadow':'none'});
//           $('header a').css({'color':'white'});
//       };
//   });
// });
// $(function(){
//   var screenWidth = $(window).width();

//   if (screenWidth < 480) {
//     $("header").css({'background':'none','box-shadow':'none'});
//   }
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