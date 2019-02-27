$(document).ready(function() {
$("form#name").submit(function(event) {
 var firstLastNameInput = $("input#first,lastname").val();
 var gender= $("select#gender").val()
 var whereDoYouLiveInput = $("input#wheredoyoulive").val();
 var age = parseInt($("input#age").val());
 var gender = $("select#gender").val();

 var vaca1 = LasVegas
 $(".first,lastname").text(firstLastNameInput);
 $(".wheredoyoulive").text(whereDoYouLiveInput);



if (gender === "Female" && age > 100){
 $("#story").show();
} else if (gender === "Male" && age > 100){
  $("#story2").show();
}

 event.preventDefault();
  });
});
