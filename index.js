let button = document.getElementById('btn1');
let adaugare = document.getElementById("add");
let input = document.getElementById("form");
let ul = document.getElementById("list");





var arr = [];

button.addEventListener("click", () => {
    
   adaugare.innerHTML = "Adaugare element";
   adaugare.classList.add("add2", "btn", "btn-warning");
});


adaugare.addEventListener("click", () => {
    input.innerHTML = "<input id = 'myInput' class= 'textInput' type= 'text' placeholder= 'Introduceti un element'></input> <button class= 'btn btn-danger' type= 'button' id='btn2'> Adauga </button>"
    

    let btn2 = document.getElementById('btn2');
    btn2.addEventListener('click', () => {
        let li = document.createElement('li');
        let val = document.querySelector('input').value;
        if(val.length == 0){
            console.log('please insert value');
        }else{
        arr.push(val);
        li.appendChild(document.createTextNode(val));
        ul.appendChild(li);
        document.getElementById('myInput').value = '';
        }

        
    });
    

});






