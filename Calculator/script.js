function Display(val) {
    var inp = document.getElementById('res');
    inp.value += val;
 }
 function Result() {
   var inp = document.getElementById('res');
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    inp.value = num2;
 }
 function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
 }
 function Back() {
    var inp = document.getElementById('res');
    inp.value = inp.value.slice(0,-1);
 }