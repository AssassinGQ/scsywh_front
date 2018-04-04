/**
 * Created by Administrator on 2017/11/2.
 */
/**
 * Created by Administrator on 2017/11/2.
 */
var url_query = url + "exam/queryScore";
var url_driver = url + "basic_info/escort_info/query";
var parm_query = {};
var parm_delete = {};
var d = {};
var response;
var total;
var sellersid;
var limit = "10";
var cur_page;
var token;

function initSelect(url,data,select,name,value) {
    select.empty();
    var option = "<option value='-1'>缺省</option>";
    select.append(option);
    $.ajax({
        url:url,type:'get',dataType:'json',data:data,
        success:function (response) {
            if(response.status == 0){
                var options = response.content.data;
                for(var i = 0; i < options.length; i++){
                    var option = "<option value='"+options[i][value]+"'>"+options[i][name]+"</option>";
                    select.append(option);
                }
                select.selectpicker('render');
                select.selectpicker('refresh');
            }
        }
    })
}

$(document).ready(function() {

    initSelect(url_driver,{token:token,type:0},$("#driversid"),"name","sid");

    $('#table1').bootstrapTable({
        columns: [
            {radio: true, width:'3%'},
            {field: 'sid', title: '司机姓名', align:'center',valign:'middle',sortable:true},
            {field: 'drivername', title: '考试成绩', align:'center',valign:'middle'},
        ],
        sortable:true,
        height:290,
        formatNoMatches: function () {
            return '无符合条件的记录';
        }
    });

});
