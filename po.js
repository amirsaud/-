//calculatur
function calculate() {
    const a = parseFloat(document.getElementById("num1").value);
    const b = parseFloat(document.getElementById("num2").value);
    const c = document.getElementById("oprator").value;
    let result;
    if (c == "+") {
        result = a + b;
    } else if (c == "-") {
        result = a - b;
    } else if (c == "*") {
        result = a * b;
    } else  if (c=="/") {
        result=b===0? "تقسیم بر صفر ممکن نیست":a/b;
    } 
    document.getElementById("result").innerText="نتیجه"+result;
}





