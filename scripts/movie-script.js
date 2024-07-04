$(document).ready(function () {
  console.log("loaded and ready!!");

//Button Click Issue # 1


$('#btnAddMovie').click(function(){
  console.log($(this).text());
for (i=0;i<movieList.length;i++){
  $('#movieList').append(`<li class = "darker-li">${movieList[i]}</li>`)
}
})

$('#btnRemoveMovie').click(function(){
  console.log($(this).text());
$('li').last().remove();

})

let movieList = [
  "Lord the the Rings Trilogy",
  "Cloudy with a Chance of Meatballs",
  "Princess Bride",
  "Ratatouille",
  "How to Train Your Dragon 2"
];

console.log(movieList);


});