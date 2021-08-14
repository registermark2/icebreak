
var listTemplate =
    "<div class='col-sm-6 col-md-3'>" +
    "<div id={{gameID}} class='card' data-bs-toggle='modal' data-bs-target='#listGame' onclick='updateGameDetial(this)'>" +
    "<img src={{linkPic}} class='card-img-top'>" +
    "<div class='card-body' >" +
    "<h2 class='card-title'>{{gameName}}</h2>" +
    "<p class='card-text'>{{gamePurpose}}</p>" +
    "</div>" +
    "</div>" +
    "</div>"


var checkchanged = 0
function reList() {
    var storeList = [];
    $.getJSON("./transferExcelToJson/ice_break_format.json", function (data) {
        console.log(data);

        // filter cata
        for (var x = 0; x < data.length; x++) {
            // console.log(data[x].cata);
            if (filterList[data[x].cata] == 1) {
                // console.log("find it");
                console.log(data[x].name);
                storeList.push(x);
            }
        }

        console.log(storeList);

        if (storeList.length > 0) {
            $('#listData').empty();
            console.log('刪除');
            for (var i = 0; i < storeList.length; i++) {
                //取代模板位置成資料replace(要取代的,取代成...)
                console.log(data[storeList[i]]);
                var current_item_html = listTemplate
                    .replace("{{gameName}}", data[storeList[i]].name)
                    .replace("{{gamePurpose}}", data[storeList[i]].purpose)
                    .replace("{{linkPic}}", "./imagesss/" + data[storeList[i]].imageName + ".jpeg")
                    .replace("{{gameID}}", storeList[i]);

                $("#listData").append(current_item_html);
            }
            checkchanged = 1;
        }
        else if (checkchanged == 1) {
            $('#listData').empty();
            createList();
            checkchanged = 0;
        }
    });
}


function createList() {
    var storeList = [];
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




var filterList = {
    static: 0,
    items: 0,
    remind: 0,
    strategy: 0,
}


function switchButton(obj) {
    console.log(obj);
    var button = new bootstrap.Button(obj);
    button.toggle();

    if ($(obj).attr('aria-pressed') === 'true') {
        if (obj.value == '靜態') {
            filterList.static = 1;
        }
        if (obj.value == '道具') {
            filterList.items = 1;
        }
        if (obj.value == '反思') {
            filterList.remind = 1;
        }
        if (obj.value == '攻略') {
            filterList.strategy = 1;
        }
    }
    if ($(obj).attr('aria-pressed') === 'false') {
        if (obj.value == '靜態') {
            filterList.static = 0;
        }
        if (obj.value == '道具') {
            filterList.items = 0;
        }
        if (obj.value == '反思') {
            filterList.remind = 0;
        }
        if (obj.value == '攻略') {
            filterList.strategy = 0;
        }
    }

    // 第一次刷新
    reList();
    console.log(filterList);
}


// 第一次刷新
createList();