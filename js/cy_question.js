/**
 * Created by Administrator on 2017/10/31.
 */
var url_query = url + "exam/getList";
var url_delete = url + "exam/delete";
var parm_query = {};
var parm_delete = {};
var d = {};
var response;
var total;
var sellersid;
var limit = "10";
var cur_page;
var token;

$(document).ready(function() {

    $("#b_add").click(function () {
        window.open("cy_paper.html");
    });

    $("#b_mend").click(function () {
        var row =  $("#table1").bootstrapTable('getSelections')[0];
        if(row == null){
            alert("请选择条目");
            return;
        }
        var papersid = row["sid"];
        setCookie("papersid",papersid);
        window.open("cy_paper.html");
    });


    $('#table1').bootstrapTable({
        columns: [
            {radio: true, width:'3%'},
            {field: 'sid', title: '试卷编号', align:'center',valign:'middle',sortable:true},
            {field: 'name', title: '考题名称', align:'center',valign:'middle'},
        ],
        sortable:true,
        height:290,
        formatNoMatches: function () {
            return '无符合条件的记录';
        }
    });
    search();


});
