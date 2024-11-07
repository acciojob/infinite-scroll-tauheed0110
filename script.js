const main = document.getElementById("infi-list");
// making a function that adds two item
function addItem(){
    const lastNumber = Number(main.lastElementChild.innerHTML.split(" ")[2]);
    const newElement1 = document.createElement("li");
    const newElement2 = document.createElement("li");
    newElement1.textContent = `List item ${lastNumber+1}`;
    newElement2.textContent = `List item ${lastNumber+2}`;
    main.appendChild(newElement1);
    main.appendChild(newElement2);
}


main.addEventListener("scroll", ()=>{
    if(main.scrollTop + main.clientHeight >= main.scrollHeight){
        addItem();
    }
})