var optionStatus = 0;
$(document).ready(function () {
  $(".option").click(function () {
    if (optionStatus == 0) {
      // $(".optionContent").fadeIn();
      // $(".optionContent").fadeIn("slow");
      // $(".optionContent").fadeIn(1000);
      $(".optionContent").css("display", "block");
      optionStatus = 1;
    } else {
      // $(".optionContent").fadeOut();
      // $(".optionContent").fadeOut("slow");
      // $(".optionContent").fadeOut(1000);
      $(".optionContent").css("display", "none");
      optionStatus = 0;
    }
  });
});

var bt1 = 0;
$(".btContent1").click(function () {
  if (bt1 == 0) {
    $(".btContent1").removeClass("btContentClose");
    $(".btCircle1").removeClass("btCircleClose");
    $(".btStatus1").removeClass("btStatusClose");
    $(".btContent1").addClass("btContentOpen");
    $(".btCircle1").addClass("btCircleOpen");
    $(".btStatus1").addClass("btStatusOpen");
    $(".btStatus1").text("開");
    bt1 = 1;
  } else {
    $(".btContent1").removeClass("btContentOpen");
    $(".btCircle1").removeClass("btCircleOpen");
    $(".btStatus1").removeClass("btStatusOpen");
    $(".btContent1").addClass("btContentClose");
    $(".btCircle1").addClass("btCircleClose");
    $(".btStatus1").addClass("btStatusClose");
    $(".btStatus1").text("關");
    bt1 = 0;
  }
});

var bt2 = 0;
$(".btContent2").click(function () {
  if (bt2 == 0) {
    $(".btContent2").removeClass("btContentClose");
    $(".btCircle2").removeClass("btCircleClose");
    $(".btStatus2").removeClass("btStatusClose");
    $(".btContent2").addClass("btContentOpen");
    $(".btCircle2").addClass("btCircleOpen");
    $(".btStatus2").addClass("btStatusOpen");
    $(".btStatus2").text("開");
    bt2 = 1;
  } else {
    $(".btContent2").removeClass("btContentOpen");
    $(".btCircle2").removeClass("btCircleOpen");
    $(".btStatus2").removeClass("btStatusOpen");
    $(".btContent2").addClass("btContentClose");
    $(".btCircle2").addClass("btCircleClose");
    $(".btStatus2").addClass("btStatusClose");
    $(".btStatus2").text("關");
    bt2 = 0;
  }
});


var list_html =
  "<div  id={{gameID}} class='list {{listNum}} '><div class='listPic {{listPicNum}}'><img class='listPic {{listPicNum}}' src='{{linkPic}}'></div><div class='listName {{listNameNum}}'>{{gameName}}</div><div class='listContent {{listContentNum}}'>{{gamePurpose}}</div></div>";

var apiData;

$.getJSON("./transferExcelToJson/ice_break_format.json", function (data) {

  console.log(data);
  apiData = data;
  for (var i = 0; i < data.length; i++) {
    //取代模板位置成資料replace(要取代的,取代成...)
    var current_item_html = list_html
      // .replace("{{gameID}}", i)
      .replace("{{listNum}}", "list" + i + 1)
      .replace("{{listPicNum}}", "listPic" + i + 1)
      .replace("{{listNameNum}}", "listName" + i + 1)
      .replace("{{listPicNum}}", "listPic" + i + 1)
      .replace("{{listContentNum}}", "listContent" + i + 1)
      .replace("{{gameName}}", data[i].name)
      .replace("{{gamePurpose}}", data[i].purpose)
      .replace("{{linkPic}}", "./images/" + data[i].imageName + ".jpeg")
      .replace("{{gameID}}", "game" + i);

    $(".content").append(current_item_html);


    $("#game" + i).click(
      function () {
        show_game_detail();
      });

  }
});


var contentDetailExist = 0;
//show game content
function show_game_detail(id) {
  // var gameContent ="<div class='contentDetail'></div>";

  // show_game_detail();

  var gameContent =
    "<div id='del_content' class='contentDetail'>" +
    "<div class='contentTitle'>" +
    "<div class='contentTitleDetail'>放大圖片猜猜猜</div>" +
    "</div>" +
    "<div class='contentPurpose'>" +
    "<div class='contentPurposeTitle'>目的</div>" +
    "<div class='contentPurposeDetail'>互相討論，合作解難</div>" +
    "</div>" +
    "<div class='contentNumber'>" +
    "<div class='contentNumberTitle'>人數</div>" +
    "<div class='contentNumberDetail'>2-5</div>" +
    "</div>" +
    "<div class='contentItem'>" +
    "<div class='contentItemTitle'>物資</div>" +
    "<div class='contentItemDetail'>圖片</div>" +
    "</div>" +
    "<div class='contentRules'>" +
    "<div class='contentRulesTitle'>玩法</div>" +
    "<div class='contentRulesDetail'>" +
    "1. 將圖片的某一部份放大，然後讓參加者猜圖片中的物件是什麼。<p>2. 物件建議：筆、手機、垃圾桶、洗衣機、貓、巴士、機械人、IRON MAN、多啦A夢、地球" +
    "</div>" +
    "</div>" +
    "<div class='contentSuggest'>" +
    "<div class='contentSuggestTitle'>建議</div>" +
    "<div class='contentSuggestDetail'>" +
    "可因應參加者的能力逐漸縮少圖片，以增加參加者猜中的機會。" +
    "</div>" +
    "</div>" +
    "<div class='contentVideo'>" +
    //"<iframe class='contentVideoDetail' src='https://www.youtube.com/embed/XN031PuViqI?list=PL2SrkGHjnWcyWbA4MGSeTQVNiFHt1YbjC' frameborder='0' allowfullscreen></iframe>" +
    "</div>" +
    "<div class='del_btn'>X</div>" +
    "</div>";

  // $(window).scroll(function (e) {
  //   console.log($(window).scrollTop());
  //   topHeight = $(window).scrollTop();
  //   // $(".contentDetail").css("top", topHeight+(-200));
  // });

  // console.log(window.pageYOffset);
  console.log($(window).height());

  $(".content").append(gameContent);
  $('.contentDetail').css('height', ($(window).height())-160);
  // $('.contentDetail').css('margin-buttom', 160);
}


$(".nav").click(function () {
  // if (contentDetailExist == 1) {
  $(".contentDetail").remove();
  console.log("123");
  // }
});

$("#del_content").click(function () {
  // if (contentDetailExist == 1) {
  // $(".contentDetail").remove();
  console.log("123");
  // }
});
