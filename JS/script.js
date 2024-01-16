let click=new Audio("sound/click.mp3");
let good=new Audio("sound/good.mp3");
let wrong=new Audio("sound/wrong.mp3");
let remove=new Audio("sound/remove.mp3");
let row=document.getElementById("rows");
let ip=document.getElementById("ip");
let tasksList=document.getElementById("tasksList");

// Add notes to the lists
function Addnote(){
 if(ip.value=="")
 {
    wrong.play();
    row.classList.add("error");
    setTimeout(()=>{
        row.classList.remove("error");
    },500)
 }
 else{
    click.play();
    let list = document.createElement("li");
    list.innerHTML=ip.value;
    tasksList.appendChild(list);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    list.appendChild(span);
 }
 ip.value="";
 saveData();
}


// Checked or Unchecked
tasksList.addEventListener("click",function(e){
    console.log("hi")
    if(e.target.tagName==="LI"){
        if(!e.target.classList.contains("checked"))
        {
        good.play();
        }
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        remove.play();
        e.target.parentElement.remove();
        saveData();
    }
})


// Local Storage
function saveData(){
    localStorage.setItem("data",tasksList.innerHTML)
}


// Display tasks
function showData(){
    tasksList.innerHTML=localStorage.getItem("data")
}
showData();