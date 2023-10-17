// Purpose: Entry point for the application
import {getAllFloods, postFlood} from "./js/api.mjs";
import {addItemToPage, getInputValues, clearInputs, renderItems} from "./utils.mjs";

const submitButton = document.getElementById("button-submit");
const findButton = document.getElementById("find-button");
const findInput = document.getElementById("find-input");
const cancelFindButton = document.getElementById("cancel-find-button");
const countButton = document.getElementById("count-button");
const checkButton = document.getElementById("checkbox");

export let floods = [];
export let foundFloods = [];

window.onload = function () {
    fetchDataAndRender().then(() => console.log("Data fetched and rendered"));
}

export const getFloods = () => {
    return floods;
}

export const getFoundFloods = () => {
    return foundFloods;
}

const addItem = ({
                     pointOfMeasurement,
                     levelOfWater,
                     gps,
                     dateOfMeasurement
                 }) => {

    const newItem = {
        pointOfMeasurement,
        levelOfWater,
        gps,
        dateOfMeasurement
    }
    let itemWithID = postFlood(newItem);

    itemWithID.then((data) => {
        floods.push(data);
        addItemToPage(data)
    })
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const {dateOfMeasurement,levelOfWater,gps,pointOfMeasurement} = getInputValues();

    clearInputs();

    addItem({
        pointOfMeasurement,
        levelOfWater,
        gps,
        dateOfMeasurement})

})

findButton.addEventListener("click", () => {
    foundFloods = floods.filter(h =>
        h.pointOfMeasurement.toLowerCase().search(findInput.value.toLowerCase()) !== -1);

    renderItems(foundFloods);
})

cancelFindButton.addEventListener("click", () => {
    foundFloods = floods;
    renderItems(floods);
    findInput.value = "";
})


countButton.addEventListener("click", () => {
    //count level of water
    let sum = 0;
    for (const flood of foundFloods) {
        sum += flood.levelOfWater;
    }
    //display level of water on page
    document.getElementById("count-output").innerHTML = sum;
})


checkButton.addEventListener("change", () => {
    renderItems(foundFloods)
})



async function fetchDataAndRender() {
    try {
        const data = await getAllFloods();
        floods.push(...data);
        foundFloods.push(...data); // Initialize foundFloods with the fetched data
        renderItems(floods); // Render all elements on page load
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
