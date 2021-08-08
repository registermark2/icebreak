
var listTemplate =
    "<div class='col-sm-4'>" +
    "<div id={{gameID}} class='card' data-bs-toggle='modal' data-bs-target='#listGame' onclick='updateGameDetial(this)'>" +
    "<img src={{linkPic}} class='card-img-top'>" +
    "<div class='card-body' >" +
    "<h5 class='card-title'>{{gameName}}</h5>" +
    "<p class='card-text'>{{gamePurpose}}</p>" +
    "</div>" +
    "</div>" +
    "</div>"

function createList() {
    $.getJSON("./transferExcelToJson/ice_break_format.json", function (data) {
        console.log(data);

        for (var i = 0; i < data.length; i++) {
            //取代模板位置成資料replace(要取代的,取代成...)
            var current_item_html = listTemplate
                .replace("{{gameName}}", data[i].name)
                .replace("{{gamePurpose}}", data[i].purpose)
                .replace("{{linkPic}}", "./imagesss/" + data[i].imageName + ".jpeg")
                .replace("{{gameID}}", i);

            $("#listData").append(current_item_html);
        }
    });
}


function updateGameDetial(obj) {
    // console.log(obj);
    $.getJSON("./transferExcelToJson/ice_break_format.json", function (data) {
        console.log(obj.id);
        $('#gameTitle').text(data[obj.id].name);
        $('#gamePurpose').text(data[obj.id].purpose);
        $('#gameNumber').text(data[obj.id].numbers);
        $('#gameItem').text(data[obj.id].items);
        $('#gameRule').text(data[obj.id].rules);
    })
}





// 第一次刷新
createList();


function switchTest(obj){
    // console.log($(obj).is(':checked'));
    if($(obj).is(':checked')==true){
        console.log("開");
    }
}



// $("input")


// $(".form-switch").bootstrapSwitch({
//     onSwitchChange: function (e, state) {
//         console.log(state);
//     }
// });


// handleChange: function (event, state) {
//     console.log(state);
//     this.setState({storyStatus: state});
// },

// $('#mySwitch input').bootstrapSwitch({
//     onText: 'On',
//     offText: 'Off'
// });