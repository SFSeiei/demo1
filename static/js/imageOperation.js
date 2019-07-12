/**
 * Created by Administrator on 2019/06/27.
 */
$(document).ready(function(){

    $("#edit").click(function () {

        $(".controls>input").removeAttr("disabled");
        $(".controls>select").removeAttr("disabled");
        $(".controls>textarea").removeAttr("disabled");
    })

    $("#save").click(function () {

        $(".controls>input").attr("disabled","disabled");
        $(".controls>select").attr("disabled","disabled");
        $(".controls>textarea").attr("disabled","disabled");
    })

    $("#uploadImages").click(function () {

        $("#fileupload").click();
    })

    //日期控件
    layui.use('laydate', function(){
        var laydate = layui.laydate;
        laydate.render({
            elem: '#test13'
            ,format: 'yyyyMMdd'
          });
    });

    document.querySelector('#fileupload').addEventListener('change',function(e){
    //     for (let entry of e.target.files)
    // //         console.log(e.target.files);
    //         console.log(entry.name, entry.webkitRelativePath);

        $("#upload_filenames").text("ファイルの個数：" + e.target.files.length)
        $("#gallery-container_add").hide()

    });

    $("#addGroup").click(function () {
       // alert(screen.width)
       //  alert(screen.height)
       window.open ('addGroup', 'newwindow', 'height=400, width=800, top=200, left=600, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no')
    });



});