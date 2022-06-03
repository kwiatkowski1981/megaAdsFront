import React, {FormEventHandler, SyntheticEvent, useContext, useState} from 'react';
import {SearchContext} from "../../contexts/search.context";
import {Btn} from "../common/Btn";

import './Header.css';

export const Header = () => {
    const {search, setSearch} = useContext(SearchContext);
    const [inputValue, setInputValue] = useState(search);

    const setStateFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputValue);
    };

    return (
        <header>
            <h1>
                <strong>Mega</strong> Advertisements
            </h1>
            <Btn text={'Ad Advertisement'}/>
            <form
                className="search"
                onSubmit={setStateFromLocalState}
            >
                <input
                    className={"search__input"}
                    type="text"
                    placeholder="Search for Advertisement"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
                <Btn text={'Search'}/>
            </form>
        </header>
    )
};