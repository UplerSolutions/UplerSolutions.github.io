// CheckboxGroup.tsx
import React, { useState } from 'react';
import Checkbox from './Checkbox';

interface Option {
    value: string;
    label: string;
}

interface CheckboxGroupProps {
    options: Option[];
    limit: number;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options, limit }) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleCheckboxChange = (value: string) => {
        if (selectedOptions.includes(value)) {
            setSelectedOptions(selectedOptions.filter(option => option !== value));
        } else {
            if (selectedOptions.length < limit) {
                setSelectedOptions([...selectedOptions, value]);
            }
        }
    };

    return (
        <div className='grid grid-cols-3 max-h-max grid-rows-2   rounded-xl text-center text-dark'>
            {options.map(option => (
                <Checkbox
                
                    key={option.value}
                    value={option.value}
                    label={option.label}
                    isChecked={selectedOptions.includes(option.value)}
                    onChange={() => handleCheckboxChange(option.value)}

                />
            ))}
        </div>
    );
};

