const inputBox = document.querySelector("#input-box");
const list = document.querySelector("#list");
const moon = document.querySelector("#moon");

moon.addEventListener('click', () => {
   document.body.classList.toggle('dark');
});

const addTask = () => {
    if(inputBox.value === ''){
        alert("You Must Write Something!");
    }
    else{
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        list.appendChild(li);
        inputBox.value = '';
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData();
}

list.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("cheaked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    
}, false);

const saveData=() =>{
    localStorage.setItem("data", list.innerHTML);
}

const showTask = () =>{
    list.innerHTML =localStorage.getItem("data");
}

showTask();