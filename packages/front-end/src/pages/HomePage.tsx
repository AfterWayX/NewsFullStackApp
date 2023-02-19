import { useState, ChangeEvent } from 'react';
import { Helmet } from "react-helmet";

import SearchIcon from '../components/Icons/SearchIcon';

export default function HomePage() {
    const [inputValue, setInputValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e?.target?.value)
    }

    const onClick = () => {
        return window.location.href = `/jobs?query=${inputValue}`
    }

    return (
        <>
            <Helmet>
                <title>Homepage | OpenByte</title>
                <meta
                    name="description"
                    content="Jobs posting off OpenByte companies"
                />
            </Helmet>
            <div className="container mx-auto flex justify-center items-center my-auto">
                <div className='w-2/4 py-1 px-4 rounded-md border border-gray-200 mb-20 flex items-center'>
                    <input className='py-1 w-full outline-none' placeholder='Search for job offers' autoComplete={''} type="search" name="search" id="search" value={inputValue} onChange={onChange} />
                    <button onClick={onClick}>
                    <SearchIcon />
                    </button>
                </div>

            </div>
        </>
    )
}