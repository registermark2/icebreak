var optionStatus = 0;

var optionContent =
  "<div class='optionContent'>" +
  "<div class='bt'>" +
  "<div  class='btTitle btTitle1' >合作</div>" +
  "<div id='bt1' class='btContent btContent1 btContentClose' onclick='bt1Switch(this)'>" +
  "<div class='btCircle btCircle1 btCircleClose'></div>" +
  "<div class='btStatus btStatus1 btStatusClose'>關</div>" +
  "</div>" +
  "</div>" +
  "<div class='bt'>" +
  "<div class='btTitle btTitle2' >競爭</div>" +
  "<div id='bt2' class='btContent btContent2 btContentClose' onclick='bt2Swirch(this)'>" +
  "<div class='btCircle btCircle2 btCircleClose'></div>" +
  "<div class='btStatus btStatus2 btStatusClose'>關</div>" +
  "</div>" +
  "</div>" +
  "</div>"

$(document).ready(function () {
  $(".option").click(function () {
    if (optionStatus == 0) {
      // $(".optionContent").fadeIn();
      // $(".optionContent").fadeIn("slow");
      // $(".optionContent").fadeIn(1000);
      $(".optionContent").css("display", "block");
      // $(".content").append(optionContent);
      optionStatus = 1;
    } else {
      // $(".optionContent").fadeOut();
      // $(".optionContent").fadeOut("slow");
      // $(".optionContent").fadeOut(1000);
      $(".optionContent").css("display", "none");
      // $(".optionContent").remove();
      optionStatus = 0;


      relist();//重新列舉list
    }
  });
});


// $(function () { if ($("#div").hasClass('on')) { $(this).css("display", "none"); } });
//勾選的數量
var checkBox = {
  cooperation: 0,
  compete: 0,
}
console.log(checkBox.cooperation);


// var bt1 = 0, bt2 = 0;
function bt1Switch(obj) {
  if (checkBox.cooperation == 0) {
    $(".btContent1").removeClass("btContentClose");
    $(".btCircle1").removeClass("btCircleClose");
    $(".btStatus1").removeClass("btStatusClose");
    $(".btContent1").addClass("btContentOpen");
    $(".btCircle1").addClass("btCircleOpen");
    $(".btStatus1").addClass("btStatusOpen");
    $(".btStatus1").text("開");
    checkBox.cooperation = 1;
  } else if (checkBox.cooperation == 1) {
    $(".btContent1").removeClass("btContentOpen");
    $(".btCircle1").removeClass("btCircleOpen");
    $(".btStatus1").removeClass("btStatusOpen");
    $(".btContent1").addClass("btContentClose");
    $(".btCircle1").addClass("btCircleClose");
    $(".btStatus1").addClass("btStatusClose");
    $(".btStatus1").text("關");
    checkBox.cooperation = 0;
  }

}

function bt2Swirch() {
  if (checkBox.compete == 0) {
    $(".btContent2").removeClass("btContentClose");
    $(".btCircle2").removeClass("btCircleClose");
    $(".btStatus2").removeClass("btStatusClose");
    $(".btContent2").addClass("btContentOpen");
    $(".btCircle2").addClass("btCircleOpen");
    $(".btStatus2").addClass("btStatusOpen");
    $(".btStatus2").text("開");
    checkBox.compete = 1;
  } else if (checkBox.compete == 1) {
    $(".btContent2").removeClass("btContentOpen");
    $(".btCircle2").removeClass("btCircleOpen");
    $(".btStatus2").removeClass("btStatusOpen");
    $(".btContent2").addClass("btContentClose");
    $(".btCircle2").addClass("btCircleClose");
    $(".btStatus2").addClass("btStatusClose");
    $(".btStatus2").text("關");
    checkBox.compete = 0;
  }
}



var list_html =
  "<div  id={{gameID}} class='list {{listNum}}' onclick='show_game_detail(this)' '><div class='listPic {{listPicNum}}'><img class='listPic {{listPicNum}}' src='{{linkPic}}'></div><div class='listName {{listNameNum}}'>{{gameName}}</div><div class='listContent {{listContentNum}}'>{{gamePurpose}}</div></div>";

var apiData;

function createList() {
  $.getJSON("./transferExcelToJson/ice_break_format.json", function (data) {

    console.log(data);
    // console.log(apiData);
    apiData = data;
    for (var i = 0; i < data.length; i++) {
      //取代模板位置成資料replace(要取代的,取代成...)
      var current_item_html = list_html
        // .replace("{{gameID}}", i)
        // .replace("{{listNum}}", "list" + i + 1)
        // .replace("{{listPicNum}}", "listPic" + i + 1)
        // .replace("{{listNameNum}}", "listName" + i + 1)
        // .replace("{{listPicNum}}", "listPic" + i + 1)
        // .replace("{{listContentNum}}", "listContent" + i + 1)
        // .replace("{{gameName}}", data[i].name)
        // .replace("{{gamePurpose}}", data[i].purpose)
        // .replace("{{linkPic}}", "./images/" + data[i].imageName + ".jpeg")
        // .replace("{{gameID}}", i);
        .replace("{{listNum}}", "list" + i)
        .replace("{{listPicNum}}", "listPic" + i)
        .replace("{{listNameNum}}", "listName" + i)
        .replace("{{listPicNum}}", "listPic" + i)
        .replace("{{listContentNum}}", "listContent" + i)
        .replace("{{gameName}}", data[i].name)
        .replace("{{gamePurpose}}", data[i].purpose)
        .replace("{{linkPic}}", "./images/" + data[i].imageName + ".jpeg")
        .replace("{{gameID}}", i);

      $(".content").append(current_item_html);
    }

  })
};
createList();
// function
// function filterData(){
//   del_Btn();
//   // relist
//   $.getJSON("./transferExcelToJson/ice_break_format.json", function (data) {




