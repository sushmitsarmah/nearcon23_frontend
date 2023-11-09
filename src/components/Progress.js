import React, { useState, useEffect } from 'react';

export const Progress = ({ loading }) => {
    if (loading) {
        return (
            <div className={`absolute top-1/2 left-1/2 flex flex-col items-center text-3xl font-bold progress ${loading ? "progress-success" : "progress-failure"}`}
                style={{ height: '200px', background: 'transparent', marginLeft: '-100px', marginTop: '-100px', zIndex: 10 }}>
                <p className='text-white'>The AI is thinking ....</p>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: "auto", background: "transparent", display: "block" }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <defs><mask id="ldio-nq0ydvzqbn-mask"><circle cx="50" cy="50" r="45" fill="#fff"></circle></mask></defs>
                    <circle cx="50" cy="50" r="45" fill="#4e8f9e"></circle>
                    <path d="M32.32233047033631 67.67766952966369 L39.39339828220179 60.60660171779821 A15 15 0 0 1 60.60660171779821 39.39339828220179 L67.67766952966369 32.32233047033631 L167.6776695296637 132.3223304703363 L132.3223304703363 167.6776695296637 Z" fill="#37646f" mask="url(#ldio-nq0ydvzqbn-mask)"></path>
                    <g transform="translate(50 50)">
                        <g>
                            <animateTransform attributeName="transform" type="rotate" values="0;360" keyTimes="0;1" dur="2.6315789473684212s" repeatCount="indefinite"></animateTransform>
                            <path d="M37.43995192304605 -6.5 L47.43995192304605 -6.5 L47.43995192304605 6.5 L37.43995192304605 6.5 A38 38 0 0 1 35.67394948182593 13.090810836924174 L35.67394948182593 13.090810836924174 L44.33420351967032 18.090810836924174 L37.83420351967032 29.34914108612188 L29.17394948182593 24.34914108612188 A38 38 0 0 1 24.34914108612188 29.17394948182593 L24.34914108612188 29.17394948182593 L29.34914108612188 37.83420351967032 L18.090810836924184 44.33420351967032 L13.090810836924183 35.67394948182593 A38 38 0 0 1 6.5 37.43995192304605 L6.5 37.43995192304605 L6.500000000000001 47.43995192304605 L-6.499999999999995 47.43995192304606 L-6.499999999999996 37.43995192304606 A38 38 0 0 1 -13.09081083692417 35.67394948182593 L-13.09081083692417 35.67394948182593 L-18.09081083692417 44.33420351967032 L-29.34914108612187 37.834203519670325 L-24.349141086121872 29.173949481825936 A38 38 0 0 1 -29.17394948182592 24.34914108612189 L-29.17394948182592 24.34914108612189 L-37.83420351967031 29.349141086121893 L-44.33420351967031 18.0908108369242 L-35.67394948182592 13.090810836924193 A38 38 0 0 1 -37.43995192304605 6.5000000000000036 L-37.43995192304605 6.5000000000000036 L-47.43995192304605 6.500000000000004 L-47.43995192304606 -6.499999999999993 L-37.43995192304606 -6.499999999999994 A38 38 0 0 1 -35.67394948182593 -13.090810836924167 L-35.67394948182593 -13.090810836924167 L-44.33420351967032 -18.090810836924163 L-37.834203519670325 -29.34914108612187 L-29.173949481825936 -24.34914108612187 A38 38 0 0 1 -24.349141086121893 -29.17394948182592 L-24.349141086121893 -29.17394948182592 L-29.349141086121897 -37.834203519670304 L-18.0908108369242 -44.334203519670304 L-13.090810836924195 -35.67394948182592 A38 38 0 0 1 -6.500000000000005 -37.43995192304605 L-6.500000000000005 -37.43995192304605 L-6.500000000000007 -47.43995192304605 L6.49999999999999 -47.43995192304606 L6.499999999999992 -37.43995192304606 A38 38 0 0 1 13.090810836924149 -35.67394948182594 L13.090810836924149 -35.67394948182594 L18.090810836924142 -44.33420351967033 L29.349141086121847 -37.83420351967034 L24.349141086121854 -29.17394948182595 A38 38 0 0 1 29.17394948182592 -24.349141086121893 L29.17394948182592 -24.349141086121893 L37.834203519670304 -29.349141086121897 L44.334203519670304 -18.0908108369242 L35.67394948182592 -13.090810836924197 A38 38 0 0 1 37.43995192304605 -6.500000000000007 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20" fill="#f8b26a" transform="scale(0.65)">
                            </path>
                        </g>
                    </g>
                </svg>
            </div>
        );
    } else {
        return "";
    }
};