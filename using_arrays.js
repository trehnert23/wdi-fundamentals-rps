// var customers=['Justin', 'Ilias', 'Nathan', 'Camilo', 'Vikash', 'Adam', 'Brianna', 'Sarah', 'Ali', 'Jessie', 'Cameron'];

// customers.forEach(function(element,index) {
//         console.log(element + ': ' + ((index+1)*2) + ' minutes');
// });

////////////////


// var prices = [3.00,4.00,10.00,2.25,3.01];

// prices.map(function(element) {
//   if(element%0.50===0){
//         return (element - 0.01)*1.05; 
//   }
//   else{
//       return (element*1.05);
//   }
// });

/////////////////

// var birthDates = [1, 1, 2, 4, 7, 4, 12, 30];
// var even = [];
// var odd = [];

// birthDates.filter(function(element) {
//     if(element%2===0){
//         even.push(element);
//     }
//     else{
//         odd.push(element);
//     }
// });

// console.log(even);
// console.log(odd);

///////////////////

var earnings = [20, 25, 60, 20, 85, 20];

earnings.reduce(function(current, next) {
    return current+next;
}, 500);


function money(value) {
    return value === 20;
}
earnings.filter(money);