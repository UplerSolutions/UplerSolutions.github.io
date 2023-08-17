// Checkbox.tsx
import React from 'react';
import Image from 'next/image';

interface CheckboxProps {
    value: string;
    icon?: string
    label: string;
    isChecked: boolean;
    onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ value, label, isChecked, onChange, icon }) => {
    return (
        isChecked ? 
        <div className=' border-3 border-primary-color flex flex-col w-[90%] max-w-fit h-auto bg-white rounded-xl p-6 gap-10 mb-10 items-center text-center'>
            <div>
                <label>
                    <input
                        className='h-8 w-8 accent-primary-color'
                        type="checkbox"
                        value={value}
                        checked={isChecked}
                        onChange={onChange}
                    />
                </label>
                <Image
                    className=' w-[150px] md:w-40 min-w-full'
                    src='/uplerlogo.png'
                    alt='global Logo'
                    width={100}
                    height={100}
                />
            </div>
            <div>
                <h2 className='text-2xl pb-5'>{label}</h2>
                <p>Proyect description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus numquam</p>
            </div>

            
        </div>
        : 
        <div className='flex flex-col w-[90%] max-w-fit h-auto bg-white rounded-xl p-6 gap-10 mb-10 items-center text-center'>
            <div className=''>
                <label>
                    <input
                        className='h-8 w-8 accent-primary-color'
                        type="checkbox"
                        value={value}
                        checked={isChecked}
                        onChange={onChange}
                    />
                </label>
                <Image
                    className=' w-[150px] md:w-40 min-w-full'
                    src='/uplerlogo.png'
                    alt='global Logo'
                    width={100}
                    height={100}
                />
            </div>
            <div>
                <h2 className='text-2xl pb-5'>{label}</h2>
                <p>Proyect description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus numquam</p>
            </div>
            
        </div>

    );
};

export default Checkbox;
