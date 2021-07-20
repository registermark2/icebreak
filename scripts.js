
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
