$(function(){
    $("#add").click(function(){
        let v=$("#addtext").val();
        let e=$("<li></li>").text(v);
        let b=$("<button></button>").click(function(){
            $(this).parent().remove();
        })
        b.text("x");
        e.append(b);
        $("#todo").append(e);
        $("#addtext").val("");
    })
});