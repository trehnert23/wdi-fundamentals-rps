function assert(input, output, testFunction) {
    return output === testFunction(input);
}

//////////////////////////////////////////////////////

// function mphToKph(mph) {
//   return Math.round(mph * 1.61);
// }

// console.log(assert(60, 0, mphToKph)); //false
// console.log(assert(60, 97, mphToKph)); //true

//////////////////////////////////////////////////////

// function first(day) {
//     return day[0];
// }
// console.log(assert(["monday", "tuesday", "wednesday"], "monday", first));
// console.log(assert(["thursday", "friday", "saturday"], "thursday", first));
// testing first day


//////////////////////////////////////////////////////

// function last(day) {
//     return day[day.length-1];
// }

// console.log(assert(["monday", "tuesday", "wednesday"], "wednesday", last));
// console.log(assert(["thursday", "friday", "saturday"], "saturday", last));
// testing the last day

//////////////////////////////////////////////////////

var lukeSkywalker = {
  firstName: "Luke",
  lastName: "Skywalker",
  greet: function() {
    return "Hi I'm " + this.firstName + " " + this.lastName; 
  },
  useTheForce: function(){
    // the force!
  }
}