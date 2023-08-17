// Checkbox.tsx
import React from 'react';

interface CheckboxProps {
    value: string;
    label: string;
    isChecked: boolean;
    onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ value, label, isChecked, onChange }) => {
    return (

        <label>
            <input
                
                type="checkbox"
                value={value}
                checked={isChecked}
                onChange={onChange}
            />
            {label}
        </label>
    );
};

export default Checkbox;
