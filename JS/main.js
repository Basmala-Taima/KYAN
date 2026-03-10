//Sidebar
const body = document.getElementById("body")
const header = document.getElementById("header")
const icon = document.getElementById("icon")
const sideBar =document.getElementById("sideBar")
document.addEventListener("click",(event)=>{
    if (!sideBar.contains(event.target) && !icon.contains(event.target)){
            icon.classList.remove("fa-xmark")
            icon.classList.add("fa-bars")
            sideBar.classList.remove("flex")
            sideBar.classList.add("hidden")
        }
    })
function sitting() {
        if (sideBar.classList.contains("hidden")) {
            icon.classList.remove("fa-bars")
            icon.classList.add("fa-xmark")
            sideBar.classList.remove("hidden")
            sideBar.classList.add("flex")
        } else {
            icon.classList.remove("fa-xmark")
            icon.classList.add("fa-bars")
            sideBar.classList.remove("flex")
            sideBar.classList.add("hidden")
        }
}
const users = JSON.parse(localStorage.getItem("Messages"))||[];
let conMessage=document.getElementById("con-message")
//ظهور ال Message
function disPlayMessage(){
    conMessage.innerHTML=(``)
    users.forEach((user ,index ) => {
        const row=
        `<div class="w-full h-35 overflow-y-auto transform hover:-translate-y-1  border-2 border-amber-100 outline-1 outline-amber-50 bg-zinc-100 rounded relative transition-all">
            <div class="w-full h-full bg-gray-400/30 absolute top-0 start-0 opacity-0 hover:opacity-20"></div>
            <button type="button" onclick="deleteMessage(${index})"class="absolute end-2 top-2 text-[25px] hover:bg-gray-400/50 hover:cursor-pointer"><i class="fa-regular fa-trash-can"></i></button>
            <h3 class="ps-5 pt-8 font-black text-[25px] lg:text-[28px]">${users[index].Title}</h3>
            <p class="ps-5 text-[10px] lg:text-[18px] text-gray-600 font-medium">${users[index].Message}</p>
            </div>`
            conMessage.innerHTML+=row
        });
        localStorage.setItem("Messages",JSON.stringify(users))
}
//btnDeleteMessage
function deleteMessage(index){
    users.splice(index,1);
    localStorage.setItem("Messages",JSON.stringify(users))
    disPlayMessage()
}
//form
document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();
    let title =document.getElementById("title").value.trim();
    let message =document.getElementById("message").value.trim();
    let value=false;
    if ( message==="") {
        value = false;
        return;
    } else if(message.length<3){
        value= false;
        return;
    }
    const user={
        Title:title,
        Message:message
    }
    users.push(user);
    e.target.reset()
    disPlayMessage()
});
disPlayMessage()