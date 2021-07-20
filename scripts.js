
var optionStatus=0
$(".option").click(function () {
    if (optionStatus==0) {
        $(".optionContent").css("display","block");
        optionStatus=1;
    } else {
        $(".optionContent").css("display","none");
        optionStatus=0;
    }
});

var bt1=0
$(".btContent1").click(function(){
    if (bt1==0) {
        $(".btContent1").removeClass("btContentClose");
        $(".btCircle1").removeClass("btCircleClose");
        $(".btStatus1").removeClass("btStatusClose");
        $(".btContent1").addClass("btContentOpen");
        $(".btCircle1").addClass("btCircleOpen");
        $(".btStatus1").addClass("btStatusOpen");
        $(".btStatus1").text("開");
        bt1=1;
    } else {
        $(".btContent1").removeClass("btContentOpen");
        $(".btCircle1").removeClass("btCircleOpen");
        $(".btStatus1").removeClass("btStatusOpen");
        $(".btContent1").addClass("btContentClose");
        $(".btCircle1").addClass("btCircleClose");
        $(".btStatus1").addClass("btStatusClose");
        $(".btStatus1").text("關");
        bt1=0;
    }
});

var bt2=0
$(".btContent2").click(function(){
    if (bt2==0) {
        $(".btContent2").removeClass("btContentClose");
        $(".btCircle2").removeClass("btCircleClose");
        $(".btStatus2").removeClass("btStatusClose");
        $(".btContent2").addClass("btContentOpen");
        $(".btCircle2").addClass("btCircleOpen");
        $(".btStatus2").addClass("btStatusOpen");
        $(".btStatus2").text("開");
        bt2=1;
    } else {
        $(".btContent2").removeClass("btContentOpen");
        $(".btCircle2").removeClass("btCircleOpen");
        $(".btStatus2").removeClass("btStatusOpen");
        $(".btContent2").addClass("btContentClose");
        $(".btCircle2").addClass("btCircleClose");
        $(".btStatus2").addClass("btStatusClose");
        $(".btStatus2").text("關");
        bt2=0;
    }
});