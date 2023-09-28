const nameInput = document.getElementById("name-input");
const volumeInput = document.getElementById("volume-input");
const passengerInput = document.getElementById("passenger-input");
const itemsContainer = document.getElementById("items-to-list");
const manageCheckBox = document.getElementById("checkbox");
export const getInputValue = () => {
    return {
        name: nameInput.value,
        volume: volumeInput.value,
        passengerAmount: passengerInput.value
    }
}

export const clearInputs = () => {
    nameInput.value = "";
    volumeInput.value = "";
    passengerInput.value = "";
}

const itemTemplate = ({name, volume, passengerAmount}) =>
    `<li>
                    <h5>plane</h5>
                    <span>${name}</span> <br>
                    <span>${volume}</span> <br>
                    <span>${passengerAmount}</span> <br>
    </li>`;

export const addItemToPage = ({name, volume, passengerAmount}) => {
    itemsContainer.insertAdjacentHTML("afterbegin",
        itemTemplate({name,volume,passengerAmount}))
}

export const renderItems = (items) => {
    itemsContainer.innerHTML = "";
    let sortedItems = items.slice()
    if(manageCheckBox.checked){
        sortedItems.sort((a,b) => b.passengerAmount - a.passengerAmount);
    }
    for (const item of sortedItems) {
        addItemToPage(item)
    }
}