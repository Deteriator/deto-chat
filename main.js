
$("#post_button").click(function(){
    var user=$("#userName").val();
    $("#chat").append("<p>"+user+"---"+$("#chat_text").val()+"</p>");
        $("#chat_text").val("");
        $('#userName').animate({
              scrollTop:$('#userName').get(0).scrollHeight},'absolute'
          );

    });
$("#chat_text").keydown(function(w){
var x=w.which;
if(x === 13){
    var userText=$("#chat_text").val
    var user=$("#userName").val();
      $("#chat").append("<p>"+user+"---"+ $("#chat_text").val()+"</p>");
      pubnub.publish({                                    
            channel : "hello_world",
            message : userText
      });
          $("#chat_text").val("");
          $('#chat').animate({
              scrollTop:$('#chat').get(0).scrollHeight},'absolute'
          );
}
});
$('#kappa').click(function(){
    $('#chat').append('<img width=50px height= 50px src="https://lh3.googleusercontent.com/s1yI1qcSJY4RYdqYQvXgXRalfznucozvGY2ilS4nqRB9N1dESXaBf10UsDXHx7cdjg=w300" />'); 

    $('#chat').animate({
              scrollTop:$('#chat').get(0).scrollHeight},'absolute'
          );
});
$('#unicorn').click(function(){
    $('#chat').append('<img width=50px height= 50px src="http://ih0.redbubble.net/image.127399102.0849/flat,800x800,070,f.u3.jpg" />'); 
});
$('#pogChamp').click(function(){
    $('#chat').append('<img width=50px height=50px src="http://forums.optic.tv/data/attachments/1/1691-46bf47f113d0b8a2187697d2011997c3.jpg"/>'); 
});
