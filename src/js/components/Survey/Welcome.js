import './Survey.css'
import React from 'react';
import {Link} from 'react-router-dom';

import TaskStore from "../../stores/TaskStore";
import config from "../../config";

const NUM_EXERCISES = 13;
const WAITING_TIME = config.groupTimeout;

////

class Welcome extends React.Component {
    render() {
        if (TaskStore.isOverSwitchTabsLimit()) {
            return (
                <div/>
            );
        }

        return (
            <div className="Welcome">
                <div className="row">
                    <div className="col-md-12"> 
                        <div className="Info" >
                            <h2 className="text-center">Collaborative Learning</h2>

                            <hr/>
                            <h3>Requirements:</h3>
                            <ol type="1">
                                <li>
                                    <a href="https://www.whatismybrowser.com/" target="_blank">
                                    Check here</a> if the version of your browser meets our requirements: Google Chrome version 47 (or higher) and Mozilla Firefox version 44 (or higher).
                                </li>
                            </ol>

                            <hr/>
                            <h3>In this study, you are tasked with learning about a given topic. This study is composed of three parts:</h3>
                            <ol type="1">
                                <li><b>Diagnostic Test</b>.
                                    <p>
                                        This is a multiple-choice question test to find out what you already know.
                                        Please answer honestly. Your payment is not affected by the number of correct or incorrect answers.
                                    </p>
                                </li>
                                <li><b>Learning Session</b>.
                                    <p>
                                        We want you to use our custom web search system (we call it "SearchX") to learn about a given topic.
                                        You are given 20 minutes to search for documents about that topic.
                                        You need to collect and save all the Web pages, publications, and other online sources that are helpful for you to learn about the topic.
                                    </p>
                                    <p>
                                        Please use only SearchX to learn about the given topic.
                                        Do not use any other web search engine or search for an unrelated topic
                                        (e.g. your topic is <i>computer science</i>, we consider searches for <i>tomorrow's weather</i>, <i>the latest news</i>, <i>movie reviews</i>, etc. as severely off-topic).
                                        If you conduct such off-topic searches, we will cancel your participation.
                                    </p>
                                    <p>
                                        You are expected to interact with your collaboration partner during the learning session.
                                        Try to help each other in learning more effectively.
                                    </p>
                                </li>
                                <li><b>Final Test</b>.
                                    <p>
                                        We will give you {NUM_EXERCISES} exercises to complete to see how much you have learned through the learning phase;
                                        those exercises include questions about the given topic and the writing of an outline for your paper about this topic.
                                        Please answer honestly. Your payment is not affected by the number of correct or incorrect answers.
                                        Note that your answers must exceed a minimum word count and be on your assigned topic.
                                    </p>
                                </li>
                            </ol>

                            <hr/>
                            <h3>During the study, you will be paired up with another user.</h3>
                            <p>
                                We ask you to wait for a maximum of {WAITING_TIME} minutes for us to assign you a partner.
                                In the case that you have not received a partner after the waiting time, please stop the study without completion.
                                We will still give you part of the compensation for finishing the pretest.
                            </p>

                            <hr/>
                            <h3>You will need approximately 60 minutes to complete the whole study.</h3>

                            <hr/>
                            <h3>IMPORTANT!</h3>
                            <h4>We will cancel your participation if:</h4>
                            <ul>
                                <li> your answers are shorter than the required word count </li>
                                <li> your answers are off-topic </li>
                                <li> during the Diagnostic test and the Final test you change to a different tab more than three times (you will receive a warning ahead of time). Note that during the search phase, tab changes are expected as the search results open in new tabs. </li>
                                <li> you become inactive (no searching/browsing/scrolling/reading web pages/video watching) for more than 5 minutes during the learning phase. </li>
                            </ul>

                            <hr/>
                            <h3> Good Luck and Have Fun! </h3>
                            <Link to="/register" className="btn btn-primary btn-lg pull-right" role="button">Start!</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome;