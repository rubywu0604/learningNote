function shout(){
  console.log("Help!");
};

function countToThree(callback){
  for(var i = 0; i <= 3; i++){
    console.log(i);
  };
  callback();
};

countToThree(shout);
