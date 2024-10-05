import React, { useRef, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { useAppDispatch, useAppSelector } from "../store/customer.store";
import { setSearchContent, clearSearchContent } from "../store/headerSearch.slice";
import "../style/header.css";

export function CustomerHeader(): JSX.Element {

    const dispatch = useAppDispatch();
    const searchContent = useAppSelector((state) => state.search.searchContent);
    const [showSearchArea, setShowSearchArea] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const toggleSearchArea = () => {
        if (!showSearchArea) {
            dispatch(clearSearchContent());
        }
        setShowSearchArea(!showSearchArea);
    };

    return (
        <Fragment>
            <div className="container-navbar">
                <span className="product-name">Dynamics 365 Business Central</span>

                <span onClick={toggleSearchArea} className="search">
                    Search
                </span>
            </div>

            {showSearchArea && (
                <div onClick={toggleSearchArea} className="backdrop"></div>
            )}

            {showSearchArea && (
                <div className="searcharea">
                    <input
                        tabIndex={1}
                        type="text"
                        value={searchContent}
                        onChange={(e) => dispatch(setSearchContent(e.target.value))}
                        ref={searchInputRef}
                    />
                </div>
            )}
        </Fragment >
    );
}