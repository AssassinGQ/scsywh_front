/**
 * Created by Administrator on 2017/10/21.
 */
function getCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)) return unescape(arr[2]);
    else return null;
}
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

var url_query = url + "exam/getList";
var url_create = url + "exam/create";
var url_update = url + "exam/update";

$(document).ready(function() {
    var token = getCookie("token");
    var papersid = getCookie("papersid");
    if(papersid != null){
        var data = {};
        data["sid"] = papersid;
        data["token"] = token;
        delCookie("papersid");
        $.ajax({
            url:url_query,
            type:'post',
            dataType:'json',
            data:data,
            success:function (response) {
                alert(JSON.stringify(response));
            },
            error:function () {
                alert("操作失败")
            }

        })
    }

    $("#create").click(function () {
        var qs = [];
        var questions = document.getElementsByClassName("question");
        for(var i = 0; i < questions.length; i++){
            var qa = {};
            qa["questionid"] = i+1;
            qa["type"] = 1;
            qa["score"] = 10;
            var q = questions[i].getElementsByTagName("textarea")[0];
            qa["question"] = q.value;
            var choices = {};
            var opts = questions[i].getElementsByTagName("input");
            choices["A"] = opts[0].value;
            choices["B"] = opts[1].value;
            choices["C"] = opts[2].value;
            choices["D"] = opts[3].value;
            qa["choices"] = choices;
            var select = questions[i].getElementsByTagName("select");
            var answer = $(select).find("option:selected").text();
            qa["answer"] = answer;
            qs[i] = qa;
        }
        qs = JSON.stringify(qs);
        var data = {};
        data["token"] = token;
        data["name"] = document.getElementById("title").value;
        data["desc"] = "test";
        data["questions"] = qs;

        $.ajax({
            url:url_create,
            type:'post',
            dataType:'json',
            data:data,
            success:function (response) {
                alert(JSON.stringify(response));
            },
            error:function () {
                alert("操作失败")
            }
        })
    });

    $("#update").click(function () {
        var qs = [];
        var questions = document.getElementsByClassName("question");
        for(var i = 0; i < questions.length; i++){
            var qa = {};
            qa["questionid"] = i+1;
            qa["type"] = 1;
            qa["score"] = 10;
            var q = questions[i].getElementsByTagName("textarea")[0];
            qa["question"] = q.value;
            var choices = {};
            var opts = questions[i].getElementsByTagName("input");
            choices["A"] = opts[0].value;
            choices["B"] = opts[1].value;
            choices["C"] = opts[2].value;
            choices["D"] = opts[3].value;
            qa["choices"] = choices;
            var select = questions[i].getElementsByTagName("select");
            var answer = $(select).find("option:selected").text();
            qa["answer"] = answer;
            qs[i] = qa;
        }
        qs = JSON.stringify(qs)
        var data = {};
        data["token"] = token;
        var papaersid = getCookie("papersid");
        data["sid"] = papaersid;
        delCookie("papersid");
        data["name"] = document.getElementById("title").value;
        data["desc"] = "test";
        data["questions"] = qs;

        $.ajax({
            url:url_update,
            type:'post',
            dataType:'json',
            data:data,
            success:function (response) {
                alert(JSON.stringify(response));
            },
            error:function () {
                alert("操作失败")
            }
        })
    });
});
