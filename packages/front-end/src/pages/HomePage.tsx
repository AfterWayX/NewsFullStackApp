import { useState, ChangeEvent } from 'react';
import { Helmet } from "react-helmet";
import logo from '../logo.svg';

import SearchIcon from '../components/Icons/SearchIcon';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate();
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e?.target?.value)
    }

    const onClick = () => {
        return navigate(`/jobs?query=${inputValue}`)
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
            <div className="container mx-auto flex flex-col gap-y-10 justify-center items-center my-auto ">
                <img src={logo} className="App-logo" alt="logo" />

                <div className='w-2/4 py-1 px-4 rounded-md border border-gray-200 mb-28 flex items-center'>
                    <input className='py-1 w-full outline-none bg-transparent text-white' placeholder='Search for job offers' autoComplete="off" type="search" name="search" id="search" value={inputValue} onChange={onChange} />
                    <button onClick={onClick}>
                        <SearchIcon />
                    </button>
                </div>
            </div>
        </>
    )
}