window.onload = function(){
    setTimeout(() => {
    //We use window.onload to check the window has loaded so we can target DOM elements
    var noteArray = ["please remember to record your spending and earnings ", "<b>EVERYDAY</b>"];
    var bevel = noteArray.map(note=>"<i>"+note+"</i>");
    var note ="<ul>" + bevel.join("") + "<ul>";
    document.getElementById("note").innerHTML = note;
  }, 1000);
}
