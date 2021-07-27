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
    "<div class='list {{listNum}}'><div class='listPic {{listPicNum}}'><img class='listPic {{listPicNum}}' src='{{linkPic}}'></div><div class='listName {{listNameNum}}'>{{gameName}}</div><div class='listContent {{listContentNum}}'>{{gamePurpose}}</div></div>";

$.getJSON("./transferExcelToJson/ice_break_format.json", function (data) {
    
    console.log(data);
    
    for (var i = 0; i < data.length; i++) {
        //取代模板位置成資料replace(要取代的,取代成...)
        var current_item_html = list_html
            .replace("{{listNum}}", "list" + i+1)
            .replace("{{listPicNum}}", "listPic" + i+1)
            .replace("{{listNameNum}}", "listName" + i+1)
            .replace("{{listPicNum}}", "listPic" + i+1)
            .replace("{{listContentNum}}", "listContent" + i+1)
            .replace("{{gameName}}", data[i].name)
            .replace("{{gamePurpose}}", data[i].purpose)
            .replace("{{linkPic}}", "./images/"+data[i].imageName+".jpeg");
            
        $(".content").append(current_item_html);
    }
});
