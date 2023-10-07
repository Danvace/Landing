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
        id: 1,
        name: "lol",
        volume: 123,
        passengerAmount: 123
    },
    {
        id: 2,
        name: "lol1",
        volume: 111,
        passengerAmount: 111
    },
    {
        id: 3,
        name: "lol2",
        volume: 321,
        passengerAmount: 321
    },

];
let foundPlanes = planes;

export const getPlanes = () => {
    return planes;
}

export const getFoundPlanes = () => {
    return foundPlanes;
}

const addItem = ({name, volume, passengerAmount}) => {

    const generatedId = uuid.v1();

    const newItem = {
        id: generatedId,
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

checkbox.addEventListener("change", () => {
    renderItems(foundPlanes);
})

countButton.addEventListener("click", () => {
    let count = 0;
    for (let plane of foundPlanes) {
        count += parseInt(plane.volume);
    }
    output.textContent = count.toString();
})
