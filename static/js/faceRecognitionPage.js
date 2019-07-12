/**
 * Created by Administrator on 2019/07/03.
 */
/**
 * Created by Administrator on 2019/06/21.
 */
$(document).ready(function(){

    // $("#result").hide()

    //文件选择
    $('#chooseFolder').click(function () {
        $("#b").click();
    })


    document.querySelector('#b').addEventListener('change',function(e){
        // alert(e.target.files)
        // alert(e.target.files[0].name)
        //      for (let entry of e.target.files)
        //         console.log(entry.name, entry.webkitRelativePath);

        $('#chooseFolder').val(e.target.files[0].webkitRelativePath.split('/')[0])
    });

});


