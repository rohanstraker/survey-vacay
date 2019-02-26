$(document).ready(function() {
$("form#name").submit(function(event) {
 var firstLastNameInput = $("input#first,lastname").val();
 var gender= $("select#gender").val()
 var whereDoYouLiveInput = $("input#wheredoyoulive").val();
 var age = parseInt($("input#age").val());
 var gender = $("select#gender").val();


 $(".first,lastname").text(firstLastNameInput);
 $(".wheredoyoulive").text(whereDoYouLiveInput);
 $(".age").text(age);



 $("#story").show();

 event.preventDefault();
  });
});
