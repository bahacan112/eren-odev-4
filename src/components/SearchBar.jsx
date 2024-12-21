import { useState } from "react";
import toast from 'react-hot-toast';

const SearchBar = (props) =>
{
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        if (inputValue.split(" ").join("") == "" )
        {
            toast("Invalid word to seach")
        }
        else
        {
            props.setSearch(inputValue.trim())
        }        
    }

    return (
        <>
            <div className="container mx-auto flex justify-center">
                <form className="flex items-center bg-white rounded-full shadow-md px-4 py-2 w-full max-w-md" onSubmit={handleSubmit}>
                    <button type="submit">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <input 
                    type="text" 
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos" 
                    className="input flex-1 bg-transparent focus:outline-none px-2 text-gray-700"
                    value={inputValue}
                    onChange={handleChange}
                    />
                </form>
            </div>
        </>
    )
}

export default SearchBar