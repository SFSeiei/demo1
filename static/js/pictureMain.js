/**
 * @Author Zhangxp
 * @Date 2019.07.11
 */
$(document).ready(function () {
    /**
     * Ajax获取本地文本内容
     */
    // function fiter(data) {
    //     var subData = data;
    //     if (data.indexOf("FINISH E") >= 0){
    //         var subdata1 = data.substring(data.indexOf("FINISH E")+8);
    //         fiter(subdata1)
    //     }else if(data.indexOf("MATERIAL") >= 0){
    //         var subdata2 = data.substring(data.indexOf("MATERIAL")+8);
    //         fiter(subdata2)
    //     }else if(data.indexOf("PARTS No") >= 0){
    //         var subdata3 = data.substring(data.indexOf("PARTS No")+8);
    //         fiter(subdata3)
    //     }else if(data.indexOf("TITLE") >= 0){
    //         var subdata4 = data.substring(data.indexOf("TITLE")+5);
    //         fiter(subdata4)
    //     }else {
    //         alert()
    //     }
    // }
    // $.ajax({
    //     url: "../static/select_crop_image_text/6027B-1-Z380-FINISH.txt",
    //     success: function (data, status) {
    //         // console.log(fiter(data))
    //         if (data.indexOf("FINISH E") >= 0) {
    //             var subdata1 = data.substring(data.indexOf("FINISH E") + 8);
    //             this.success(subdata1)
    //         } else if (data.indexOf("MATERIAL") >= 0) {
    //             var subdata2 = data.substring(data.indexOf("MATERIAL") + 8);
    //             this.success(subdata2)
    //         } else if (data.indexOf("PARTS No") >= 0) {
    //             var subdata3 = data.substring(data.indexOf("PARTS No") + 8);
    //             this.success(subdata3)
    //         } else if (data.indexOf("TITLE") >= 0) {
    //             var subdata4 = data.substring(data.indexOf("TITLE") + 5);
    //             this.success(subdata4)
    //         } else {
    //             console.log(data)
    //         }
    //     },
    //     error: function (data, status) {
    //         alert("数据读取失败！")
    //     }
    // });
    /**
     * 检查是否支持ActiveXObject
     */
    // function () {
    //     var xmlHttp;
    //     //判断浏览器是否支持ActiveX控件
    //     if (window.ActiveXObject) {
    //         //支持-通过ActiveXObject的一个新实例来创建XMLHttpRequest对象
    //         xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    //         alert("can");
    //     }
    //         //不支持
    //     else if (window.XMLHttpRequest) {
    //         alert("cannot");
    //         xmlHttp = new XMLHttpRequest()
    //     }
    // }
    for (var i = 0; i < draw.length; i++) {
        $("#seriesSelect").append(
            "<option id='option" + i + "' value='series" + i + "'>" + draw[i].series + "</option>"
        )
    }
    $("#seriesTable tbody tr").remove();
    for (var j = 0; j < draw[0].draw.length; j++) {
        // alert(j)
        k = j + 1;
        $("#seriesTable").append(
            "<tr onclick='itemMassage(" + 0 + "," + j + ")'>\n" +
            "<td style='text-align: center'>" + k + "</td>\n" +
            "<td style='text-align: center'>" + draw[0].draw[j].ID + "</td>\n" +
            "<td style='text-align: center'>" + draw[0].draw[j].jishu + "</td>\n" +
            "<td style='text-align: center'>" + draw[0].draw[j].bicchi + "</td>\n" +
            "<td style='text-align: center'>" + draw[0].draw[j].jiedianxingzhuang + "</td>\n" +
            "<td style='text-align: center'>" + draw[0].draw[j].mawanto + "</td>\n" +
            "</tr>"
        )
    }

    $("#labelNum").text(k);
});
/**
 * @description 定义全局变量。
 */
var fIndex = 'nan';
var sIndex = 'nan';
var obj = "";
/**
 * @description 监听选择系列下拉框。
 */
$('#seriesSelect').change(function (e) {
    seriesSelect($('#seriesSelect').get(0).selectedIndex);
    fIndex = 'nan';
    sIndex = 'nan';
    $('#labelTitle').text('title');
    $('#titleTarea').val('');
    $('#materialTarea').val('');
    $('#finishTarea').val('');
    $('#partsTarea').val('');
    $('#biosCbox').prop("checked", false);
    $('#capCbox').prop("checked", false);
    $('#viewSelect option').remove();
    $("#imageDiv select").remove();
    $("#imageDiv input").remove();
    obj = "";
    $("#viewImg").attr("src", "");
});


function seriesSelect(Index) {
    $("#seriesTable tbody tr").remove();
    for (var i = 0; i < draw[Index].draw.length; i++) {
        k = i + 1;
        $("#seriesTable").append(
            "<tr onclick='itemMassage(" + Index + "," + i + ")'>\n" +
            "<td style='text-align: center'>" + k + "</td>\n" +
            "<td style='text-align: center'>" + draw[Index].draw[i].ID + "</td>\n" +
            "<td style='text-align: center'>" + draw[Index].draw[i].jishu + "</td>\n" +
            "<td style='text-align: center'>" + draw[Index].draw[i].bicchi + "</td>\n" +
            "<td style='text-align: center'>" + draw[Index].draw[i].jiedianxingzhuang + "</td>\n" +
            "<td style='text-align: center'>" + draw[Index].draw[i].mawanto + "</td>\n" +
            "</tr>"
        )
    }
    $("#labelNum").text(k);
}

/**
 * @description 选择列表项，展示详细信息。
 * @param obj
 */
// $('#seriesTable').click(function(e){
//     e = e || window.event;//处理兼容，获取事件对象
//     var oTarget = e.tagName || e.srcElement;//处理兼容，获取事件目标
//     // console.log(oTarget.parentElement.id);
//     itemMassage(oTarget.parentElement.id)
// });

function itemMassage(index1, index2) {
    fIndex = index1;
    sIndex = index2;
    $('#labelTitle').text(draw[index1].draw[index2].ID);
}

$("#ReAttributeButton").click(function () {
    if (fIndex == "nan" || sIndex == "nan") {
        alert("请选择图纸！")
    } else {
        index1 = fIndex;
        index2 = sIndex;
        // console.log($("#labelTitle").text());
        // console.log(document.getElementById('labelTitle').innerHTML);
        $('#titleTarea').val(draw[index1].draw[index2].title);
        $('#materialTarea').val(draw[index1].draw[index2].material);
        $('#finishTarea').val(draw[index1].draw[index2].finish);
        $('#partsTarea').val(draw[index1].draw[index2].parts);
        $('#biosCbox').prop("checked", draw[index1].draw[index2].bios);
        $('#capCbox').prop("checked", draw[index1].draw[index2].cap);
        $('#viewSelect option').remove();
        $('#viewSelect').append(
            "<option value='yuantu'>原図</option>" +
            "<option value='biaoge'>表 </option>" +
            "<option value='zhushitu'>前ビュ </option>" +
            "<option value='fushitu'>俯むくビュ</option>" +
            "<option value='ceshitu'>右側ビュ</option>"
        );
        obj = draw[fIndex].draw[sIndex].yuantu;
    }
})

/**
 * @description 选择视图，在子页面中展示。
 */
$('#viewSelect').change(function (e) {
    if ($('#viewSelect').get(0).value == "yuantu") {
        obj = draw[fIndex].draw[sIndex].yuantu;
    } else if ($('#viewSelect').get(0).value == "zhushitu") {
        obj = draw[fIndex].draw[sIndex].zhushitu;
    } else if ($('#viewSelect').get(0).value == "fushitu") {
        obj = draw[fIndex].draw[sIndex].fushitu;
    } else if ($('#viewSelect').get(0).value == "ceshitu") {
        obj = draw[fIndex].draw[sIndex].ceshitu;
    } else {
        obj = draw[fIndex].draw[sIndex].biaoge;
    }
});
// $("#predictButton").click(function () {
//     $("#iframeSub").attr("src", "./Picture.html");
//     sendMassage();
// });
// function sendMassage() {
//     $("#iframeSub")[0].contentWindow.zhushitu = draw[fIndex].draw[sIndex].zhushitu;
//
// }
// $("#predictButton2").click(function () {
// alert($('#viewSelect').get(0).value)
// $("#testT").text("ddd");
// $("#iframeSub")[0].contentWindow.zhushitu = draw[fIndex].draw[sIndex].zhushitu;
// });
//
// $("#testTB").click(function () {
//     // alert($('#viewSelect').get(0).value)
//     $("#testT").text("123");
// });
/**
 * @description 点击predictButton调取图片，并生成下拉框。
 */
var imgIndex = 0;
$("#predictButton").click(function () {
    // alert($('#viewSelect').get(0).value)
    // $("#testT").text("ddd");
    // $("#imageDiv select").remove();
    imgIndex = 0;
    // console.log(obj);
    if (obj == "") {
        alert("请选择图纸!");
    } else {
        /*加载子页面*/
        // $("#divTest").load("../templates/Picture.html", function (responseTxt, statusTxt, xhr) {
            // console.log(statusTxt);
            // if (statusTxt == "success") {
                loadImg(imgIndex);
                if (obj.length > 1) {
                    var xb = $('#divTest').position().left;
                    var yb = $('#divTest').position().top;
                    var xb1 = xb + 220;
                    var yb1 = yb + 490;
                    /* +30 */
                    var xb2 = xb + 220 + 210;
                    var yb2 = yb + 490;
                    var b1 = $("<input id='preb' class='moreButton btn btn-primary' type='button' value='前へ' style='position: absolute;left: " + xb1 + "px;top: " + yb1 + "px;'/>");
                    var b2 = $("<input id='nextb' class='moreButton btn btn-primary' type='button' value='後ろへ' style='position: absolute;left: " + xb2 + "px;top: " + yb2 + "px;'/>");
                    $("#imageDiv").append(b1);
                    $("#imageDiv").append(b2);
                    $("#preb").click(function () {
                        if (imgIndex == 0) {
                            alert("前にはありません！");
                        } else {

                            imgIndex = imgIndex - 1;
                            loadImg(imgIndex)
                        }
                    });
                    $("#nextb").click(function () {
                        if (imgIndex == obj.length - 1) {
                            alert("後ろにはありません！");
                        } else {
                            imgIndex = imgIndex + 1;
                            loadImg(imgIndex)
                        }
                    });
                }
            // }
            // if (statusTxt == "error")
            //     alert("Error: " + xhr.status + ": " + xhr.statusText);
        // });
    }
});

