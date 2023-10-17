// Purpose: Utility functions for the application
import {floods, foundFloods, getFloods, getFoundFloods} from "./index.mjs";
import {putFloodById,deleteFloodById} from "./js/api.mjs";

const itemsContainer = document.getElementById("items-to-list");
const pointOfMeasurementInput = document.getElementById("pointOfMeasurement");
const levelOfWaterInput = document.getElementById("levelOfWater");
const gpsInput = document.getElementById("gps");
const dateOfMeasurementInput = document.getElementById("dateOfMeasurement");
const manageCheckBox = document.getElementById("checkbox");
const editContainer = document.getElementById("edit-container");

const editPointOfMeasurement = document.getElementById("edit_point-of-measurement");
const editLevelOfWater = document.getElementById("edit_level-of-water");
const editGps = document.getElementById("edit_gps");
const editDateOfMeasurement = document.getElementById("edit_date-of-measurement");
const saveEditButton = document.getElementById("save_button");

const itemTemplate = ({
                          id,
                          pointOfMeasurement,
                          levelOfWater,
                          gps,
                          dateOfMeasurement
                      }) =>
    `<li class="plane-card" id="${id}">
                    <h5>Flood</h5>
                    <p>Point of Measurement:${pointOfMeasurement}</p>
                    <p>level of water: ${levelOfWater}</p>
                    <p>gps: ${gps}</p>
                    <p>date of Measurement: ${dateOfMeasurement} </p>
                    <button class="edit-button" id="edit-button_${id}">Edit</button>
                    <button class="delete-button" id="delete-button_${id}">Delete</button>
    </li>`;

let selectedItemID = null;
export const addItemToPage = ({id, pointOfMeasurement, levelOfWater, gps, dateOfMeasurement}) => {
    itemsContainer.insertAdjacentHTML("afterbegin",
        itemTemplate(
            {id, pointOfMeasurement, levelOfWater, gps, dateOfMeasurement}));
    const deleteButton = document.getElementById(`delete-button_${id}`)
    deleteButton.onclick = function () {
        deleteFloodById(id).then(() => {
            const foundIndex = foundFloods.findIndex(item => item.id === id);
            if (foundIndex !== -1) {
                foundFloods.splice(foundIndex, 1);
            }

            const floodsIndex = floods.findIndex(item => item.id === id);
            if (floodsIndex !== -1) {
                floods.splice(floodsIndex, 1);
            }
            renderItems(foundFloods);
        });
    }
    const editButton = document.getElementById(`edit-button_${id}`)
    editButton.onclick = function () {
        editContainer.style.display = "flex";
        selectedItemID = id;
        fillInputs({pointOfMeasurement, levelOfWater, gps, dateOfMeasurement});
    }

}


const fillInputs = ({pointOfMeasurement, levelOfWater, gps, dateOfMeasurement}) => {
    editPointOfMeasurement.value = pointOfMeasurement;
    editLevelOfWater.value = levelOfWater;
    editGps.value = gps;
    editDateOfMeasurement.value = dateOfMeasurement;
}

saveEditButton.onclick = function () {
    let editItem = getFloods().find(i => i.id === selectedItemID);
    let temp = Object.assign({}, editItem);
    if (editItem) {
        let { pointOfMeasurement, levelOfWater, gps, dateOfMeasurement } = getEditedInputValue();
        editItem.pointOfMeasurement = pointOfMeasurement;
        editItem.levelOfWater = levelOfWater;
        editItem.gps = gps;
        editItem.dateOfMeasurement = dateOfMeasurement;
    }

    putFloodById(selectedItemID, editItem)
        .then(response => {
            console.log(response);
            renderItems(getFoundFloods());
            editContainer.style.display = "none";
        })
        .catch(error => {
            console.error(error);
            // Revert the changes in case of an error
            editItem.pointOfMeasurement = temp.pointOfMeasurement;
            editItem.levelOfWater = temp.levelOfWater;
            editItem.gps = temp.gps;
            editItem.dateOfMeasurement = temp.dateOfMeasurement;
        });
}



export const getEditedInputValue = () => {
    if (editPointOfMeasurement.value === "" || editLevelOfWater.value === "" || editGps.value === "" || editDateOfMeasurement.value === "") {
        alert("fields need to be filled");
        return;
    }
    return {
        pointOfMeasurement: editPointOfMeasurement.value,
        levelOfWater: editLevelOfWater.value,
        gps: editGps.value,
        dateOfMeasurement: editDateOfMeasurement.value
    }
}



export const getInputValues = () => {
    if (pointOfMeasurementInput.value === "" || levelOfWaterInput.value === "" || gpsInput.value === "" || dateOfMeasurementInput.value === "") {
        alert("fields need to be filled");
        return;
    }
    return {
        pointOfMeasurement: pointOfMeasurementInput.value,
        levelOfWater: levelOfWaterInput.value,
        gps: gpsInput.value,
        dateOfMeasurement: dateOfMeasurementInput.value
    }
}

export const clearInputs = () => {
    pointOfMeasurementInput.value = "";
    levelOfWaterInput.value = "";
    gpsInput.value = "";
    dateOfMeasurementInput.value = "";
}

export const renderItems = (items) => {
    itemsContainer.innerHTML = "";
    let sortedItems = items.slice();
    if (manageCheckBox.checked) {
        sortedItems.sort((a, b) => b.levelOfWater - a.levelOfWater);
    }
    for (const item of sortedItems) {
        addItemToPage(item)
    }
}