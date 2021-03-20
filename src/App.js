import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import  twitterIcon from './images/TwitterLogo.png';

export default function App() {
  const [quote, setQuote] = useState([]);
  useEffect(async () => {
    await getQuote();
  }, []);

  const getQuote = async () => {
    const response = await axios.get('https://api.quotable.io/random');
    setQuote(response.data);
    randomColor();
  };

  const randomColor = () => {
    const background = document.getElementById('background');
    const text = document.getElementById('text');
    const author = document.getElementById('author');
    const nQButton = document.getElementById('new-quote');
    const newRandomColor = colors[Math.floor(Math.random() * colors.length)];
    background.style.backgroundColor = newRandomColor;
    text.style.color = newRandomColor;
    author.style.color = newRandomColor;
    nQButton.style.backgroundColor = newRandomColor;
  };

  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857',
  ];

  return (
    <html id="background" className="oneColor">
      <div id="quote-box">
        <div id="text">"{quote.content}"</div>
        <div id="author">-{quote.author}</div>
        <a
          id="tweet-quote"
          class="twitter-share-button"
          href="https://twitter.com/intent/tweet"
        >
          Tweet
        </a>
        <button id="new-quote" className="oneColor" onClick={() => getQuote()}>
          New Quote
        </button>
      </div>
    </html>
  );
}