function loadImg(index) {
    $("#imageDiv select").remove();
    if (JSON.stringify(obj[index]) == "{}") {
        alert('画像がありません!');
    } else {
        $("#viewImg").attr("src", ".././static/images/testImage/" + obj[index].name);
        if ($('#viewSelect').get(0).value == "zhushitu" || $('#viewSelect').get(0).value == "fushitu" || $('#viewSelect').get(0).value == "ceshitu") {
            createSelect(index);
        }
    }
}

function createSelect(index) {
    for (var i = 0; i < obj[index].value.length; i++) {
        var x = $('#divTest').position().left;
        var y = $('#divTest').position().top;
        // var z = $('#divTest').height();
        // console.log(obj[index].value[i]);
        if (JSON.stringify(obj[index].value[i]) != "{}") {
            x = x + obj[index].value[i].vertices[0].x;
            y = y + obj[index].value[i].vertices[0].y;
            /*根据坐标生成select标签*/
            var doc = $("<select name='" + i + "' id='valueSelect" + i + "' class='viewSelected' style='position: absolute;left: " + x + "px;top: " + y + "px;'>" +
                "</select>");
            $("#imageDiv").append(doc);
            for (var j = 0; j < obj[index].value[i].description.length; j++) {
                var opt = $("<option value='value" + j + "'>" + obj[index].value[i].description[j] + "</option>");
                $("#valueSelect" + i).append(opt);
            }
            /*为每一个生成的select绑定事件*/
            $("#valueSelect" + i).change(function (e) {
                // console.log(e.target.selectedIndex);
                // var ind = e.target.selectedIndex;
                for (var k = 0; k < obj[index].value.length; k++) {
                    $("#valueSelect" + k).get(0).selectedIndex = e.target.selectedIndex;
                }
            })
        }
    }
}

// var opt = document.getElementById("ReAttributeButton");
//     opt.addEventListener("click",function () {
//         console.log("123");
//     });
// $("#valueSelect0").addEventListener("change",function (ev) {
//    console.log(ev.target);
// });

/**
 * @description 预设数据。
 */
