let button = document.getElementById('btn1');
let input = document.getElementById("form");
let ul = document.getElementById("list");

var arr = [];




button.addEventListener("click", () => {
    run();

});


function run (){
    input.innerHTML = "<input id = 'myInput' onkeypress= 'return (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 48 && event.charCode <= 57)' class= 'textInput' type= 'text' placeholder= 'Introduceti un element'></input> <button class= 'btn btn-danger' type= 'submit' id='btn2'> Adauga </button>"
    

    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', () => {
        let li = document.createElement('li');
        let val = document.querySelector('input').value;

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");

        var myList = document.getElementsByTagName("LI");
        
        if(val.length == 0){
                console.log('please insert value');
            }else{
            arr.push(val);
            li.appendChild(document.createTextNode(val));
            ul.appendChild(li);
            document.getElementById('myInput').value = '';
            

            for (let i = 0; i < myList.length; i++) {
        
                span.className = "close";
                span.appendChild(txt);
                myList[i].appendChild(span);
                }

            var close = document.getElementsByClassName('close');

            for(let i = 0; i < close.length; i++){
                close[i].onclick = function(){
                    var div = this.parentElement;
                    div.style.display = "none";
                }
            }
    }

    li.addEventListener('click', function(e){
        e.target.style.textDecoration="line-through";
      });

    });
      
}
