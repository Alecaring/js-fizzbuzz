

const containerElem = document.querySelector(".ms_container");
console.log(containerElem);


for (let i = 1; i <= 100; i++) {

    let bgClass;
    let txtResult;

    if (i % 3 === 0 && i % 5 === 0) {
        
        console.log("fizzBazz", typeof i);
        txtResult = "Fizz Buzz";
        bgClass = "fizzBazz";

    } else if (i % 3 === 0) {

        console.log("fizz");
        txtResult = "Fizz"
        bgClass = "fizz"

    } else if (i % 5 === 0) {

        console.log("bazz");
        txtResult = "Buzz"
        bgClass = "bazz"

    } else {

        txtResult = i
        console.log(i);
    }

    const squareElem = `<div class="square ${bgClass}">${txtResult}</div>`
    containerElem.innerHTML += squareElem 
}

