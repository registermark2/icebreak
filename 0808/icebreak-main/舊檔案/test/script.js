var flag =0
$('.settingOption').css('display','none');
$(".setting").click(function(){
  if(flag==0){
    $(".setBlock").addClass("settingBlock");
    $('.setting').addClass("setTrans");
    $('.settingOption').css('display','block');
    flag=1;
  }else{
    $(".setBlock").removeClass("settingBlock");
    $('.setting').removeClass("setTrans");
    $('.settingOption').css('display','none');
    flag=0;
  }
});

var settingFlag1 =0
$(".switch1").click(function(){
  
  if(settingFlag1==0){
    // $(".setBlock").addClass("settingBlock");
    // $('.setting').addClass("setTrans");
    $('.button1').css('background-color','#D5ECC2');
    $('.switch1').css('left','65px');
    $('.switch1').css('background-color','#98DDCA');
    settingFlag1=1;
  }else{
    $('.button1').css('background-color','#FFD3B4');
    $('.switch1').css('left','5px');
    $('.switch1').css('background-color','#FFAAA7');
    settingFlag1=0;
  }
});


var settingFlag2 =0
$(".switch2").click(function(){
  
  if(settingFlag2==0){
    // $(".setBlock").addClass("settingBlock");
    // $('.setting').addClass("setTrans");
    $('.button2').css('background-color','#D5ECC2');
    $('.switch2').css('left','65px');
    $('.switch2').css('background-color','#98DDCA');
    settingFlag2=1;
  }else{
    $('.button2').css('background-color','#FFD3B4');
    $('.switch2').css('left','5px');
    $('.switch2').css('background-color','#FFAAA7');
    settingFlag2=0;
  }
});

var settingFlag3 =0
$(".switch3").click(function(){
  
  if(settingFlag3==0){
    // $(".setBlock").addClass("settingBlock");
    // $('.setting').addClass("setTrans");
    $('.button3').css('background-color','#D5ECC2');
    $('.switch3').css('left','65px');
    $('.switch3').css('background-color','#98DDCA');
    settingFlag3=1;
  }else{
    $('.button3').css('background-color','#FFD3B4');
    $('.switch3').css('left','5px');
    $('.switch3').css('background-color','#FFAAA7');
    settingFlag3=0;
  }
});