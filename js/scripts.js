$(document).ready(function() {

  var name = function(firstName, lastName){
   return firstName + lastName;
  }

  var name = function(firstName, lastName){
  return parseInt(firstName) + parseInt(lastName);
  };

  $("#name").submit(function() {
    event.preventDefault();
   var firstName = $("input#firstName").val();
   var lastName = $("input#lastName").val();
   alert(name);
}
