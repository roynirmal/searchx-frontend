import './Bookmarks.pcss';
import React from 'react';
import BookmarksItem from './BookmarksItem';

const Bookmarks = function({bookmarks, removeHandler, starHandler, clickHandler}) {
    const list = bookmarks.map((data, index) => {
        return <BookmarksItem
            key={index}
            data={data}
            removeHandler={removeHandler}
            starHandler={starHandler}
            clickHandler={clickHandler}
        />
    });

    return (
        <div className="Bookmarks" id="intro-bookmarks-bar">
            <h3> <i className="fa fa-bookmark medium"/> BOOKMARKS</h3>
            <div className="list">
                {list}
            </div>
        </div>
    )
};

export default Bookmarks;