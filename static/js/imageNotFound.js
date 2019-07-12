/**
 * Created by Administrator on 2019/07/03.
 */
/**
 * Created by Administrator on 2019/06/21.
 */
$(document).ready(function(){

    //日期控件
    layui.use('laydate', function(){
        var laydate = layui.laydate;
        laydate.render({
            elem: '#test13'
            ,format: 'yyyyMMdd'
          });
    });

    $("#search").click(function(){
        // location.href=("/workDetail/" + $("#select").val())
        alert($('#test13').val())
    });

    $("#addGroup").click(function () {
       // alert(screen.width)
       //  alert(screen.height)
       window.open ('addGroup', 'newwindow', 'height=400, width=800, top=200, left=600, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no')
    });


});


