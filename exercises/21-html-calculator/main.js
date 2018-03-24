// document.getElementById("adda").value 
// document.getElementById("addb").value 
// document.getElementById("suba").value 
// document.getElementById("subb").value 
// document.getElementById("multa").value 
// document.getElementById("multb").value

// document.getElementById("addTotal").value 
// document.getElementById("subtractTotal").value 
// document.getElementById("multiplyTotal").value 

document.getELementById("addForm").addEventListener("submit", function(e){  
    e.preventDefault()
    var a = document.addForm.adda.value
    var b = document.addForm.addb.value
    var sum = a + b;
    var answer = document.getElementById("addTotal");
    // answer.innerHTML = "Result:";
    answer.innerHTML += sum;
    return sum;
}    
    

    // function addThem() {
    //     event.preventDefault();
    //     console.log(event);
    //     addForm = document.addition;
    //     var pTag = document.getElementById("addOutput");
    //     pTag.innerHTML = "Result: "
    
        
    //     console.log(sum);
    
    //     pTag.innerHTML += sum;
    //     var x = addForm.x.valueAsNumber;
    //     var y = addForm.y.valueAsNumber;
    //     var sum = x + y; 
    //     return sum;
    // }
    
    // document.addition.addEventListener("submit", addThem);



    






























// document.addForm.addEventListener("submit", addInputs);
// document.calculator.addEventListener("submit", addNums);
// function addNums(event) {
//     event.preventDefault();
//     console.log(event);
//     var addF = document.addForm;
//     var ptAnswer = document.getElementById("addTotal");
//     ptAnswer.innerHTML = "Result:"

//     console.log(sum);

//     ptAnswer.innerHTML += sum;
//     var x = addForm.x.valueAsNumber;
//     var y = addForm.y.valueAsNumber;
//     var sum = x + y; 
//     return sum;
    







    // var a = document.adda.valueAsNumber;
    // console.log(x);
    // var y = document.addForm.inputY.valueAsNumber;
    // var b = document.addb.valueAsNumber;
    // console.log(y);
    // var p = document.getElementById("outputAdd");
    // var c = document.getElementById("addTotal");
    // answer = x + y;
    // answer = a + b;
    // p.innerHTML = answer;
    // p.innerHtml = answer;
// }

// document.subtract.addEventListener("submit", subInputs);
// document.multiply.addEventListener("submit", mulInputs);

// function addThem() {
//     event.preventDefault();
//     console.log(event);
//     addForm = document.addition;
//     var pTag = document.getElementById("addOutput");
//     pTag.innerHTML = "Result: "

    
//     console.log(sum);

//     pTag.innerHTML += sum;
//     var x = addForm.x.valueAsNumber;
//     var y = addForm.y.valueAsNumber;
//     var sum = x + y; 
//     return sum;
// }

// document.addition.addEventListener("submit", addThem);