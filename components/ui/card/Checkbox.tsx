// Checkbox.tsx
import React from 'react';

interface CheckboxProps {
    value: string;
    icon?: string
    label: string;
    isChecked: boolean;
    onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ value, label, isChecked, onChange, icon }) => {
    return (
        isChecked ? <div className='border-4 border-[#AC5FDC] flex flex-row w-[80%] max-w-fit h-auto bg-white rounded-xl p-6 gap-20 mb-10 items-center text-center'>
            <label>
                <input
                    className='h-8 w-8 p-4'
                    type="checkbox"
                    value={value}
                    checked={isChecked}
                    onChange={onChange}
                />
            </label>
            <div className=' flex flex-col  text-center box-content h-8 w-8 p-4  bg-slate-400'>{icon}</div>
            <p>{label}</p>
        </div>
        : 
        <div className='flex flex-row w-[80%] max-w-fit h-auto bg-white rounded-xl p-6 gap-20 mb-10 items-center text-center'>
            <label>
                <input
                    className='h-8 w-8 p-4'
                    type="checkbox"
                    value={value}
                    checked={isChecked}
                    onChange={onChange}
                />
            </label>
            <div className=' flex flex-col  text-center box-content h-8 w-8 p-4  bg-slate-400'>{icon}</div>
            <p>{label}</p>
        </div>

    );
};

export default Checkbox;
