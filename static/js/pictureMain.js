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
            "<option id='option"+i+"' value='series" + i + "'>" + draw[i].series + "</option>"
        )
    }
    $("#seriesTable tbody tr").remove();
    for (var j = 0; j < draw[0].draw.length; j++) {
        // alert(j)
        k = j + 1;
        $("#seriesTable").append(
            "<tr'>\n" +
            "<td>" + k + "</td>\n" +
            "<td>" + draw[0].draw[j].ID + "</td>\n" +
            "<td></td>\n" +
            "<td></td>\n" +
            "<td></td>\n" +
            "</tr>"
        )
    }

});
$('#seriesSelect').change(function(e){
    seriesSelect($('#seriesSelect').get(0).selectedIndex)
});
function seriesSelect(Index) {
    $("#seriesTable tbody tr").remove();
    for (var i = 0; i < draw[Index].draw.length; i++) {
        // alert(j)
        k = i + 1;
        $("#seriesTable").append(
            "<tbody>\n" +
            "<tr onclick='massage('"+draw[Index].draw[i]+"')'>\n" +
            "<td>" + k + "</td>\n" +
            "<td>" + draw[Index].draw[i].ID + "</td>\n" +
            "<td></td>\n" +
            "<td></td>\n" +
            "<td></td>\n" +
            "</tr>" +
            "</tbody>"
        )
    }
}
function massage(obj) {
    alert(obj)
}
var draw = [
    {
        "series": "6027",
        "number": 2,
        "draw": [{
            "ID":"6027B-1-Z354-PT1-2D.pdfimg-1",
            "zhushitu": "6027B-1-Z354-PT1-2D.pdfimg-1(1).png",
            "fushitu": "6027B-1-Z354-PT1-2D.pdfimg-1(2).png",
            "ceshitu": "6027B-1-Z354-PT1-2D.pdfimg-1(3).png",
            "title": "6027シリーズ ピンヘッダー\n" +
            "SERIES 6027 PIN HEADER",
            "material": "のベース:ガラス入り46ナイロン樹脂,灰色、UL94V-0\n" +
            "BASE GLASS FILLED 46NYLON\n" +
            "UL94 V-0, COLOR GRAY\n" +
            "7/PIN /BRASS",
            "parts": "6027 B-\n" +
            "3 54 PT1",
            "finish": "/PRE-PLATE\n" +
            "T OVER NICKEL PLATE 1mMIN\n" +
            "zO TIN REFLOW PLATE 2HMMIN"

        },
            {
                "ID":"6027B-1-Z380-PT1-2D.pdfimg-1",
                "zhushitu": "6027B-1-Z380-PT1-2D.pdfimg-1(1).png",
                "fushitu": "6027B-1-Z380-PT1-2D.pdfimg-1(2).png",
                "ceshitu": "6027B-1-Z380-PT1-2D.pdfimg-1(3).png",
                "title": "6027シリーズ ピンヘッダー\n" +
                "SERIES 6027 PIN HEADER",
                "material": "のペース:ガラス入り66ナイロン樹脂\n" +
                "自然色(アイボリー)、 UL94V-0\n" +
                "D BASE GLASS FILLED 66NYLON\n" +
                "UL94 V-0, COLOR NATURAL (/VORY)\n" +
                "7/PIN BRASS",
                "parts": "6027B-Z380-PT1",
                "finish": "/PRE-PLATE\n" +
                "y /0VER Ni PLATE 1. OMMIN\n" +
                "U70-8/TIN REFLOW PLATE 2. OHMMIN."
            }
        ]

    },
    {
        "series": "4099",
        "number": 1,
        "draw": [{
            "ID":"4099T-01Y900-2D.pdfimg_1-2",
            "zhushitu": "4099T-01Y900-2D.pdfimg_1-2(1).png",
            "fushitu": "4099T-01Y900-2D.pdfimg_1-2(2).png",
            "ceshitu": ["4099T-01Y900-2D.pdfimg_1-2(3-1).png",
                        "4099T-01Y900-2D.pdfimg_1-2(3-2).png"],
            "title": "4099 シリーズ エンボス 梱包品\n" +
            "SERIES 4099 EMBOSS PRODUCT A",
            "material": "7PET, PE, PEF\n" +
            "CARRIER TAPE PS (BLACK)\n" +
            "2REEL PS (WHI TE STATIC ELECTRICITY PREVENTION)\n" +
            "3COVER TAPE :\n" +
            "PET, PE, PEF (CLEAR STATIC ELECTRICITY PREVENTION)",
            "parts": "IPS-4099T-01Y900",
            "finish": "7PET, PE, PEF\n" +
            "CARRIER TAPE PS (BLACK)\n" +
            "2REEL PS (WHI TE STATIC ELECTRICITY PREVENTION)\n" +
            "3COVER TAPE :\n" +
            "PET, PE, PEF (CLEAR STATIC ELECTRICITY PREVENTION)"
        }]
    }
];



