var number = process.argv.slice(2);
var n1 = parseInt(number[0]);
var n2 = parseInt(number[0]);

function countDown(num,num2){
    while(num>=0){
        console.log(num);
        num-=1;
    }
    num+=1;
    while((num>=0)&&(num<=num2)){
        console.log(num);
        num+=1;
    }
}

countDown(n1,n2);