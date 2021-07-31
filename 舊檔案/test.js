//滑動離開頂部時就取消at_top的class
$(window).scroll(function (e) {
    topHeight = $(window).scrollTop();
    $(".test").css("top", topHeight+200);
});