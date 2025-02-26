

let gridColums = Array.from (
    document.getElementsByClassName("flex-menu__element")
).slice(0,3);
let parentColums = document.getElementById("colums");
let cssColums = document.getElementById("css-colums");

let gridRow = Array.from (
    document.getElementsByClassName("flex-menu__element")
).slice(3,6);
let parentRow = document.getElementById("rows");
let cssRow = document.getElementById("css-rows");

let gridFlow = Array.from (
    document.getElementsByClassName("flex-menu__element")
).slice(6)
let parentFlow = document.getElementById("flow");
let cssFlow = document.getElementById("css-flow");

function choiceSelector(e, array){
    array.forEach((element) => {
        element.classList.remove("flex-menu__element--active");
    })
    e.currentTarget.classList.toggle("flex-menu__element--active");
    choice = e.currentTarget.innerHTML.toLowerCase();
    switch (array) {
        case gridColums:
            parentColums.style.gridTemplateColumns = choice;
            cssColums.innerHTML = `
.parent {
display: grid;
<mark>grid-template-columns: ${choice};</mark>
}`
        break;
        case gridRow:
            parentRow.style.gridTemplateRows = choice;
            cssRow.innerHTML = `
.parent {
display: grid;
<mark>grid-template-rows: ${choice};</mark>
}`
        break;
        case gridFlow:
            parentFlow.style.gridAutoFlow = choice;
            cssFlow.innerHTML = `
.parent {
display: grid;
<mark>grid-auto-flow: ${choice.toLowerCase()};</mark>
}`
        break;
    }
}

gridColums.forEach((element) =>{
    element.addEventListener("click", (e) => choiceSelector(e, gridColums));
});

gridFlow.forEach((element) =>{
    element.addEventListener("click", (e) => choiceSelector(e, gridFlow));
});

gridRow.forEach((element) =>{
    element.addEventListener("click", (e) => choiceSelector(e, gridRow));
});