//     for (var i = 0; i < data.length; i++) {
//       //取代模板位置成資料replace(要取代的,取代成...)
//       var current_item_html = list_html
//         // .replace("{{gameID}}", i)
//         .replace("{{listNum}}", "list" + i + 1)
//         .replace("{{listPicNum}}", "listPic" + i + 1)
//         .replace("{{listNameNum}}", "listName" + i + 1)
//         .replace("{{listPicNum}}", "listPic" + i + 1)
//         .replace("{{listContentNum}}", "listContent" + i + 1)
//         .replace("{{gameName}}", data[i].name)
//         .replace("{{gamePurpose}}", data[i].purpose)
//         .replace("{{linkPic}}", "./images/" + data[i].imageName + ".jpeg")
//         .replace("{{gameID}}", i);

//       $(".content").append(current_item_html);
//     }
//   })
// }






var contentDetailExist = 0;
//show game content
function show_game_detail(obj) {
  // var gameContent ="<div class='contentDetail'></div>";

  // show_game_detail();
  console.log("物件: " + obj.id);
  var gameContent =
    "<div id='del_content' class='contentDetail'>" +
    "<div class='contentTitle'>" +
    "<div class='contentTitleDetail'>{{contentTitleDetail}}</div>" +
    "</div>" +
    "<div class='contentPurpose'>" +
    "<div class='contentPurposeTitle'>目的</div>" +
    "<div class='contentPurposeDetail'>{{contentPurposeDetail}}</div>" +
    "</div>" +
    "<div class='contentNumber'>" +
    "<div class='contentNumberTitle'>人數</div>" +
    "<div class='contentNumberDetail'>{{contentNumberDetail}}</div>" +
    "</div>" +
    "<div class='contentItem'>" +
    "<div class='contentItemTitle'>物資</div>" +
    "<div class='contentItemDetail'>{{contentItemDetail}}</div>" +
    "</div>" +
    "<div class='contentRules'>" +
    "<div class='contentRulesTitle'>玩法</div>" +
    "<div class='contentRulesDetail'>" +
    "{{contentRulesDetail}}" +
    "</div>" +
    // "</div>" +
    "<div class='contentSuggest'>" +
    "<div class='contentSuggestTitle'>建議</div>" +
    "<div class='contentSuggestDetail'>" + "{{contentSuggestDetail}}" +
    "</div>" +
    // "</div>" +
    "<div class='contentVideo'>" +
    //"<iframe class='contentVideoDetail' src='https://www.youtube.com/embed/XN031PuViqI?list=PL2SrkGHjnWcyWbA4MGSeTQVNiFHt1YbjC' frameborder='0' allowfullscreen></iframe>" +
    "</div>" +
    "<div class='del_btn' onclick='del_Btn()'>X</div>" +
    "</div>" +
    "</div>";


  var gameContentOutput = gameContent
    .replace("{{contentTitleDetail}}", apiData[obj.id].name)
    .replace("{{contentPurposeDetail}}", apiData[obj.id].purpose)
    .replace("{{contentNumberDetail}}", apiData[obj.id].numbers)
    .replace("{{contentItemDetail}}", apiData[obj.id].items)
    .replace("{{contentRulesDetail}}", apiData[obj.id].rules)
    .replace("{{contentSuggestDetail}}", "暫無");



  $(".content").append(gameContentOutput);
  $('.contentDetail').css('height', ($(window).height()) - 160);

}

// checkBox.cooperation=1;
// checkBox.compete=1;

function relist() {
  //relist
  var storeList = [];
  $.getJSON("./transferExcelToJson/ice_break_format.json", function (data) {
    for (var x = 0; x < data.length; x++) {
      if (checkBox[data[x].cata] == 1) {
        // console.log("find it");
        console.log(data[x].name);
        storeList.push(x);
      }
    }


    console.log("長度: " + storeList.length);

    //del
    if (storeList.length > 0) {
      del_test();
      console.log("刪除完了");
      //repush
      for (var i = 0; i < storeList.length; i++) {

        console.log("storeList: " + storeList[i]);

        //抓取storeList 裡面真的有filter的game
        //取代模板位置成資料replace(要取代的,取代成...)
        var current_item_html = list_html
          // .replace("{{gameID}}", i)
          .replace("{{listNum}}", "list" + storeList[i] + 1)
          .replace("{{listPicNum}}", "listPic" + storeList[i] + 1)
          .replace("{{listNameNum}}", "listName" + storeList[i] + 1)
          .replace("{{listPicNum}}", "listPic" + storeList[i] + 1)
          .replace("{{listContentNum}}", "listContent" + storeList[i] + 1)
          .replace("{{gameName}}", data[storeList[i]].name)
          .replace("{{gamePurpose}}", data[storeList[i]].purpose)
          .replace("{{linkPic}}", "./images/" + data[storeList[i]].imageName + ".jpeg")
          .replace("{{gameID}}", storeList[i]);

        $(".content").append(current_item_html);
      }
    }
    else {
      createList();
    }
  })
}
// relist();


function findKey(inputDict, value, compare = (a, b) => a === b) {
  return Object.keys(inputDict).find(k => compare(inputDict[k], value))
}

// var val = checkBox.cooperation
// console.log(findKey(checkBox, val)) // b

// 自定义比较函数，比如结合 lodash 可以
// findKey({a: 98, b: 'str'}, _.isEqual) // d





$('.nav').click(function () {
  // if (contentDetailExist == 1) {
  $('.contentDetail').remove();
  console.log("123");
  // }
});

function del_Btn(obj) {

  $(".contentDetail").remove();
}

// function del_list() {

// }
// del_list();


function del_test() {
  $('.list').remove();
  console.log("789");
}