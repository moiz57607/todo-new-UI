const item = document.querySelector("#item");
const todo = document.querySelector("#to-do-box");
item.addEventListener(
    "keyup",
    function(event){
        if(item.value==""){
            alert("plese input data")
        }
            else if(event.key == "Enter"){
                addTodo(this.value)
                this.value = "";
            }
        
    }
)
const addTodo = function(item){
    const listitem = document.createElement("li");
    listitem.innerHTML = `${item}
    <i class="fa-solid fa-x"></i>`;
    listitem.addEventListener(
        "click",
        function(){
         this.classList.toggle("done")  
        }
    )
    listitem.querySelector("i").addEventListener(
        "click",
        function(){
            listitem.remove();
        }
    )
  
    todo.appendChild(listitem);
     
}
