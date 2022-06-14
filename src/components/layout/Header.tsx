import React, {SyntheticEvent, useContext, useState} from 'react';
import {SearchContext} from "../../contexts/search.context";
import {Btn} from "../common/Btn";

import './Header.css';
import {Link} from "react-router-dom";

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
                <Link to='/' className={'logo'}>
                <strong>Mega</strong> Advertisements
                </Link>
            </h1>
            <Btn to="/ad" text={'Add Advertisement'}/>
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