// var draw1 = [
//     {
//         "series": "6027",
//         "number": 2,
//         "draw": [{
//             "ID": "6027B-1-Z354-PT1-2D",
//             "yuantu": [{"name": "6027B-1-Z354-PT1-2D--1.jpg"}],
//             "biaoge": [{"name": "6027B-1-Z354-PT1-2D--10-0.jpg"}],
//             "zhushitu": [{
//                 "name": "6027B-1-Z354-PT1-2D--11-1.jpg",
//                 "value": [{
//                     "description": ["0.64±0.02", "0.32±0.02", "0.16±0.02"],
//                     'vertices': [{
//                         'x': 599,
//                         'y': 33
//                     }, {
//                         'x': 620,
//                         'y': 32
//                     }, {
//                         'x': 621,
//                         'y': 43
//                     }, {
//                         'x': 600,
//                         'y': 44
//                     }]
//                 }, {
//                     "description": ["3.0", "2.0", "1.0"],
//                     'vertices': [{
//                         'x': 622,
//                         'y': 382
//                     }, {
//                         'x': 622,
//                         'y': 388
//                     }, {
//                         'x': 636,
//                         'y': 388
//                     }, {
//                         'x': 636,
//                         'y': 412
//                     }]
//                 }, {
//                     "description": ["9.0", "8.0", "7.0"],
//                     'vertices': [{
//                         'x': 623,
//                         'y': 190
//                     }, {
//                         'x': 633,
//                         'y': 196
//                     }, {
//                         'x': 624,
//                         'y': 196
//                     }, {
//                         'x': 624,
//                         'y': 190
//                     }]
//                 }, {
//                     "description": ["14.0", "13.0", "12.0"],
//                     'vertices': [{
//                         'x': 657,
//                         'y': 266
//                     }, {
//                         'x': 657,
//                         'y': 264
//                     }, {
//                         'x': 668,
//                         'y': 264
//                     }, {
//                         'x': 668,
//                         'y': 286
//                     }]
//                 }, {
//                     "description": ["2.0", "1.0", "0.5"],
//                     'vertices': [{
//                         'x': 623,
//                         'y': 323
//                     }, {
//                         'x': 626,
//                         'y': 261
//                     }, {
//                         'x': 652,
//                         'y': 262
//                     }, {
//                         'x': 649,
//                         'y': 324
//                     }]
//                 }, {
//                     "description": ["①","①","①"],
//                     'vertices': [{
//                         'x': 38,
//                         'y': 492
//                     }, {
//                         'x': 620,
//                         'y': 32
//                     }, {
//                         'x': 621,
//                         'y': 43
//                     }, {
//                         'x': 600,
//                         'y': 44
//                     }]
//                 }, {
//                     "description": ["②","②","②"],
//                     'vertices': [{
//                         'x': 82,
//                         'y': 452
//                     }, {
//                         'x': 620,
//                         'y': 32
//                     }, {
//                         'x': 621,
//                         'y': 43
//                     }, {
//                         'x': 600,
//                         'y': 44
//                     }]
//                 }]
//             }],
//             "fushitu": [{
//                 "name": "6027B-1-Z354-PT1-2D--12-2.jpg",
//                 "value": [{
//                     "description": ["2.5", "1.5", "0.5"],
//                     'vertices': [{
//                         'x': 74,
//                         'y': 266
//                     }, {
//                         'x': 112,
//                         'y': 266
//                     }, {
//                         'x': 112,
//                         'y': 293
//                     }, {
//                         'x': 74,
//                         'y': 293
//                     }]
//                 }, {
//                     "description": ["2.5", "1.5", "0.5"],
//                     'vertices': [{
//                         'x': 631,
//                         'y': 121
//                     }, {
//                         'x': 630,
//                         'y': 102
//                     }, {
//                         'x': 648,
//                         'y': 102
//                     }, {
//                         'x': 649,
//                         'y': 151
//                     }]
//                 }]
//             }],
//             "ceshitu": [{
//                 "name": "6027B-1-Z354-PT1-2D--13-3.jpg",
//                 "value": [{}]
//             }],
//             "title": "6027シリーズ ピンヘッダー\n" +
//             "SERIES 6027 PIN HEADER",
//             "material": "のベース:ガラス入り46ナイロン樹脂,灰色、UL94V-0\n" +
//             "BASE GLASS FILLED 46NYLON\n" +
//             "UL94 V-0, COLOR GRAY\n" +
//             "7/PIN /BRASS",
//             "parts": "6027 B-\n" +
//             "3 54 PT1",
//             "finish": "/PRE-PLATE\n" +
//             "T OVER NICKEL PLATE 1mMIN\n" +
//             "zO TIN REFLOW PLATE 2HMMIN",
//             "bios": true,
//             "cap": false,
//             "jishu": 65,
//             "bicchi": 0.6,
//             "jiedianxingzhuang": "片面接点",
//             "mawanto": "SMT"
//         }, {
//             "ID": "6027B-1-Z380-PT1-2D",
//             "yuantu": [{"name": "6027B-1-Z380-PT1-2D--1.jpg"}],
//             "biaoge": [{"name": "6027B-1-Z380-PT1-2D--10-0.jpg"},{"name": "6027B-1-Z354-PT1-2D--10-0.jpg"}],
//             "zhushitu": [{
//                 "name": "6027B-1-Z380-PT1-2D--11-1.jpg",
//                 "value": [{
//                     "description": ["0.8", "0.5", "0.2"],
//                     'vertices': [{
//                         'x': 57,
//                         'y': 62
//                     }, {
//                         'x': 105,
//                         'y': 62
//                     }, {
//                         'x': 105,
//                         'y': 81
//                     }, {
//                         'x': 57,
//                         'y': 81
//                     }]
//                 }, {
//                     "description": ["0.64±0.02", "0.32±0.02", "0.16±0.02"],
//                     'vertices': [{
//                         'x': 562,
//                         'y': 59
//                     }, {
//                         'x': 582,
//                         'y': 58
//                     }, {
//                         'x': 583,
//                         'y': 69
//                     }, {
//                         'x': 563,
//                         'y': 70
//                     }]
//                 }, {
//                     "description": ["11.4", "9.4", "7.4"],
//                     'vertices': [{
//                         'x': 586,
//                         'y': 208
//                     }, {
//                         'x': 586,
//                         'y': 196
//                     }, {
//                         'x': 596,
//                         'y': 196
//                     }, {
//                         'x': 596,
//                         'y': 208
//                     }]
//                 }, {
//                     "description": ["2.9±0.3", "1.9±0.3", "0.9±0.3"],
//                     'vertices': [{
//                         'x': 613,
//                         'y': 487
//                     }, {
//                         'x': 611,
//                         'y': 463
//                     }, {
//                         'x': 624,
//                         'y': 462
//                     }, {
//                         'x': 627,
//                         'y': 486
//                     }]
//                 }, {
//                     "description": ["13.4±0.2", "10.4±0.2", "7.4±0.2"],
//                     'vertices': [{
//                         'x': 618,
//                         'y': 267
//                     }, {
//                         'x': 617,
//                         'y': 251
//                     }, {
//                         'x': 627,
//                         'y': 250
//                     }, {
//                         'x': 628,
//                         'y': 266
//                     }]
//                 }, {
//                     "description": ["16.3", "13.3", "10.3"],
//                     'vertices': [{
//                         'x': 653,
//                         'y': 291
//                     }, {
//                         'x': 653,
//                         'y': 269
//                     }, {
//                         'x': 669,
//                         'y': 269
//                     }, {
//                         'x': 669,
//                         'y': 291
//                     }]
//                 }, {
//                     "description": ["2.0", "1.5", "1.0"],
//                     'vertices': [{
//                         'x': 623,
//                         'y': 323
//                     }, {
//                         'x': 626,
//                         'y': 261
//                     }, {
//                         'x': 652,
//                         'y': 262
//                     }, {
//                         'x': 649,
//                         'y': 324
//                     }]
//                 }, {
//                     "description": ["①","①","①"],
//                     'vertices': [{
//                         'x': 78,
//                         'y': 492
//                     }, {
//                         'x': 620,
//                         'y': 32
//                     }, {
//                         'x': 621,
//                         'y': 43
//                     }, {
//                         'x': 600,
//                         'y': 44
//                     }]
//                 }, {
//                     "description": ["②","②","②"],
//                     'vertices': [{
//                         'x': 122,
//                         'y': 452
//                     }, {
//                         'x': 620,
//                         'y': 32
//                     }, {
//                         'x': 621,
//                         'y': 43
//                     }, {
//                         'x': 600,
//                         'y': 44
//                     }]
//                 }]
//             }],
//             "fushitu": [{
//                 "name": "6027B-1-Z380-PT1-2D--12-2.jpg",
//                 "value": [{
//                     "description": ["2.5±0.1", "1.5±0.1", "0.5±0.1"],
//                     'vertices': [{
//                         'x': 188,
//                         'y': 284
//                     }, {
//                         'x': 203,
//                         'y': 283
//                     }, {
//                         'x': 206,
//                         'y': 311
//                     }, {
//                         'x': 191,
//                         'y': 313
//                     }]
//                 }, {
//                     "description": ["2.5", "1.5", "0.5"],
//                     'vertices': [{
//                         'x': 641,
//                         'y': 183
//                     }, {
//                         'x': 641,
//                         'y': 146
//                     }, {
//                         'x': 657,
//                         'y': 146
//                     }, {
//                         'x': 657,
//                         'y': 203
//                     }]
//                 }]
//             }],
//             "ceshitu": [{
//                 "name": "6027B-1-Z380-PT1-2D--13-3.jpg",
//                 "value": [{}]
//             }],
//             "title": "6027シリーズ ピンヘッダー\n" +
//             "SERIES 6027 PIN HEADER",
//             "material": "のペース:ガラス入り66ナイロン樹脂\n" +
//             "自然色(アイボリー)、 UL94V-0\n" +
//             "D BASE GLASS FILLED 66NYLON\n" +
//             "UL94 V-0, COLOR NATURAL (/VORY)\n" +
//             "7/PIN BRASS",
//             "parts": "6027B-Z380-PT1",
//             "finish": "/PRE-PLATE\n" +
//             "y /0VER Ni PLATE 1. OMMIN\n" +
//             "U70-8/TIN REFLOW PLATE 2. OHMMIN.",
//             "bios": false,
//             "cap": true,
//             "jishu": 70,
//             "bicchi": 0.5,
//             "jiedianxingzhuang": "片面接点",
//             "mawanto": "SMT"
//         }, {
//             "ID": "6027B-Z313-PT1-2D",
//             "yuantu": [{"name": "6027B-Z313-PT1-2D--1.jpg"}],
//             "biaoge": [{"name": "6027B-Z313-PT1-2D--10-0.jpg"}],
//             "zhushitu": [{
//                 "name": "6027B-Z313-PT1-2D--11-1.jpg",
//                 "value": [{
//                     "description": ["0.64±0.02", "0.32±0.02", "0.16±0.02"],
//                     'vertices': [{
//                         'x': 557,
//                         'y': 35
//                     }, {
//                         'x': 579,
//                         'y': 33
//                     }, {
//                         'x': 580,
//                         'y': 47
//                     }, {
//                         'x': 559,
//                         'y': 49
//                     }]
//                 }, {
//                     "description": ["3.0", "2.0", "1.0"],
//                     'vertices': [{
//                         'x': 592,
//                         'y': 334
//                     }, {
//                         'x': 592,
//                         'y': 325
//                     }, {
//                         'x': 604,
//                         'y': 325
//                     }, {
//                         'x': 604,
//                         'y': 334
//                     }]
//                 }, {
//                     "description": ["11.0", "9.0", "7.0"],
//                     'vertices': [{
//                         'x': 638,
//                         'y': 223
//                     }, {
//                         'x': 638,
//                         'y': 209
//                     }, {
//                         'x': 651,
//                         'y': 209
//                     }, {
//                         'x': 651,
//                         'y': 223
//                     }]
//                 }, {
//                     "description": ["6.0", "4.0", "2.0"],
//                     'vertices': [{
//                         'x': 592,
//                         'y': 176
//                     }, {
//                         'x': 593,
//                         'y': 167
//                     }, {
//                         'x': 606,
//                         'y': 167
//                     }, {
//                         'x': 605,
//                         'y': 196
//                     }]
//                 }, {
//                     "description": ["2.0", "1.5", "1.0"],
//                     'vertices': [{
//                         'x': 593,
//                         'y': 282
//                     }, {
//                         'x': 594,
//                         'y': 272
//                     }, {
//                         'x': 608,
//                         'y': 272
//                     }, {
//                         'x': 607,
//                         'y': 302
//                     }]
//                 }, {
//                     "description": ["①","①","①"],
//                     'vertices': [{
//                         'x': 38,
//                         'y': 482
//                     }, {
//                         'x': 620,
//                         'y': 32
//                     }, {
//                         'x': 621,
//                         'y': 43
//                     }, {
//                         'x': 600,
//                         'y': 44
//                     }]
//                 }, {
//                     "description": ["②","②","②"],
//                     'vertices': [{
//                         'x': 82,
//                         'y': 447
//                     }, {
//                         'x': 620,
//                         'y': 32
//                     }, {
//                         'x': 621,
//                         'y': 43
//                     }, {
//                         'x': 600,
//                         'y': 44
//                     }]
//                 }]
//             }],
//             "fushitu": [{
//                 "name": "6027B-Z313-PT1-2D--12-2.jpg",
//                 "value": [{
//                     "description": ["2.5", "1.5", "0.5"],
//                     'vertices': [{
//                         'x': 121,
//                         'y': 260
//                     }, {
//                         'x': 162,
//                         'y': 259
//                     }, {
//                         'x': 163,
//                         'y': 285
//                     }, {
//                         'x': 122,
//                         'y': 286
//                     }]
//                 }, {
//                     "description": ["2.5", "1.5", "0.5"],
//                     'vertices': [{
//                         'x': 631,
//                         'y': 133
//                     }, {
//                         'x': 641,
//                         'y': 146
//                     }, {
//                         'x': 657,
//                         'y': 146
//                     }, {
//                         'x': 657,
//                         'y': 203
//                     }]
//                 }]
//             }],
//             "ceshitu": [{
//                 "name": "6027B-Z313-PT1-2D--13-3.jpg",
//                 "value": [{}]
//             }],
//             "title": "6027シリーズ ピンヘッダー\n" +
//             "SERIES 6027 PIN HEADER",
//             "material": "のペース:ガラス入り66ナイロン樹脂\n" +
//             "自然色(アイボリー)、 UL94V-0\n" +
//             "D BASE GLASS FILLED 66NYLON\n" +
//             "UL94 V-0, COLOR NATURAL (/VORY)\n" +
//             "7/PIN BRASS",
//             "parts": "6027B-Z380-PT1",
//             "finish": "/PRE-PLATE\n" +
//             "y /0VER Ni PLATE 1. OMMIN\n" +
//             "U70-8/TIN REFLOW PLATE 2. OHMMIN.",
//             "bios": false,
//             "cap": true,
//             "jishu": 40,
//             "bicchi": 0.4,
//             "jiedianxingzhuang": "片面接点",
//             "mawanto": "SMT"
//         }]
//     }, {
//         "series": "4099",
//         "number": 1,
//         "draw": [{
//             "ID": "4099T-01Y900-2D",
//             "yuantu": [{"name": "4099T-01Y900-2D-_1-2.jpg"}],
//             "biaoge": [{"name": ""}],
//             "zhushitu": [{
//                 "name": "4099T-01Y900-2D-_1-2-0.jpg",
//                 "value": [{
//                     "description": ["0.36", "0.18", "0.9"],
//                     'vertices': [{
//                         'x': 399,
//                         'y': 397
//                     }, {
//                         'x': 436,
//                         'y': 396
//                     }, {
//                         'x': 437,
//                         'y': 428
//                     }, {
//                         'x': 400,
//                         'y': 429
//                     }]
//                 },
//                     {
//                         "description": ["0.2", "0.15", "0.1"],
//                         'vertices': [{
//                             'x': 576,
//                             'y': 397
//                         }, {
//                             'x': 611,
//                             'y': 397
//                         }, {
//                             'x': 611,
//                             'y': 427
//                         }, {
//                             'x': 576,
//                             'y': 427
//                         }]
//                     },
//                     {
//                         "description": ["2.9", "1.9", "0.9"],
//                         'vertices': [{
//                             'x': 341,
//                             'y': 449
//                         }, {
//                             'x': 452,
//                             'y': 450
//                         }, {
//                             'x': 452,
//                             'y': 473
//                         }, {
//                             'x': 341,
//                             'y': 472
//                         }]
//                     },
//                     {
//                         "description": ["1.35 ±0.1", "1.25 ±0.1", "1.15 ±0.1"],
//                         'vertices': [{
//                             'x': 98,
//                             'y': 249
//                         }, {
//                             'x': 98,
//                             'y': 234
//                         }, {
//                             'x': 113,
//                             'y': 234
//                         }, {
//                             'x': 113,
//                             'y': 249
//                         }]
//                     },
//                     {
//                         "description": ["1.45 ±0.1", "1.25 ±0.1", "1.05 ±0.1"],
//                         'vertices': [{
//                             'x': 601,
//                             'y': 248
//                         }, {
//                             'x': 602,
//                             'y': 228
//                         }, {
//                             'x': 621,
//                             'y': 229
//                         }, {
//                             'x': 620,
//                             'y': 249
//                         }]
//                     }
//                 ]
//             }],
//             "fushitu": [{
//                 "name": "4099T-01Y900-2D-_1-2-1.jpg",
//                 "value": [{
//                     "description": ["1.55", "1.35", "1.15"],
//                     'vertices': [{
//                         'x': 237,
//                         'y': 52
//                     }, {
//                         'x': 318,
//                         'y': 52
//                     }, {
//                         'x': 318,
//                         'y': 95
//                     }, {
//                         'x': 237,
//                         'y': 95
//                     }]
//                 }, {
//                     "description": ["1", "0.5", "0.1"],
//                     'vertices': [{
//                         'x': 464,
//                         'y': 73
//                     }, {
//                         'x': 525,
//                         'y': 73
//                     }, {
//                         'x': 525,
//                         'y': 116
//                     }, {
//                         'x': 464,
//                         'y': 116
//                     }]
//                 }, {
//                     "description": ["1.3", "1.0", "0.7"],
//                     'vertices': [{
//                         'x': 102,
//                         'y': 324
//                     }, {
//                         'x': 102,
//                         'y': 310
//                     }, {
//                         'x': 122,
//                         'y': 310
//                     }, {
//                         'x': 122,
//                         'y': 324
//                     }]
//                 }, {
//                     "description": ["0.55", "0.35", "0.15"],
//                     'vertices': [{
//                         'x': 619,
//                         'y': 343
//                     }, {
//                         'x': 619,
//                         'y': 309
//                     }, {
//                         'x': 645,
//                         'y': 309
//                     }, {
//                         'x': 645,
//                         'y': 343
//                     }]
//                 }]
//             }],
//             "ceshitu": [{
//                 "name": "4099T-01Y900-2D-_1-2-2.jpg",
//                 "value": [{
//                     "description": ["1.3", "1.1", "0.9"],
//                     'vertices': [{
//                         'x': 313,
//                         'y': 29
//                     }, {
//                         'x': 372,
//                         'y': 29
//                     }, {
//                         'x': 372,
//                         'y': 52
//                     }, {
//                         'x': 313,
//                         'y': 52
//                     }]
//                 }, {
//                     "description": ["0.7", "0.5", "0.3"],
//                     'vertices': [{
//                         'x': 316,
//                         'y': 80
//                     }, {
//                         'x': 371,
//                         'y': 81
//                     }, {
//                         'x': 371,
//                         'y': 104
//                     }, {
//                         'x': 316,
//                         'y': 103
//                     }]
//                 }]
//             }, {
//                 "name": "4099T-01Y900-2D-_1-2-3.jpg",
//                 "value": [{
//                     "description": ["0.65", "0.45", "0.25"],
//                     'vertices': [{
//                         'x': 410,
//                         'y': 336
//                     }, {
//                         'x': 450,
//                         'y': 334
//                     }, {
//                         'x': 452,
//                         'y': 374
//                     }, {
//                         'x': 412,
//                         'y': 376
//                     }]
//                 }, {
//                     "description": ["1.1", "0.9", "0.7"],
//                     'vertices': [{
//                         'x': 402,
//                         'y': 388
//                     }, {
//                         'x': 454,
//                         'y': 388
//                     }, {
//                         'x': 454,
//                         'y': 420
//                     }, {
//                         'x': 402,
//                         'y': 420
//                     }]
//                 }, {
//                     "description": ["1.95", "1.45", "1.05"],
//                     'vertices': [{
//                         'x': 344,
//                         'y': 451
//                     }, {
//                         'x': 408,
//                         'y': 451
//                     }, {
//                         'x': 408,
//                         'y': 482
//                     }, {
//                         'x': 344,
//                         'y': 482
//                     }]
//                 }, {
//                     "description": ["0.7", "0.5", "0.3"],
//                     'vertices': [{
//                         'x': 585,
//                         'y': 167
//                     }, {
//                         'x': 585,
//                         'y': 154
//                     }, {
//                         'x': 605,
//                         'y': 154
//                     }, {
//                         'x': 605,
//                         'y': 167
//                     }]
//                 }]
//             }],
//             "title": "4099 シリーズ エンボス\n" +
//             "SERIES 4099 EMBOSS PRODUCT A",
//             "material": "7PET, PE, PEF\n" +
//             "CARRIER TAPE PS (BLACK)\n" +
//             "2REEL PS (WHI TE STATIC ELECTRICITY PREVENTION)\n" +
//             "3COVER TAPE :\n" +
//             "PET, PE, PEF (CLEAR STATIC ELECTRICITY PREVENTION)",
//             "parts": "IPS-4099T-01Y900",
//             "finish": "7PET, PE, PEF\n" +
//             "CARRIER TAPE PS (BLACK)\n" +
//             "2REEL PS (WHI TE STATIC ELECTRICITY PREVENTION)\n" +
//             "3COVER TAPE :\n" +
//             "PET, PE, PEF (CLEAR STATIC ELECTRICITY PREVENTION)",
//             "bios": false,
//             "cap": true,
//             "jishu": 60,
//             "bicchi": 0.8,
//             "jiedianxingzhuang": "二点接点",
//             "mawanto": "SMT"
//         }]
//     }
// ];
var draw = [
    {
        "series": "9854",
        "number": 1,
        "draw": [{
            "ID": "9854S-Y943-2D",
            "yuantu": [{"name": "9854S-Y943-2D-_1-2.jpg"}],
            "biaoge": [{"name": "9854S-Y943-2D-_1-2-0.jpg"}],
            "zhushitu": [{
                "name": "9854S-Y943-2D-_1-2-1.jpg",
                "value": [{
                    "description": ["0.8", "0.6", "0.4"],
                    'vertices': [{
                        'x': 52,
                        'y': 58
                    }, {
                        'x': 96,
                        'y': 58
                    }, {
                        'x': 96,
                        'y': 77
                    }, {
                        'x': 52,
                        'y': 77
                    }]
                }, {
                    "description": ["1.75", "1.55", "1.35"],
                    'vertices': [{
                        'x': 50,
                        'y': 91
                    }, {
                        'x': 74,
                        'y': 91
                    }, {
                        'x': 74,
                        'y': 112
                    }, {
                        'x': 50,
                        'y': 112
                    }]
                }, {
                    "description": ["A", "A", "A"],
                    'vertices': [{
                        'x': 324,
                        'y': 95
                    }, {
                        'x': 342,
                        'y': 95
                    }, {
                        'x': 342,
                        'y': 114
                    }, {
                        'x': 324,
                        'y': 114
                    }]
                }, {
                    "description": ["B", "B", "B"],
                    'vertices': [{
                        'x': 324,
                        'y': 62
                    }, {
                        'x': 342,
                        'y': 95
                    }, {
                        'x': 342,
                        'y': 114
                    }, {
                        'x': 324,
                        'y': 114
                    }]
                }, {
                    "description": ["C", "C", "C"],
                    'vertices': [{
                        'x': 324,
                        'y': 25
                    }, {
                        'x': 342,
                        'y': 95
                    }, {
                        'x': 342,
                        'y': 114
                    }, {
                        'x': 324,
                        'y': 114
                    }]
                }, {
                    "description": ["1", "0.8", "0.6"],
                    'vertices': [{
                        'x': 256,
                        'y': 131
                    }, {
                        'x': 261,
                        'y': 131
                    }, {
                        'x': 261,
                        'y': 148
                    }, {
                        'x': 256,
                        'y': 148
                    }]
                }, {
                    "description": ["0.4", "0.3", "0.2"],
                    'vertices': [{
                        'x': 487,
                        'y': 422
                    }, {
                        'x': 528,
                        'y': 422
                    }, {
                        'x': 528,
                        'y': 442
                    }, {
                        'x': 487,
                        'y': 442
                    }]
                }, {
                    "description": ["基準ピン(BASE PIN)", "基準ピン(BASE PIN)", "基準ピン(BASE PIN)"],
                    'vertices': [{
                        'x': 64,
                        'y': 437
                    }, {
                        'x': 113,
                        'y': 438
                    }, {
                        'x': 113,
                        'y': 463
                    }, {
                        'x': 64,
                        'y': 462
                    }]
                }, {
                    "description": ["(3.7)", "(2.7)", "(1.7)"],
                    'vertices': [{
                        'x': 34,
                        'y': 279
                    }, {
                        'x': 54,
                        'y': 285
                    }, {
                        'x': 72,
                        'y': 286
                    }, {
                        'x': 72,
                        'y': 300
                    }]
                }, {
                    "description": ["0.8", "0.6", "0.4"],
                    'vertices': [{
                        'x': 562,
                        'y': 169
                    }, {
                        'x': 562,
                        'y': 147
                    }, {
                        'x': 580,
                        'y': 147
                    }, {
                        'x': 580,
                        'y': 169
                    }]
                }, {
                    "description": ["n(CKT)", "n(CKT)", "n(CKT)"],
                    'vertices': [{
                        'x': 562,
                        'y': 59
                    }, {
                        'x': 562,
                        'y': 147
                    }, {
                        'x': 580,
                        'y': 147
                    }, {
                        'x': 580,
                        'y': 169
                    }]
                }, {
                    "description": ["1.5", "1.0", "0.5"],
                    'vertices': [{
                        'x': 587,
                        'y': 144
                    }, {
                        'x': 587,
                        'y': 134
                    }, {
                        'x': 605,
                        'y': 134
                    }, {
                        'x': 605,
                        'y': 144
                    }]
                }, {
                    "description": ["1", "0.8", "0.6"],
                    'vertices': [{
                        'x': 627,
                        'y': 124
                    }, {
                        'x': 587,
                        'y': 134
                    }, {
                        'x': 605,
                        'y': 134
                    }, {
                        'x': 605,
                        'y': 144
                    }]
                }, {
                    "description": ["4.5", "3.5", "2.5"],
                    'vertices': [{
                        'x': 614,
                        'y': 299
                    }, {
                        'x': 614,
                        'y': 297
                    }, {
                        'x': 629,
                        'y': 297
                    }, {
                        'x': 629,
                        'y': 309
                    }]
                }, {
                    "description": ["(6.5)", "(5.5)", "(4.5)"],
                    'vertices': [{
                        'x': 644,
                        'y': 281
                    }, {
                        'x': 644,
                        'y': 259
                    }, {
                        'x': 664,
                        'y': 259
                    }, {
                        'x': 664,
                        'y': 331
                    }]
                }]
            }],
            "fushitu": [{
                "name": "9854S-Y943-2D-_1-2-2.jpg",
                "value": [{
                    "description": ["8", "6", "4"],
                    'vertices': [{
                        'x': 616,
                        'y': 256
                    }, {
                        'x': 630,
                        'y': 102
                    }, {
                        'x': 648,
                        'y': 102
                    }, {
                        'x': 649,
                        'y': 151
                    }]
                }]
            }],
            "ceshitu": [{
                "name": "9854S-Y943-2D-_1-2-3.jpg",
                "value": [{
                    "description": ["(+)", "(+)", "(+)"],
                    'vertices': [{
                        'x': 171,
                        'y': 289
                    }, {
                        'x': 199,
                        'y': 289
                    }, {
                        'x': 199,
                        'y': 310
                    }, {
                        'x': 171,
                        'y': 310
                    }]
                }, {
                    "description": ["(-)", "(-)", "(-)"],
                    'vertices': [{
                        'x': 171,
                        'y': 489
                    }, {
                        'x': 199,
                        'y': 289
                    }, {
                        'x': 199,
                        'y': 310
                    }, {
                        'x': 171,
                        'y': 310
                    }]
                }, {
                    "description": ["0.25", "0.15", "0.05"],
                    'vertices': [{
                        'x': 601,
                        'y': 304
                    }, {
                        'x': 601,
                        'y': 274
                    }, {
                        'x': 636,
                        'y': 274
                    }, {
                        'x': 636,
                        'y': 314
                    }]
                }, {
                    "description": ["②", "②", "②"],
                    'vertices': [{
                        'x': 561,
                        'y': 464
                    }, {
                        'x': 601,
                        'y': 274
                    }, {
                        'x': 636,
                        'y': 274
                    }, {
                        'x': 636,
                        'y': 314
                    }]
                }, {
                    "description": ["①", "①", "①"],
                    'vertices': [{
                        'x': 601 - 315,
                        'y': 304 - 260
                    }, {
                        'x': 601,
                        'y': 274
                    }, {
                        'x': 636,
                        'y': 274
                    }, {
                        'x': 636,
                        'y': 314
                    }]
                }, {
                    "description": ["0 ±0.1", "0 ±0.1", "0 ±0.1"],
                    'vertices': [{
                        'x': 561 - 454 - 30,
                        'y': 464 - 130 - 10
                    }, {
                        'x': 601,
                        'y': 274
                    }, {
                        'x': 636,
                        'y': 274
                    }, {
                        'x': 636,
                        'y': 314
                    }]
                }]
            }],
            "title": "9854シリーズソケット\n" +
            "SERIES 9854 SOCKET",
            "material": "のハウジング\n" +
            "の端 子\n" +
            "ガラス入り9Tナイロン樹脂 黒色 UL94V-0\n" +
            "リン青銅(t=0. 25)\n" +
            "OHOUSING\n" +
            "CONTACT\n" +
            ": GRASS FILLED 9T NYLON BLACK UL94V-0\n" +
            "PHOSPHOR BRONZE (t-0. 25)",
            "parts": "98545-**H-GT2",
            "finish": "ニッケル下地めっき/ OVER Ni PLATE : 1.5~3.5μm\n" +
            "コンタクト側/CONTACT SIDE : Sn 3~61μm 錫半光沢/TIN MATT\n" +
            "ソルダーテール側/TAIL SIDE : Aw 0.03μmMIN.",
            "bios": false,
            "cap": false,
            "jishu": 30,
            "bicchi": 1,
            "jiedianxingzhuang": "両面接点",
            "mawanto": "SMT"
        }]
    }, {
        "series": "9855",
        "number": 1,
        "draw": [{
            "ID": "9855S-Y945-2D",
            "yuantu": [{"name": "9855S-Y945-2D-_1-2.jpg"}],
            "biaoge": [{"name": "9855S-Y945-2D-_1-2-0.jpg"}],
            "zhushitu": [{
                "name": "9855S-Y945-2D-_1-2-1.jpg",
                "value": [{
                    "description": ["C", "C", "C"],
                    'vertices': [{
                        'x': 350,
                        'y': 47
                    }, {
                        'x': 364,
                        'y': 47
                    }, {
                        'x': 363,
                        'y': 59
                    }, {
                        'x': 356,
                        'y': 59
                    }]
                }, {
                    "description": ["В", "В", "В"],
                    'vertices': [{
                        'x': 350,
                        'y': 81
                    }, {
                        'x': 366,
                        'y': 82
                    }, {
                        'x': 366,
                        'y': 97
                    }, {
                        'x': 350,
                        'y': 96
                    }]
                }, {
                    "description": ["A", "A", "A"],
                    'vertices': [{
                        'x': 350,
                        'y': 119
                    }, {
                        'x': 364,
                        'y': 119
                    }, {
                        'x': 364,
                        'y': 134
                    }, {
                        'x': 350,
                        'y': 134
                    }]
                }, {
                    "description": ["0.8", "0.6", "0.4"],
                    'vertices': [{
                        'x': 53,
                        'y': 78
                    }, {
                        'x': 92,
                        'y': 79
                    }, {
                        'x': 92,
                        'y': 94
                    }, {
                        'x': 53,
                        'y': 93
                    }]
                }, {
                    "description": ["1.75", "1.55", "1.35"],
                    'vertices': [{
                        'x': 61,
                        'y': 115
                    }, {
                        'x': 87,
                        'y': 115
                    }, {
                        'x': 87,
                        'y': 132
                    }, {
                        'x': 61,
                        'y': 132
                    }]
                }, {
                    "description": ["0.4", "0.3", "0.2"],
                    'vertices': [{
                        'x': 511,
                        'y': 477
                    }, {
                        'x': 550,
                        'y': 478
                    }, {
                        'x': 550,
                        'y': 494
                    }, {
                        'x': 511,
                        'y': 493
                    }]
                }, {
                    "description": ["②", "②", "②"],
                    'vertices': [{
                        'x': 511 - 272,
                        'y': 477 + 12
                    }, {
                        'x': 550,
                        'y': 478
                    }, {
                        'x': 550,
                        'y': 494
                    }, {
                        'x': 511,
                        'y': 493
                    }]
                },
                    {
                        "description": ["1.5", "1.3", "1.1"],
                        'vertices': [{
                            'x': 602 - 25,
                            'y': 329 + 20
                        }, {
                            'x': 602,
                            'y': 327
                        }, {
                            'x': 617,
                            'y': 327
                        }, {
                            'x': 617,
                            'y': 349
                        }]
                    },
                    {
                        "description": ["1", "0.8", "0.6"],
                        'vertices': [{
                            'x': 641,
                            'y': 188
                        }, {
                            'x': 602,
                            'y': 228
                        }, {
                            'x': 621,
                            'y': 229
                        }, {
                            'x': 620,
                            'y': 249
                        }]
                    },
                    {
                        "description": ["4.5", "3.5", "2.5"],
                        'vertices': [{
                            'x': 641,
                            'y': 318
                        }, {
                            'x': 602,
                            'y': 228
                        }, {
                            'x': 621,
                            'y': 229
                        }, {
                            'x': 620,
                            'y': 249
                        }]
                    },
                    {
                        "description": ["1", "0.8", "0.6"],
                        'vertices': [{
                            'x': 641,
                            'y': 448
                        }, {
                            'x': 602,
                            'y': 228
                        }, {
                            'x': 621,
                            'y': 229
                        }, {
                            'x': 620,
                            'y': 249
                        }]
                    },
                    {
                        "description": ["1", "0.8", "0.6"],
                        'vertices': [{
                            'x': 641 - 415,
                            'y': 318 - 180
                        }, {
                            'x': 602,
                            'y': 228
                        }, {
                            'x': 621,
                            'y': 229
                        }, {
                            'x': 620,
                            'y': 249
                        }]
                    }
                ]
            }],
            "fushitu": [{
                "name": "9855S-Y945-2D-_1-2-2.jpg",
                "value": [{
                    "description": ["0.5", "0.3", "0.1"],
                    'vertices': [{
                        'x': 623,
                        'y': 437
                    }, {
                        'x': 623,
                        'y': 432
                    }, {
                        'x': 642,
                        'y': 432
                    }, {
                        'x': 642,
                        'y': 447
                    }]
                }, {
                    "description": ["4.35", "3.35", "2.35"],
                    'vertices': [{
                        'x': 626,
                        'y': 230
                    }, {
                        'x': 626,
                        'y': 222
                    }, {
                        'x': 640,
                        'y': 222
                    }, {
                        'x': 640,
                        'y': 250
                    }]
                }, {
                    "description": ["1.3", "1.0", "0.7"],
                    'vertices': [{
                        'x': 42,
                        'y': 414
                    }, {
                        'x': 102,
                        'y': 310
                    }, {
                        'x': 122,
                        'y': 310
                    }, {
                        'x': 122,
                        'y': 324
                    }]
                }, {
                    "description": ["D", "D", "D"],
                    'vertices': [{
                        'x': 619 - 280,
                        'y': 343 + 85
                    }, {
                        'x': 619,
                        'y': 309
                    }, {
                        'x': 645,
                        'y': 309
                    }, {
                        'x': 645,
                        'y': 343
                    }]
                }, {
                    "description": ["①", "①", "①"],
                    'vertices': [{
                        'x': 626 - 315,
                        'y': 230 - 190
                    }, {
                        'x': 626,
                        'y': 222
                    }, {
                        'x': 640,
                        'y': 222
                    }, {
                        'x': 640,
                        'y': 250
                    }]
                }]
            }],
            "ceshitu": [{
                "name": "9855S-Y945-2D-_1-2-3.jpg",
                "value": [{
                    "description": ["(+)", "(+)", "(+)"],
                    'vertices': [{
                        'x': 171,
                        'y': 189
                    }, {
                        'x': 199,
                        'y': 289
                    }, {
                        'x': 199,
                        'y': 310
                    }, {
                        'x': 171,
                        'y': 310
                    }]
                }, {
                    "description": ["(-)", "(-)", "(-)"],
                    'vertices': [{
                        'x': 171,
                        'y': 414
                    }, {
                        'x': 199,
                        'y': 289
                    }, {
                        'x': 199,
                        'y': 310
                    }, {
                        'x': 171,
                        'y': 310
                    }]
                }, {
                    "description": ["0.25", "0.15", "0.05"],
                    'vertices': [{
                        'x': 601,
                        'y': 224
                    }, {
                        'x': 601,
                        'y': 274
                    }, {
                        'x': 636,
                        'y': 274
                    }, {
                        'x': 636,
                        'y': 314
                    }]
                }, {
                    "description": ["2.9", "1.9", "0.9"],
                    'vertices': [{
                        'x': 400,
                        'y': 450
                    }, {
                        'x': 601,
                        'y': 274
                    }, {
                        'x': 636,
                        'y': 274
                    }, {
                        'x': 636,
                        'y': 314
                    }]
                }, {
                    "description": ["0.6", "0.4", "0.2"],
                    'vertices': [{
                        'x': 601 - 315 + 275,
                        'y': 304 - 260 + 335
                    }, {
                        'x': 601,
                        'y': 274
                    }, {
                        'x': 636,
                        'y': 274
                    }, {
                        'x': 636,
                        'y': 314
                    }]
                }, {
                    "description": ["0 ±0.1", "0 ±0.1", "0 ±0.1"],
                    'vertices': [{
                        'x': 561 - 454 - 50,
                        'y': 464 - 130 - 10 - 125
                    }, {
                        'x': 601,
                        'y': 274
                    }, {
                        'x': 636,
                        'y': 274
                    }, {
                        'x': 636,
                        'y': 314
                    }]
                }]
            }],
            "title": "9855シリーズ ソケット\n" +
            "SERIES 9855 SOCKET",
            "material": "のハウジング :ガラス入り9Tナイロン樹脂、黒色, UL94V-0\n" +
            "HOUS ING GLASS FILLED 9TNYLON, BLACK, UL94V-0\n" +
            "の端\n" +
            ": リン青銅(t=0.25)\n" +
            "子\n" +
            "CONTACT: PHOSPHOR BRONZE (t=0. 25)",
            "parts": "9855-*Z04-GT2",
            "finish": "ニッケル下地めっき/0VER Ni PLATE: 1.5~3.5μm\n" +
            "コンタクト側/CONTACT SIDE: Sn 3~6μm 錫半光沢/TIN MATT\n" +
            "6ソルダーテール側/TAIL SIDE: Au 0.031μmbMIN.",
            "bios": true,
            "cap": false,
            "jishu": 18,
            "bicchi": 1,
            "jiedianxingzhuang": "両面接点",
            "mawanto": "SMT"
        }]
    }, {
        "series": "9892",
        "number": 1,
        "draw": [{
            "ID": "9892B-Y930-2D",
            "yuantu": [{"name": "9892B-Y930-2D-_1-2.jpg"}],
            "biaoge": [{"name": "9892B-Y930-2D-_1-2-0.jpg"}],
            "zhushitu": [{
                "name": "9892B-Y930-2D-_1-2-1.jpg",
                "value": [{
                    "description": ["A ±0.2", "A ±0.2", "A ±0.2"],
                    'vertices': [{
                        'x': 304,
                        'y': 372
                    }, {
                        'x': 436,
                        'y': 396
                    }, {
                        'x': 437,
                        'y': 428
                    }, {
                        'x': 400,
                        'y': 429
                    }]
                }, {
                    "description": ["B", "B", "B"],
                    'vertices': [{
                        'x': 304,
                        'y': 397
                    }, {
                        'x': 436,
                        'y': 396
                    }, {
                        'x': 437,
                        'y': 428
                    }, {
                        'x': 400,
                        'y': 429
                    }]
                }, {
                    "description": ["C", "C", "C"],
                    'vertices': [{
                        'x': 304,
                        'y': 422
                    }, {
                        'x': 436,
                        'y': 396
                    }, {
                        'x': 437,
                        'y': 428
                    }, {
                        'x': 400,
                        'y': 429
                    }]
                }, {
                    "description": ["D", "D", "D"],
                    'vertices': [{
                        'x': 304,
                        'y': 447
                    }, {
                        'x': 436,
                        'y': 396
                    }, {
                        'x': 437,
                        'y': 428
                    }, {
                        'x': 400,
                        'y': 429
                    }]
                }, {
                    "description": ["(E)", "(E)", "(E)"],
                    'vertices': [{
                        'x': 304,
                        'y': 472
                    }, {
                        'x': 436,
                        'y': 396
                    }, {
                        'x': 437,
                        'y': 428
                    }, {
                        'x': 400,
                        'y': 429
                    }]
                },
                    {
                        "description": ["2.75", "1.75", "0.75"],
                        'vertices': [{
                            'x': 576,
                            'y': 397 - 365
                        }, {
                            'x': 611,
                            'y': 397
                        }, {
                            'x': 611,
                            'y': 427
                        }, {
                            'x': 576,
                            'y': 427
                        }]
                    }, {
                        "description": ["1.5", "1.3", "1.1"],
                        'vertices': [{
                            'x': 341 - 325,
                            'y': 439
                        }, {
                            'x': 452,
                            'y': 450
                        }, {
                            'x': 452,
                            'y': 473
                        }, {
                            'x': 341,
                            'y': 472
                        }]
                    }, {
                        "description": ["1.5", "1.3", "1.1"],
                        'vertices': [{
                            'x': 341 + 235,
                            'y': 444
                        }, {
                            'x': 452,
                            'y': 450
                        }, {
                            'x': 452,
                            'y': 473
                        }, {
                            'x': 341,
                            'y': 472
                        }]
                    }, {
                        "description": ["基準ピン(BASE PIN)", "基準ピン(BASE PIN)", "基準ピン(BASE PIN)"],
                        'vertices': [{
                            'x': 98,
                            'y': 9
                        }, {
                            'x': 98,
                            'y': 234
                        }, {
                            'x': 113,
                            'y': 234
                        }, {
                            'x': 113,
                            'y': 249
                        }]
                    }, {
                        "description": ["0.25 ±0.05", "0.25 ±0.05", "0.25 ±0.05"],
                        'vertices': [{
                            'x': 98 + 240,
                            'y': 14
                        }, {
                            'x': 98,
                            'y': 234
                        }, {
                            'x': 113,
                            'y': 234
                        }, {
                            'x': 113,
                            'y': 249
                        }]
                    }, {
                        "description": ["n(CKT)", "n(CKT)", "n(CKT)"],
                        'vertices': [{
                            'x': 98 + 390,
                            'y': 14
                        }, {
                            'x': 98,
                            'y': 234
                        }, {
                            'x': 113,
                            'y': 234
                        }, {
                            'x': 113,
                            'y': 249
                        }]
                    }, {
                        "description": ["3.6", "2.6", "1.6"],
                        'vertices': [{
                            'x': 601,
                            'y': 248
                        }, {
                            'x': 602,
                            'y': 228
                        }, {
                            'x': 621,
                            'y': 229
                        }, {
                            'x': 620,
                            'y': 249
                        }]
                    }, {
                        "description": ["(4.5)", "(2.5)", "(0.5)"],
                        'vertices': [{
                            'x': 601,
                            'y': 133
                        }, {
                            'x': 602,
                            'y': 228
                        }, {
                            'x': 621,
                            'y': 229
                        }, {
                            'x': 620,
                            'y': 249
                        }]
                    }, {
                        "description": ["5.5 ±0.2", "3.5 ±0.2", "1.5 ±0.2"],
                        'vertices': [{
                            'x': 651 - 15,
                            'y': 288
                        }, {
                            'x': 602,
                            'y': 228
                        }, {
                            'x': 621,
                            'y': 229
                        }, {
                            'x': 620,
                            'y': 249
                        }]
                    }, {
                        "description": ["7.2", "5.2", "3.2"],
                        'vertices': [{
                            'x': 651 - 15,
                            'y': 248 - 85
                        }, {
                            'x': 602,
                            'y': 228
                        }, {
                            'x': 621,
                            'y': 229
                        }, {
                            'x': 620,
                            'y': 249
                        }]
                    }, {
                        "description": ["12.7", "10.7", "8.7"],
                        'vertices': [{
                            'x': 656,
                            'y': 203
                        }, {
                            'x': 602,
                            'y': 228
                        }, {
                            'x': 621,
                            'y': 229
                        }, {
                            'x': 620,
                            'y': 249
                        }]
                    }, {
                        "description": ["2", "1.5", "1"],
                        'vertices': [{
                            'x': 656,
                            'y': 203 - 125
                        }, {
                            'x': 602,
                            'y': 228
                        }, {
                            'x': 621,
                            'y': 229
                        }, {
                            'x': 620,
                            'y': 249
                        }]
                    }, {
                        "description": ["1.25 ±0.2", "1.15 ±0.2", "1.05 ±0.2"],
                        'vertices': [{
                            'x': 656 - 438,
                            'y': 203 - 125 + 263
                        }, {
                            'x': 602,
                            'y': 228
                        }, {
                            'x': 621,
                            'y': 229
                        }, {
                            'x': 620,
                            'y': 249
                        }]
                    }]
            }],
            "fushitu": [{
                "name": "9892B-Y930-2D-_1-2-2.jpg",
                "value": [{
                    "description": ["(＋)", "(＋)", "(＋)"],
                    'vertices': [{
                        'x': 77,
                        'y': 392 - 140
                    }, {
                        'x': 512,
                        'y': 393
                    }, {
                        'x': 512,
                        'y': 428
                    }, {
                        'x': 467,
                        'y': 427
                    }]
                }, {
                    "description": ["(-)", "(-)", "(-)"],
                    'vertices': [{
                        'x': 77,
                        'y': 392
                    }, {
                        'x': 512,
                        'y': 393
                    }, {
                        'x': 512,
                        'y': 428
                    }, {
                        'x': 467,
                        'y': 427
                    }]
                }, {
                    "description": ["0.6 ±0.1", "0.6 ±0.1", "0.6 ±0.1"],
                    'vertices': [{
                        'x': 487,
                        'y': 397
                    }, {
                        'x': 512,
                        'y': 393
                    }, {
                        'x': 512,
                        'y': 428
                    }, {
                        'x': 467,
                        'y': 427
                    }]
                }, {
                    "description": ["F ±0.2", "F ±0.2", "F ±0.2"],
                    'vertices': [{
                        'x': 330,
                        'y': 437
                    }, {
                        'x': 512,
                        'y': 393
                    }, {
                        'x': 512,
                        'y': 428
                    }, {
                        'x': 467,
                        'y': 427
                    }]
                }, {
                    "description": ["0 ±0.05(NOTE3)", "0 ±0.05(NOTE3)", "0 ±0.05(NOTE3)"],
                    'vertices': [{
                        'x': 41,
                        'y': 220
                    }, {
                        'x': 42,
                        'y': 215
                    }, {
                        'x': 60,
                        'y': 215
                    }, {
                        'x': 59,
                        'y': 260
                    }]
                }, {
                    "description": ["(0.3)", "(0.2)", "(0.1)"],
                    'vertices': [{
                        'x': 620,
                        'y': 253
                    }, {
                        'x': 621,
                        'y': 221
                    }, {
                        'x': 646,
                        'y': 222
                    }, {
                        'x': 645,
                        'y': 254
                    }]
                }, {
                    "description": ["0.6", "0.4", "0.2"],
                    'vertices': [{
                        'x': 653,
                        'y': 451 - 30
                    }, {
                        'x': 653,
                        'y': 408
                    }, {
                        'x': 665,
                        'y': 408
                    }, {
                        'x': 665,
                        'y': 451
                    }]
                }, {
                    "description": ["6.5", "4.5", "2.5"],
                    'vertices': [{
                        'x': 654,
                        'y': 246 - 30
                    }, {
                        'x': 653,
                        'y': 199
                    }, {
                        'x': 668,
                        'y': 199
                    }, {
                        'x': 669,
                        'y': 246
                    }]
                }]
            }],
            "ceshitu": [{
                "name": "9892B-Y930-2D-_1-2-3.jpg",
                "value": [{
                    "description": ["(+)", "(+)", "(+)"],
                    'vertices': [{
                        'x': 565,
                        'y': 227
                    }, {
                        'x': 593,
                        'y': 223
                    }, {
                        'x': 592,
                        'y': 257
                    }, {
                        'x': 564,
                        'y': 256
                    }]
                }, {
                    "description": ["3.05", "2.05", "1.05"],
                    'vertices': [{
                        'x': 255,
                        'y': 395
                    }, {
                        'x': 320,
                        'y': 396
                    }, {
                        'x': 320,
                        'y': 427
                    }, {
                        'x': 255,
                        'y': 426
                    }]
                }, {
                    "description": ["(NOTE4)", "(NOTE4)", "(NOTE4)"],
                    'vertices': [{
                        'x': 43,
                        'y': 405
                    }, {
                        'x': 128,
                        'y': 404
                    }, {
                        'x': 128,
                        'y': 435
                    }, {
                        'x': 43,
                        'y': 436
                    }]
                }, {
                    "description": ["(-)", "(-)", "(-)"],
                    'vertices': [{
                        'x': 567,
                        'y': 431
                    }, {
                        'x': 589,
                        'y': 426
                    }, {
                        'x': 589,
                        'y': 460
                    }, {
                        'x': 567,
                        'y': 460
                    }]
                }, {
                    "description": ["6.65 ±0.2", "4.65 ±0.2", "2.65 ±0.2"],
                    'vertices': [{
                        'x': 198,
                        'y': 456
                    }, {
                        'x': 243,
                        'y': 458
                    }, {
                        'x': 242,
                        'y': 484
                    }, {
                        'x': 197,
                        'y': 482
                    }]
                }, {
                    "description": ["4.15", "3.15", "2.15"],
                    'vertices': [{
                        'x': 363,
                        'y': 459
                    }, {
                        'x': 408,
                        'y': 459
                    }, {
                        'x': 408,
                        'y': 485
                    }, {
                        'x': 363,
                        'y': 485
                    }]
                }, {
                    "description": ["0.55", "0.35", "0.15"],
                    'vertices': [{
                        'x': 515,
                        'y': 200
                    }, {
                        'x': 515,
                        'y': 187
                    }, {
                        'x': 533,
                        'y': 187
                    }, {
                        'x': 533,
                        'y': 253
                    }]
                }, {
                    "description": ["+0.05 -0.10(NOTE3)", "+0.05 -0.10(NOTE3)", "+0.05 -0.10(NOTE3)"],
                    'vertices': [{
					'x': 620,
					'y': 260
				}, {
					'x': 621,
					'y': 206
				}, {
					'x': 634,
					'y': 206
				}, {
					'x': 633,
					'y': 266
				}]
                }]
            }],
            "title": "9892シリーズ プラグ\n" +
            "SERIES 9892 PLUG",
            "material": "のベース/BASE\n" +
            "のポスト/POST\n" +
            "の金具/DEVICE\n" +
            "LCP樹脂, GF40%,黒色/ BLACK UL94V-0\n" +
            ": リン青銅PHOSPHOR BRONZE ( t=0.25)\n" +
            ": 黄銅 /BRASS ( t=0.3)",
            "parts": "9892B**Z08-TM1",
            "finish": "23\n" +
            "ニッケル下地めっき/OVER NICKEL PLATE: 1.5~3.5μm.\n" +
            "半光沢錫めっき/ TIN MATT PLATE: 3.0~6.0um.\n",
            "bios": true,
            "cap": false,
            "jishu": 19,
            "bicchi": 0.5,
            "jiedianxingzhuang": "下接点",
            "mawanto": "SMT"
        }]
    }, {
        "series": "9985",
        "number": 1,
        "draw": [{
            "ID": "9985S-Y920-2D",
            "yuantu": [{"name": "9985S-Y920-2D-_1-2.jpg"}],
            "biaoge": [{"name": "9985S-Y920-2D-_1-2-0.jpg"}, {"name": "9985S-Y920-2D-_1-2-1.jpg"}],
            "zhushitu": [{
                "name": "9985S-Y920-2D-_1-2-5.jpg",
                "value": [{
                    "description": ["A ±0.15", "A ±0.15", "A ±0.15"],
                    'vertices': [{
					'x': 297,
					'y': 75
				}, {
					'x': 309,
					'y': 79
				}, {
					'x': 308,
					'y': 101
				}, {
					'x': 296,
					'y': 100
				}]
                }, {
                    "description": ["B", "B", "B"],
                    'vertices': [{
					'x': 297,
					'y': 18
				}, {
					'x': 309,
					'y': 79
				}, {
					'x': 308,
					'y': 101
				}, {
					'x': 296,
					'y': 100
				}]
                },{
                    "description": ["C", "C", "C"],
                    'vertices': [{
					'x': 297,
					'y': 468
				}, {
					'x': 309,
					'y': 79
				}, {
					'x': 308,
					'y': 101
				}, {
					'x': 296,
					'y': 100
				}]
                },{
                    "description": ["0.2 ±0.05", "0.15 ±0.05", "0.1 ±0.05"],
                    'vertices': [{
					'x': 391,
					'y': 136
				}, {
					'x': 418,
					'y': 137
				}, {
					'x': 417,
					'y': 160
				}, {
					'x': 390,
					'y': 159
				}]
                }, {
                    "description": ["0.5 ±0.1", "0.4 ±0.1", "0.3 ±0.05"],
                    'vertices': [{
					'x': 182,
					'y': 130
				}, {
					'x': 223,
					'y': 134
				}, {
					'x': 221,
					'y': 157
				}, {
					'x': 180,
					'y': 154
				}]
                }, {
                    "description": ["4.2", "3.2", "2.2"],
                    'vertices': [{
					'x': 621,
					'y': 275
				}, {
					'x': 621,
					'y': 266
				}, {
					'x': 636,
					'y': 266
				}, {
					'x': 636,
					'y': 280
				}]
                }, {
                    "description": ["1.7", "1.5", "1.3"],
                    'vertices': [{
					'x': 622,
					'y': 143
				}, {
					'x': 622,
					'y': 136
				}, {
					'x': 641,
					'y': 136
				}, {
					'x': 641,
					'y': 148
				}]
                }, {
                    "description": ["10.5", "9.5", "8.5"],
                    'vertices': [{
					'x': 667,
					'y': 331
				}, {
					'x': 667,
					'y': 313
				}, {
					'x': 682,
					'y': 313
				}, {
					'x': 682,
					'y': 336
				}]
                }]
            }],
            "fushitu": [{
                "name": "9985S-Y920-2D-_1-2-3.jpg",
                "value": [{
                    "description": ["A ±0.15", "A ±0.15", "A ±0.15"],
                    'vertices': [{
                        'x': 287,
                        'y': 455
                    }, {
                        'x': 318,
                        'y': 52
                    }, {
                        'x': 318,
                        'y': 95
                    }, {
                        'x': 237,
                        'y': 95
                    }]
                }, {
                    "description": ["9.7", "9.5", "9.3"],
                    'vertices': [{
                        'x': 464+164,
                        'y': 73+134
                    }, {
                        'x': 525,
                        'y': 73
                    }, {
                        'x': 525,
                        'y': 116
                    }, {
                        'x': 464,
                        'y': 116
                    }]
                }, {
                    "description": ["0.5 ±0.1", "0.3 ±0.1", "0.1 ±0.1"],
                    'vertices': [{
                        'x': 173,
                        'y': 396
                    }, {
                        'x': 102,
                        'y': 310
                    }, {
                        'x': 122,
                        'y': 310
                    }, {
                        'x': 122,
                        'y': 324
                    }]
                }, {
                    "description": ["0.2 ±0.05", "0.15 ±0.05", "0.1 ±0.05"],
                    'vertices': [{
                        'x': 393,
                        'y': 396
                    }, {
                        'x': 102,
                        'y': 310
                    }, {
                        'x': 122,
                        'y': 310
                    }, {
                        'x': 122,
                        'y': 324
                    }]
                },{
                    "description": ["0.55", "0.35", "0.15"],
                    'vertices': [{
                        'x': 619,
                        'y': 383
                    }, {
                        'x': 619,
                        'y': 309
                    }, {
                        'x': 645,
                        'y': 309
                    }, {
                        'x': 645,
                        'y': 343
                    }]
                },{
                    "description": ["X", "X", "X"],
                    'vertices': [{
                        'x': 619-216,
                        'y': 383-32
                    }, {
                        'x': 619,
                        'y': 309
                    }, {
                        'x': 645,
                        'y': 309
                    }, {
                        'x': 645,
                        'y': 343
                    }]
                },{
                    "description": ["X", "X", "X"],
                    'vertices': [{
                        'x': 619-226,
                        'y': 383-361
                    }, {
                        'x': 619,
                        'y': 309
                    }, {
                        'x': 645,
                        'y': 309
                    }, {
                        'x': 645,
                        'y': 343
                    }]
                }]
            }],
            "ceshitu": [{
                "name": "9985S-Y920-2D-_1-2-4.jpg",
                "value": [{
                    "description": ["9.4", "8.4", "7.4"],
                    'vertices': [{
                        'x': 313,
                        'y': 40
                    }, {
                        'x': 372,
                        'y': 29
                    }, {
                        'x': 372,
                        'y': 52
                    }, {
                        'x': 313,
                        'y': 52
                    }]
                }, {
                    "description": ["4.7", "3.7", "2.7"],
                    'vertices': [{
                        'x': 316-255,
                        'y': 80+90
                    }, {
                        'x': 371,
                        'y': 81
                    }, {
                        'x': 371,
                        'y': 104
                    }, {
                        'x': 316,
                        'y': 103
                    }]
                }, {
                    "description": ["9.1", "8.1", "7.1"],
                    'vertices': [{
                        'x': 316+264,
                        'y': 80+159
                    }, {
                        'x': 371,
                        'y': 81
                    }, {
                        'x': 371,
                        'y': 104
                    }, {
                        'x': 316,
                        'y': 103
                    }]
                }]
            }, {
                "name": "9985S-Y920-2D-_1-2-2.jpg",
                "value": [{
                    "description": ["4.5", "3.5", "2.5"],
                    'vertices': [{
                        'x': 399+245,
                        'y': 397-85
                    }, {
                        'x': 436,
                        'y': 396
                    }, {
                        'x': 437,
                        'y': 428
                    }, {
                        'x': 400,
                        'y': 429
                    }]
                },
                    {
                        "description": ["2.1 ±0.1", "1.1 ±0.1", "0.1 ±0.1"],
                        'vertices': [{
                            'x': 616,
                            'y': 447
                        }, {
                            'x': 611,
                            'y': 397
                        }, {
                            'x': 611,
                            'y': 427
                        }, {
                            'x': 576,
                            'y': 427
                        }]
                    }, {
                        "description": ["F ±0.05", "F ±0.05", "F ±0.05"],
                        'vertices': [{
                            'x': 341,
                            'y': 420
                        }, {
                            'x': 452,
                            'y': 450
                        }, {
                            'x': 452,
                            'y': 473
                        }, {
                            'x': 341,
                            'y': 472
                        }]
                    },{
                        "description": ["0.7 ±0.05", "0.5 ±0.05", "0.3 ±0.05"],
                        'vertices': [{
                            'x': 341-285,
                            'y': 420
                        }, {
                            'x': 452,
                            'y': 450
                        }, {
                            'x': 452,
                            'y': 473
                        }, {
                            'x': 341,
                            'y': 472
                        }]
                    },{
                        "description": ["D", "D", "D"],
                        'vertices': [{
                            'x': 341,
                            'y': 25
                        }, {
                            'x': 452,
                            'y': 450
                        }, {
                            'x': 452,
                            'y': 473
                        }, {
                            'x': 341,
                            'y': 472
                        }]
                    }, {
                        "description": ["2.2", "2.0", "1.8"],
                        'vertices': [{
                            'x': 98,
                            'y': 249-185
                        }, {
                            'x': 98,
                            'y': 234
                        }, {
                            'x': 113,
                            'y': 234
                        }, {
                            'x': 113,
                            'y': 249
                        }]
                    },
                    {
                        "description": ["2.6", "1.6", "0.6"],
                        'vertices': [{
                            'x': 636,
                            'y': 248-95
                        }, {
                            'x': 602,
                            'y': 228
                        }, {
                            'x': 621,
                            'y': 229
                        }, {
                            'x': 620,
                            'y': 249
                        }]
                    }
                ]
            }],
            "title": "9985シリーズ ソケット\n" +
            "SERIES 9985 SOCKET",
            "material": "DN HOUSING LCP BLACK UL94V-0\n" +
            "のコンタクト/CONTACT:銅合金/COPPER ALLOY (t=0.2)\n" +
            "METAL FLANGE /BRASS (t-0. 2)\n" +
            "のキャップ/CAP:PA9T BLACK UL94V-0",
            "parts": "IMSA-9985S-***-GFN1 (E, F TYPE)",
            "finish": "21\n" +
            "CONTACT Ni.F/OVER Ni PLATE\n" +
            "接点部/CONTACT: 金/Au\n" +
            "半田部/TAIL:金/Au\n" +
            "METAL FLANGE Ni F/OVER Ni PLATE\n" +
            "$ SEMIGLOSS TIN PLATE",
            "bios": true,
            "cap": true,
            "jishu": 140,
            "bicchi": 0.5,
            "jiedianxingzhuang": "両面接点",
            "mawanto": "SMT"
        }]
    }, {
        "series": "16110",
        "number": 1,
        "draw": [{
            "ID": "16110T-01Y900-2D",
            "yuantu": [{"name": "16110T-01Y900-2D-_1-2.jpg"}],
            "biaoge": [{}],
            "zhushitu": [{
                "name": "16110T-01Y900-2D-_1-2-0.jpg",
                "value": [{
                    "description": ["4.25", "3.25", "2.25"],
                    'vertices': [{
                        'x': 289,
                        'y': 402
                    }, {
                        'x': 436,
                        'y': 396
                    }, {
                        'x': 437,
                        'y': 428
                    }, {
                        'x': 400,
                        'y': 429
                    }]
                },
                    {
                        "description": ["3.8", "2.8", "1.8"],
                        'vertices': [{
                            'x': 576-255,
                            'y': 397-60+5
                        }, {
                            'x': 611,
                            'y': 397
                        }, {
                            'x': 611,
                            'y': 427
                        }, {
                            'x': 576,
                            'y': 427
                        }]
                    },
                    {
                        "description": ["(4.85)", "(3.85)", "(2.85)"],
                        'vertices': [{
                            'x': 280,
                            'y': 449
                        }, {
                            'x': 452,
                            'y': 450
                        }, {
                            'x': 452,
                            'y': 473
                        }, {
                            'x': 341,
                            'y': 472
                        }]
                    },
                    {
                        "description": ["5", "4", "3"],
                        'vertices': [{
                            'x': 98+250,
                            'y': 249-190
                        }, {
                            'x': 98,
                            'y': 234
                        }, {
                            'x': 113,
                            'y': 234
                        }, {
                            'x': 113,
                            'y': 249
                        }]
                    }]
            }],
            "fushitu": [{
                "name": "16110T-01Y900-2D-_1-2-1.jpg",
                "value": [{
                    "description": ["1", "0.5", "0.1"],
                    'vertices': [{
                        'x': 464+85,
                        'y': 73+180
                    }, {
                        'x': 525,
                        'y': 73
                    }, {
                        'x': 525,
                        'y': 116
                    }, {
                        'x': 464,
                        'y': 116
                    }]
                }, {
                    "description": ["2.3", "1.3", "0.3"],
                    'vertices': [{
                        'x': 619+15,
                        'y': 343-90-5
                    }, {
                        'x': 619,
                        'y': 309
                    }, {
                        'x': 645,
                        'y': 309
                    }, {
                        'x': 645,
                        'y': 343
                    }]
                }]
            }],
            "ceshitu": [{
                "name": "16110T-01Y900-2D-_1-2-2.jpg",
                "value": [{
                    "description": ["1.8", "1.5", "0.2"],
                    'vertices': [{
                        'x': 313-207,
                        'y': 29+243
                    }, {
                        'x': 372,
                        'y': 29
                    }, {
                        'x': 372,
                        'y': 52
                    }, {
                        'x': 313,
                        'y': 52
                    }]
                }]
            }, {
                "name": "16110T-01Y900-2D-_1-2-3.jpg",
                "value": [{}]
            }, {
                "name": "16110T-01Y900-2D-_1-2-4.jpg",
                "value": [{
                    "description": ["2.9", "1.9", "0.9"],
                    'vertices': [{
                        'x': 313,
                        'y': 439
                    }, {
                        'x': 372,
                        'y': 29
                    }, {
                        'x': 372,
                        'y': 52
                    }, {
                        'x': 313,
                        'y': 52
                    }]
                }, {
                    "description": ["A", "A", "A"],
                    'vertices': [{
                        'x': 396,
                        'y': 70
                    }, {
                        'x': 371,
                        'y': 81
                    }, {
                        'x': 371,
                        'y': 104
                    }, {
                        'x': 316,
                        'y': 103
                    }]
                }, {
                    "description": ["A", "A", "A"],
                    'vertices': [{
                        'x': 396,
                        'y': 350
                    }, {
                        'x': 371,
                        'y': 81
                    }, {
                        'x': 371,
                        'y': 104
                    }, {
                        'x': 316,
                        'y': 103
                    }]
                }, {
                    "description": ["1.1", "0.9", "0.7"],
                    'vertices': [{
                        'x': 396+185,
                        'y': 290
                    }, {
                        'x': 371,
                        'y': 81
                    }, {
                        'x': 371,
                        'y': 104
                    }, {
                        'x': 316,
                        'y': 103
                    }]
                }]
            }],
            "title": "16110シリーズ コンタクト\n" +
            "SERIES 16110 CONTACT",
            "material": "G\n" +
            "銅合金/COPPER ALLOY",
            "parts": "IPS-16110T-01B-TM1",
            "finish": "ニッケル下地メッキ/OVER Ni PLATE\n" +
            "錫半光沢メッキ/TIN MATT PLATE",
            "bios": false,
            "cap": false,
            "jishu": 20,
            "bicchi": 0.5,
            "jiedianxingzhuang": "二点接点\n",
            "mawanto": "SMT"
        }]
    }
];


