// note will appear 1 second after loading
window.onload = function (){
    setTimeout(() => {
    //We use window.onload to check the window has loaded so we can target DOM elements
    var noteArray = ["please remember to record your spending and earnings ", "<b>EVERYDAY</b>"];
    var bevel = noteArray.map(note=>"<i>"+note+"</i>");
    var note ="<ul>" + bevel.join("") + "<ul>";
    document.getElementById("note").innerHTML = note;
  }, 1000);
}

//user click the "html" button will trigger the "js" doc to invoke the function
document.getElementById('click').onclick = function sum() {
  var item1 = parseInt(document.getElementById('item1').value);
  var item2 = parseInt(document.getElementById('item2').value);
  document.getElementById('total').textContent = item1 + item2 ;
};
