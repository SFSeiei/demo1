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
    $.ajax({
        url: "../static/select_crop_image_text/6027B-1-Z380-FINISH.txt",
        success: function (data, status) {
            // console.log(fiter(data))
            if (data.indexOf("FINISH E") >= 0) {
                var subdata1 = data.substring(data.indexOf("FINISH E") + 8);
                this.success(subdata1)
            } else if (data.indexOf("MATERIAL") >= 0) {
                var subdata2 = data.substring(data.indexOf("MATERIAL") + 8);
                this.success(subdata2)
            } else if (data.indexOf("PARTS No") >= 0) {
                var subdata3 = data.substring(data.indexOf("PARTS No") + 8);
                this.success(subdata3)
            } else if (data.indexOf("TITLE") >= 0) {
                var subdata4 = data.substring(data.indexOf("TITLE") + 5);
                this.success(subdata4)
            } else {
                console.log(data)
            }
        },
        error: function (data, status) {
            alert("数据读取失败！")
        }
    });
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
});
var draw = [
    {
     "series":"4099",
     "number":1,
     "draw":[{
         "zhushitu":"zhushitu.png",
         "fushitu":"fushitu.png",
         "ceshitu":"ceshitu.png",
         "title":""
     }]

    },
    {

    }
]



