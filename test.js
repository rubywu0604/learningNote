
    console.log(Math.pow(-2,31));

console.log(Math.pow(-2,31) <= 1 <= (Math.pow(2,31)-1) ? 0 : false);

var reverse = function(x) {
    const str = x.toString();
    let ary = [];
    for(var i = str.length - 1; i >= 0; i--){
        if(str[i] === "-"){
            ary.unshift(str[i]);
        }else{
            ary.push(str[i]);
        };
    };
    var reversedX = Number(ary.join(''));
    return (Math.pow(-2,31) <= reversedX <= (Math.pow(2,31)-1) ? reversedX : 0
    }

console.log(Math.pow(-2,31) <= reversedX <= (Math.pow(2,31)-1) ? reversedX : 0);
