let flexOrder = Array.from (
    document.getElementsByClassName("flex-menu__element")
).slice(0,3);
let childOrder = document.getElementById("child-order");
let cssOrder = document.getElementById("order");

let align_self = Array.from(
    document.getElementsByClassName("flex-menu__element")
).slice(3,8);
let childAlign_self = document.getElementById ("child-align-self");
let cssAlign_self = document.getElementById ("align-self");

let menuGrow = Array.from(
    document.getElementsByClassName("flex-menu__element")
).slice(8);
let childGrow = document.getElementById ("child-grow");
let cssGrow = document.getElementById ("flex-grow");

function choiceSelector(e, array) {
    console.log("aaa");
    
    array.forEach((element) => {
        element.classList.remove("flex-menu__element--active");
    });
    e.currentTarget.classList.toggle("flex-menu__element--active");
    choice = e.currentTarget.innerHTML.toLowerCase();
    switch (array) {
        case menuGrow:
            childGrow.style.flexGrow = choice;
            cssGrow.innerHTML = `
.parent {
display: flex;
height: 100%;
}
.child-active {
<mark>flex-grow: ${choice};</mark>
}`;
            break;
        case align_self:
            childAlign_self.style.alignSelf = choice;
            cssAlign_self.innerHTML = `
.parent {
display: flex;
height: 100%;
}
.child-active {
<mark>align-self: ${choice};</mark>
}
`;
            break;
        case flexOrder:
            childOrder.style.order = choice;
            cssOrder.innerHTML = `
.parent {
display: flex;
align-items: flex-start;
height: 100%;
}
.child-active {
<mark>order: ${choice.toLowerCase()};</mark>
}`;
            break;
    }
}

menuGrow.forEach((element) =>{
    element.addEventListener("click", (e) => choiceSelector(e, menuGrow));
});

align_self.forEach((element) =>{
    element.addEventListener("click", (e) => choiceSelector(e, align_self));
});

flexOrder.forEach((element) =>{
    element.addEventListener("click", (e) => choiceSelector(e, flexOrder));
});
