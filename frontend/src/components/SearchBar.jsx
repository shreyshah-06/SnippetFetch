import React, { useState } from "react";
import '../components/SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const SearchBar = ({ placeHolder, data }) => {

    const [filterData, setFilterData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {

        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilterData([]);
            setWordEntered("");
        }
        else {
            setFilterData(newFilter);
        }


    };

    const clearInput = () => {
        setFilterData([]);
        setWordEntered("");

    }

    return (
        <div className="search">

            <div className="searchInputs">
                <input type="text" placeholder={placeHolder} value={wordEntered} onChange={handleFilter} />
                <div className="searchIcon">
                    {
                        filterData.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput} />
                    }

                </div>
            </div>

            {
                filterData.length !== 0 && (
                    <div className="dataResult">
                        {
                            filterData.slice(0, 15).map((value, key) => {
                                return (
                                    <a className='dataItem' href={value.link} target="_blank" rel="noreferrer" >
                                        <p>{value.title}</p>
                                    </a>
                                );
                            })
                        }
                    </div>
                )
            }
        </div>
    );
}

export default SearchBar;