import './Search.pcss';
import React from 'react';

import {log} from '../../utils/Logger';
import {LoggerEventTypes} from '../../utils/LoggerEventTypes';

import SearchHeaderContainer from './header/SearchHeaderContainer';
import SearchResultsContainer from "./results/SearchResultsContainer";
import QueryHistoryContainer from "./features/queryhistory/QueryHistoryContainer";
import BookmarkContainer from "./features/bookmark/BookmarkContainer";
import Chat from "./features/chat/Chat";

class Search extends React.Component {
    componentDidMount(){
        sessionStorage.clear();

        if (this.props.collaborative) {
            Chat();
        }
    }

    componentWillUnmount() {
        if (this.props.collaborative) {
            const messages = document.querySelector(".chat-content").innerHTML;
            log(LoggerEventTypes.CHAT_ARCHIVE, {
                messages: messages
            });

            const element = document.querySelector("#conversejs");
            element.parentElement.removeChild(element);
        }
    }

    render() {
        return (
            <div className="Search">
                <SearchHeaderContainer/>

                <div className="Content" id="intro-collab-color">
                    <div className="Main">
                        <SearchResultsContainer/>
                    </div>

                    <div className="Side">
                        <QueryHistoryContainer/>
                        <BookmarkContainer/>
                    </div>
                </div>

                <div className="text-center" >
                    <hr/>
                    <p className="Footer">
                        About <a href="/about" target="_blank">SearchX</a>.
                    </p>
                </div>
            </div>
        )
    }
}

Search.defaultProps = {
    collaborative: true
};

export default Search;