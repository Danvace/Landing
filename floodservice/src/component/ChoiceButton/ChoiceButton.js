// import React from 'react';
// import {ButtonContainer, ChoiceButton, StyledSelect} from "./ChoiceButton.styled";
//
//
// const filters = [{
//     title: "Price",
//     options: ["ascending", "descending"]
// },
//     {
//         title: "Year",
//         options: ["ascending", "descending"]
//     },
//     {
//         title: "Engine volume",
//         options: ["ascending", "descending"]
//     }]

// function ThreeChoiceButton() {
//     const [selectedChoice, setSelectedChoice] = useState(null);
//
//     const handleChoiceClick = (choice) => {
//         setSelectedChoice(selectedChoice === choice ? null : choice);
//     };

// return (
//     <ButtonContainer>
//         <ChoiceButton
//             selected={selectedChoice === 'choice1'}
//             onClick={() => handleChoiceClick('choice1')}
//         >
//             Price
//         </ChoiceButton>
//
//         <ChoiceButton
//             selected={selectedChoice === 'choice2'}
//             onClick={() => handleChoiceClick('choice2')}
//         >
//             Year
//         </ChoiceButton>
//
//         <ChoiceButton
//             selected={selectedChoice === 'choice3'}
//             onClick={() => handleChoiceClick('choice3')}
//         >
//             Engine volume
//         </ChoiceButton>
//     </ButtonContainer>
// );
// function ThreeChoiceButton() {
//     return (
//         <ButtonContainer>
//             <ChoiceButton>
//                 {filters.map((filter, index) => (
//                     <StyledSelect
//                         key={index}
//                         value={filter}
//                         dropdownRender={() => (
//                             <div>
//                                 {filters.map((option, optionIndex) => (
//                                     <div key={optionIndex}>{option}</div>
//                                 ))}
//                             </div>
//                         )}
//                     />
//                 ))}
//             </ChoiceButton>
//         </ButtonContainer>
//     );
// }
// import React, { useState } from 'react';
// import { ButtonContainer, ChoiceButton } from "./ChoiceButton.styled";
//
// const filters = [{
//     title: "Price",
//     options: ["ascending", "descending"]
// }, {
//     title: "Year",
//     options: ["ascending", "descending"]
// }, {
//     title: "Engine volume",
//     options: ["ascending", "descending"]
// }];
//
// function ThreeChoiceButton() {
//     const [selectedChoice, setSelectedChoice] = useState(null);
//
//     const handleChoiceClick = (choice) => {
//         setSelectedChoice(selectedChoice === choice ? null : choice);
//     };
//
//     return (
//         <ButtonContainer>
//             {filters.map((filter, index) => (
//                 <ChoiceButton
//                     key={index}
//                     selected={selectedChoice === filter.title}
//                     onClick={() => handleChoiceClick(filter.title)}
//                 >
//                     {filter.title}
//                 </ChoiceButton>
//             ))}
//         </ButtonContainer>
//     );
// }
//
// export default ThreeChoiceButton;
import React, {useState} from 'react';
import {ButtonContainer, ChoiceButton, StyledSelect} from "./ChoiceButton.styled";

const filters = [
    {
        title: "Price",
        options: ["ascending", "descending"]
    },
    {
        title: "Year",
        options: ["ascending", "descending"]
    },
    {
        title: "Engine volume",
        options: ["ascending", "descending"]
    }
];

function ThreeChoiceButton() {
    const [openFilter, setOpenFilter] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleFilter = (filterTitle) => {
        setOpenFilter(openFilter === filterTitle ? null : filterTitle);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setOpenFilter(null);
    };

    return (
        <ButtonContainer>
            {filters.map((filter, index) => (
                <div key={index}>
                    <ChoiceButton
                        onClick={() => toggleFilter(filter.title)}
                        selected={openFilter === filter.title}
                    >
                        {filter.title}
                    </ChoiceButton>
                    {openFilter === filter.title && (
                        <StyledSelect>
                            {filter.options.map((option, optionIndex) => (
                                <option
                                    key={optionIndex}
                                    value={option}
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option}
                                </option>
                            ))}
                        </StyledSelect>
                    )}
                </div>
            ),)}
            {selectedOption && <p>Selected: {selectedOption}</p>}
        </ButtonContainer>
    );
}

export default ThreeChoiceButton;


