import React, { useState } from 'react';
import {ButtonContainer, ChoiceButton} from "./ChoiceButton.styled"

function ThreeChoiceButton() {
    const [selectedChoice, setSelectedChoice] = useState(null);

    const handleChoiceClick = (choice) => {
        setSelectedChoice(choice);
    };

    return (
        <ButtonContainer>
            <ChoiceButton
                selected={selectedChoice === 'choice1'}
                onClick={() => handleChoiceClick('choice1')}
            >
                Price
            </ChoiceButton>

            <ChoiceButton
                selected={selectedChoice === 'choice2'}
                onClick={() => handleChoiceClick('choice2')}
            >
                Year
            </ChoiceButton>

            <ChoiceButton
                selected={selectedChoice === 'choice3'}
                onClick={() => handleChoiceClick('choice3')}
            >
                Engine volume
            </ChoiceButton>
        </ButtonContainer>
    );
}

export default ThreeChoiceButton;
