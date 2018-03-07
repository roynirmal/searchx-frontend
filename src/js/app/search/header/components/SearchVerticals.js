import './SearchHeader.pcss'
import React from 'react';
import config from '../../../../config'
import Helpers from "../../../../utils/Helpers";

const SearchVerticals = function({activeVertical, changeHandler, provider}) {
    const verticalsList = config.providerVerticals[provider];

    let verticals = verticalsList.map((vertical, index) => {
        let cn = 'item';
        if (vertical === activeVertical) {
            cn += ' active';
        }

        return (
            <li key={index} className={cn} onClick={() => changeHandler(vertical)}>
                {Helpers.capitalizeFirstLetter(vertical)}
            </li>
        )
    });

    return (
        <div className="verticals">
            <ul>
                {verticals}
            </ul>
        </div>
    )
};

export default SearchVerticals;