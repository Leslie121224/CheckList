const Item_in = document.querySelector(".Item_in");
const List = document.querySelector(".List");
const Item_in_button = document.querySelector(".Item_in_button");

function New_Item_in(){

    const Item = document.createElement("li");
    Item.innerHTML = `
        <input type= "checkbox" class = "Item_in_Checkbox">
        <label>${Item_in.value}</label>
        <button class = "Delete_Item_Button">🗑</button>    <!-- Trash can emoji, click to delete the item. -->
    `
    const Delete_Item_Button = Item.querySelector(".Delete_Item_Button");
    const Item_in_Checkbox = Item.querySelector(".Item_in_Checkbox");

    Delete_Item_Button.addEventListener("click", function(){
        Item.remove();
    });

    Item_in_Checkbox.addEventListener("change", function(){
        if(Item_in_Checkbox.checked){
            Item.style.textDecoration = "line-through";
            Item.style.color = "#999";
            List.append(Item);
        }else{
            Item.style.textDecoration = "none";
            Item.style.color = "";
            List.prepend(Item);
        }
    });

    alert_Item_in();

    List.append(Item);
    Item_in.value = "";
}

function alert_Item_in(){
    if(Item_in.value == ""){
        return;
    }
    alert(Item_in.value + ' is added!');
}

Item_in_button.addEventListener("click", function(e){
    New_Item_in();
    
});


Item_in.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        New_Item_in();
    }
});
