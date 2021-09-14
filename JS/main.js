let taskInput = document.getElementById('taskInput');
let addBtn = document.getElementById('addBtn');
let emptyDiv = document.getElementById('emptyDiv');
let tasksDiv = document.getElementById('tasksDiv');
let invalid = document.getElementById('invalid');
let invalidCloser = document.getElementById('invalidCloser');
let addCloser = document.getElementById('addCloser');
let popBtn = document.getElementById('popBtn');
let modal = document.querySelector('.modal');
let closeBtn = document.getElementById('closeBtn');
let modeBtn = document.getElementById('modeBtn');
let body = document.querySelector('body')
let heading = document.getElementById('heading');


let addTask = () => {
    let data = taskInput.value;

    if (data == "") {
        invalid.classList.remove('none');
    }
    else if(data.length < 3){
        invalid.classList.remove('none');
    }
    else if(data.length > 22){
        invalid.classList.remove('none');
    }
    else {
        emptyDiv.classList.add('none');
        invalid.classList.add('none');
        closeModal();
        tasksDiv.innerHTML += `<div class="alert alert-info task">
        ${data}
        <i class="fas fa-trash-alt float-right del" style="font-size: 25px;"></i>
        </div>`
    }
    taskInput.value = "";
}

let closeMethod = () =>{
    invalid.classList.add('none');   
}

let emptyTasks = ()=>{
    if(tasksDiv.childElementCount == 0){
        emptyDiv.classList.remove('none');
    }
}

let popUp = ()=>{
    modal.style.display = 'block';
}

let closeModal = ()=>{
    modal.style.display = 'none';
    taskInput.value = "";
}

addBtn.addEventListener('click', addTask);
invalidCloser.addEventListener('click' , closeMethod);
popBtn.addEventListener('click' , popUp);
addCloser.addEventListener('click' , closeModal);
closeBtn.addEventListener('click' , closeModal);

modeBtn.addEventListener('click' , function(){
    if(modeBtn.classList.contains('btn-warning')){
        modeBtn.classList.remove('btn-warning');
        modeBtn.classList.add('btn-dark');
        modeBtn.innerText = 'Dark Mode';
        modeBtn.style.border = 'none';
        body.classList.add('backMode');
        heading.classList.add('h1');
        popBtn.classList.remove('btn-primary');
        popBtn.classList.add('btn-dark')
    }
    else{
        modeBtn.classList.add('btn-warning');
        modeBtn.classList.remove('btn-dark');
        modeBtn.classList.add('modeDiv');
        modeBtn.innerText = 'Light Mode';
        modeBtn.style.border = 'none';
        body.classList.remove('backMode');
        heading.classList.remove('h1');
    }
})

document.addEventListener('click' , function(a){
    if(a.target.classList.contains('del')){
        a.target.parentElement.remove();
        emptyTasks();
    }
});
document.addEventListener('click' , function(e){
    if(e.target.classList.contains('task')){
        e.target.classList.toggle('background');
    }
})