function alertUser1(event){
    event.preventDefault();
    let valueOne = document.getElementById("valueOne").value;
    let valueTwo =document.getElementById("valueTwo").value;
    let answer = document.getElementById('answer');
    let result = Number(valueOne) + Number(valueTwo);
    answer.innerHTML = result;
    console.log(result);
}

function alertUser2(event){
    event.preventDefault();
    let valueOne = document.getElementById("valueOne").value;
    let valueTwo =document.getElementById("valueTwo").value;
    let answer = document.getElementById('answer');
    let result = Number(valueOne) ** Number(valueTwo);
    answer.innerHTML=result;
    console.log(result)

}
function alertUser3(event){
    event.preventDefault();
    let valueOne = document.getElementById("valueOne").value;
    let valueTwo =document.getElementById("valueTwo").value;
    let answer = document.getElementById('answer');
    let result = Number(valueOne) * Number(valueTwo);
    answer.innerHTML=result;
    console.log(result)

}
function alertUser4(event){
    event.preventDefault();
    let valueOne = document.getElementById("valueOne").value;
    let valueTwo =document.getElementById("valueTwo").value;
    let answer = document.getElementById('answer');
    let result = Number(valueOne) / Number(valueTwo);
    answer.innerHTML=result;
    console.log(result)

}
function alertUser5(event){
    event.preventDefault();
    let valueOne = document.getElementById("valueOne").value;
    let valueTwo =document.getElementById("valueTwo").value;
    let answer = document.getElementById('answer');
    let result = Number(valueOne) - Number(valueTwo);
    answer.innerHTML=result;
    console.log(result)

}
function alertUser6(event){
    event.preventDefault();
    let valueOne = document.getElementById("valueOne").value;
    let valueTwo =document.getElementById("valueTwo").value;
    let answer = document.getElementById('answer');
    let result = Number(valueOne) % Number(valueTwo);
    answer.innerHTML=result;
    console.log(result)
}