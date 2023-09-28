import {addItemToPage, clearInputs, getInputValue, renderItems} from "./utils.js"

const submitButton = document.getElementById("button-submit");
const findButton = document.getElementById("find-button");
const cancelFindButton = document.getElementById("cancel-find-button");
const findInput = document.getElementById("find-input");
const checkbox = document.getElementById("checkbox");
const output = document.getElementById("count-output");
const countButton = document.getElementById("count-fuel-button");

let planes = [];

const addItem = ({name, volume, passengerAmount}) => {

    const newItem = {
        name,
        volume,
        passengerAmount
    }

    planes.push(newItem);
    addItemToPage(newItem)

}
submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const {name, volume, passengerAmount} = getInputValue();

    clearInputs();

    addItem({
        name,
        volume,
        passengerAmount
    })
})

findButton.addEventListener("click", () => {
    const foundPlanes = planes.filter(h => h.name.search(findInput.value) !== -1);

    renderItems(foundPlanes);
})

cancelFindButton.addEventListener("click", () => {
    renderItems(planes);
    findInput.value = "";
})

checkbox.addEventListener("change",() =>{
    renderItems(planes);
})

countButton.addEventListener("click", () => {
    let count = 0;
    for (let plane of planes){
        count += parseInt(plane.volume);
    }
    output.textContent = count.toString();
})



