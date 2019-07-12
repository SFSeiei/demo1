/**
 * Created by Administrator on 2019/06/17.
 */
$(document).ready(function(){
  $("#start_work").click(function(){

    var data= {
            data: JSON.stringify({
                'select1': '0'
            }),
        }

    $.ajax({
        url:'http://127.0.0.1:5000/workDetail',
        type:'POST',
        data:data,
        dataType: 'json',
        success:function(res){
            console.log(res)
            console.log(0)

        },
        error:function (res) {
            console.log(res);
            console.log(1)
        }

    });
  });
});