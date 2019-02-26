$(document).ready(function() {
//$("#name form").submit(function(event) {
 //var firstNameInput = $("input#firstname").val();
 //var lastNameInput = $("input#lastname").val();
 //var locationInput= $("input#location").val();
 var dropdownlist = $("input#dropdownlist").val();

 //var exclamationInput = $("input#exclamation").val();
 //var verbInput = $("input#verb").val();
 //var nounInput = $("input#noun").val();

 $(".firstname").text(firstNameInput);
 $(".lastname").text(lastNameInput);
 $(".location").text(locationInput);
 $("#dropdownlist").text(dropDownList);
// $(".exclamation").text(exclamationInput);
 //$(".verb").text(verbInput);
 //$(".noun").text(nounInput);

 $("#story").show();

 event.preventDefault();
  });
});
