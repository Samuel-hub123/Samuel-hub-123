
const input = document.getElementById("input");
const list = document.getElementById("list");

function add(){
    
    if (input.value === "") {
        window.alert("You have to enter task");
    } 
    else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    input.value = '';
    save() 
}

list.addEventListener("click",function(e){
   if (e.target.tagName === "LI"){
     e.target.classList.toggle("check");
     save() 
   }
   else if(e.target.tagName === "SPAN") {
     e.target.parentElement.remove();
     save() 
   }
}),false;

function save() {
  localStorage.setItem('data',list.innerHTML);
}

function show() {
  list.innerHTML = localStorage.getItem('data');
}

show();