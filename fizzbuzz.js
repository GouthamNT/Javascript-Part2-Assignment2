
function generateFizzBuzz() {
    var num = document.querySelector('#generate')
    var i;
    for(i = 1; i <= 100 ; i++) {
        var para = document.createElement('p');
        if((i % 3 === 0) && (i % 5 === 0)) {
            para.textContent = "FizzBuzz";
        }
        else if(i % 3 === 0) {
            para.textContent = "Fizz";
        }
        else if(i % 5 === 0) {
            para.textContent = "Buzz";
        }
        else {
            para.textContent = i;
        }
        num.appendChild(para);
    }
}