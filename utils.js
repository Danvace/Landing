import {getPlanes,getFoundPlanes} from "./index.mjs";

const nameInput = document.getElementById("name-input");
const volumeInput = document.getElementById("volume-input");
const passengerInput = document.getElementById("passenger-input");
const itemsContainer = document.getElementById("items-to-list");
const manageCheckBox = document.getElementById("checkbox");

const editContainer = document.getElementById("edit-container");
const editName = document.getElementById("edit_input");
const editVolume = document.getElementById("edit_volume");
const editPassenger = document.getElementById("edit_passenger");
const saveEditButton = document.getElementById("save_button");

export const getInputValue = () => {
    if (nameInput.value === "" || volumeInput.value === "" || passengerInput.value === "") {
        alert("fields need to be filled");
        return;
    }
    return {
        name: nameInput.value,
        volume: volumeInput.value,
        passengerAmount: passengerInput.value
    }
}

export const getEditedInputValue = () => {
    if (editName.value === "" || editVolume.value === "" || editPassenger.value === "") {
        alert("fields need to be filled");
        return;
    }
    return {
        name: editName.value,
        volume: editVolume.value,
        passengerAmount: editPassenger.value
    }
}


export const clearInputs = () => {
    nameInput.value = "";
    volumeInput.value = "";
    passengerInput.value = "";
}

const itemTemplate = ({id, name, volume, passengerAmount}) =>
    `<li class="plane-card" id="${id}">
                    <h5>plane</h5>
                    <p>Name____:${name}</p> 
                    <p>Volume___:${volume}</p> 
                    <p>Passengers:${passengerAmount}</p>
                    <button class="edit-button" id="edit-button_${id}">Edit</button>
    </li>`;

let selectedItemID = null;
export const addItemToPage = ({id, name, volume, passengerAmount}) => {
    itemsContainer.insertAdjacentHTML("afterbegin",
        itemTemplate({id, name, volume, passengerAmount}))
    const editButton = document.getElementById(`edit-button_${id}`)
    editButton.onclick = function () {
        editContainer.style.display = "flex";
        selectedItemID = id;
        fillInputs({name, volume, passengerAmount});
    }
}
saveEditButton.onclick = function () {
    let editItem = getPlanes().find(i => i.id === selectedItemID);
    if (editItem) {
        const {name, volume, passengerAmount} = getEditedInputValue();
        editItem.name = name;
        editItem.volume = volume;
        editItem.passengerAmount = passengerAmount;
    }
    renderItems(getFoundPlanes());
    editContainer.style.display = "none";
}


const fillInputs = ({name, volume, passengerAmount}) => {
    editName.value = name;
    editVolume.value = volume;
    editPassenger.value = passengerAmount;
}


export const renderItems = (items) => {
    itemsContainer.innerHTML = "";
    let sortedItems = items.slice()
    if (manageCheckBox.checked) {
        sortedItems.sort((a, b) => b.passengerAmount - a.passengerAmount);
    }
    for (const item of sortedItems) {
        addItemToPage(item)
    }
}