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

var url_create = url + "document/create";
var token;

$(document).ready(function() {
    token = getCookie("token");

    $("#create").click(function () {
        var read = {};
        read["title"] = $("#title").val();
        read["content"] = $("#content").val();
        read["token"] = token;
        read["desc"] = "null";
        $.ajax({
            url:url_create,
            type:'post',
            dataType:'json',
            data:read,
            success:function (response) {
                alert(JSON.stringify(response));
            },
            error:function () {
                alert("操作失败")
            }
        })
    });

    $("#update").click(function () {
        var read = {};
        read["sid"] = getCookie("readsid");
        delCookie("readsid");
        read["title"] = $("#title").val();
        read["content"] = $("#content").val();
        read["token"] = token;
        read["desc"] = "null";
        $.ajax({
            url:url_create,
            type:'post',
            dataType:'json',
            data:read,
            success:function (response) {
                alert(JSON.stringify(response));
            },
            error:function () {
                alert("操作失败")
            }
        })
    });
});
