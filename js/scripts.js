$(document).ready(function() {
$("form#name").submit(function(event) {
 var firstLastNameInput = $("input#first-lastname").val();
 var gender= $("select#gender").val()
 var whereDoYouLiveInput = $("input#wheredoyoulive").val();
 var age = $("input#age").val();
 var gender = $("select#gender").val();

 //var vaca1 = LasVegas
 $(".first-lastname").text(firstLastNameInput);
 $(".wheredoyoulive").text(whereDoYouLiveInput);
 $(".age").text(age);

if (gender === "male"){
 $("#story").show();
//event.preventDefault();
} else if (gender === "female"){
$("#story2").show();
//event.preventDefault();
}
} else if (gender === "female") && age > 28 ){
$("#story3").show();
event.preventDefault();
//debugger;
}

//$("#story2").show();
 //event.preventDefault();
  });
});
