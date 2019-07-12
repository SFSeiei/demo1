/**
 * Created by Administrator on 2019/06/21.
 */
$(document).ready(function(){

    if ($("#select").val() == 0){
        $("#users2").hide()
        $("#batch_save").show()
        $("#getFeatures").show()
        // $("#batch_delete").hide()
        $("#searchArea2").hide()
        $("#searchArea1").show()

        $(".confirmed").hide()
        $(".unconfirm").show()

    }
    if ($("#select").val() == 1){
        $("#users2").hide()
        $("#getFeatures").hide()
        $("#face_detect").hide()

        $(".saveBtn").hide()
        $("#batch_save").hide()
        $("#batch_delete").show()

        $("#searchArea2").hide()
        $("#searchArea1").show()

        $(".unconfirm").hide()
        $(".confirmed").show()


    }
    if ($("#select").val() == 2){
        $("#users1").hide()
        $("#getFeatures").hide()
        $("#face_detect").hide()

        $("#users2").show()
        $("#batch_save").hide()
        $("#batch_delete").hide()

        $("#searchArea1").hide()
        $("#searchArea2").show()

    }

    $("#select").change(function(){
        location.href=("/workDetail/" + $("#select").val())
    });

    //日期控件
    layui.use('laydate', function(){
      var laydate = layui.laydate;
          //日期范围
          laydate.render({
            elem: '#test13'
            ,format: 'yyyyMMdd'
          });
    });

    $("#search").click(function(){
        // location.href=("/workDetail/" + $("#select").val())
        alert($('#test13').val())
    });

    // 一括处理
    $("#th_checkbox").click(function () {
        if (this.checked) {
            $("#tb :checkbox").prop("checked", true);
            // $("#batch_save").removeAttr("disabled");
            // $("#batch_delete").removeAttr("disabled");
        } else {
            $("#tb :checkbox").prop("checked", false);
            // $("#batch_save").attr("disabled","disabled");
            // $("#batch_delete").attr("disabled","disabled");
        }
    });

    //确认状态 切换
    $('.confirm').click(function () {
        page = $(this).index('.confirm');

        if ($(".confirm>span").eq(page).text() == "確認取消"){
            $(".confirm>span").eq(page).text("確認");
            $('.confirmed').eq(page).hide();
            $('.unconfirm').eq(page).show();
        }
        else{
            $(".confirm>span").eq(page).text("確認取消");
            $('.confirmed').eq(page).show();
            $('.unconfirm').eq(page).hide();
        }
    })


    $("#getFeatures").click(function(){
        location.href=("/getFeatures")

        var cover=document.getElementById('cover');
        cover.style.display='block';
        // setTimeout(function(){
        //     cover.style.display='none';
        // },5000)
        timer = setInterval(function () {
        $.ajax('/getProcess', {
            method: 'post',
            data: {},
            dataType: 'json',
            success: function (data) {    //访问成功执行的回调函数
                console.log(data);
                $("#pb").css("width", data.process + "%");
                if(data[1] == 1){
                    alert('finished')
                    clearInterval(timer);
                }
            },
            error: function () {  //访问失败执行的回调函数
                console.log("请求失败");
            }
        });
    }, 2000)

    });

    $("#face_detect").click(function(){

        location.href=("http://127.0.0.1:5000/faceRecognition")

        var cover=document.getElementById('cover');
        cover.style.display='block';
        // setTimeout(function(){
        //     cover.style.display='none';
        // },5000)
        setInterval(function () {
        $.ajax('/getProcess', {
            method: 'post',
            data: {},
            dataType: 'json',
            success: function (data) {    //访问成功执行的回调函数
                console.log(data);
                // console.log(data.process);
                // console.log(data.finishFlg);
                // console.log(data[0] + "%");
                //
                $("#pb").css("width", data.process + "%");
                // alert( data.process + "%")
                if(data[1] == 1){
                    alert('finished')
                    clearInterval(timer);
                }
            },
            error: function () {  //访问失败执行的回调函数
                console.log("请求失败");
            }
        });
    }, 100)

        // window.open ('test111.html', 'newwindow', 'height=600, width=800, top=200, left=500, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no') //这句要写成一行
    });




    $(function() {

        $("#pagination3").pagination({
            currentPage: 4,
            totalPage: 16,
            isShow: true,
            count: 3,
            homePageText: "トップへ",
            endPageText: "最後へ",
            prevPageText: "前頁へ",
            nextPageText: "次頁へ",
            callback: function(current) {
                $("#current3").text(current)
            }
        });
//
// {#				$("#getPage").on("click", function() {#}
// {#					var info = $("#pagination3").pagination("getPage");#}
// {#					alert("当前页数：" + info.current + ",总页数：" + info.total);#}
// {#				});#}

			});










});


