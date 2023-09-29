import {addItemToPage, clearInputs, getInputValue, renderItems} from "./utils.js"

const submitButton = document.getElementById("button-submit");
const findButton = document.getElementById("find-button");
const cancelFindButton = document.getElementById("cancel-find-button");
const findInput = document.getElementById("find-input");
const checkbox = document.getElementById("checkbox");
const output = document.getElementById("count-output");
const countButton = document.getElementById("count-fuel-button");

let planes = [
    {
        name: "sadf",
        volume: 123,
        passengerAmount: 123
    },
    {
        name: "sadfasdg",
        volume: 312,
        passengerAmount: 312
    },
    {
        name: "jjjj",
        volume: 1000,
        passengerAmount: 1000
    }
];
let foundPlanes = planes;


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
    foundPlanes = planes.filter(h =>
        h.name.toLowerCase().search(findInput.value.toLowerCase()) !== -1);

    renderItems(foundPlanes);
})

cancelFindButton.addEventListener("click", () => {
    foundPlanes = planes;
    renderItems(planes);
    findInput.value = "";
})

checkbox.addEventListener("change",() =>{
    renderItems(foundPlanes);
})

countButton.addEventListener("click", () => {
    let count = 0;
    for (let plane of foundPlanes){
        count += parseInt(plane.volume);
    }
    output.textContent = count.toString();
})



