import React, { useState } from 'react'
import elements from './elements.js'
import './styles.css'

function App() {
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [word1, setWord1] = useState([])
    const [word2, setWord2] = useState([])

    function handleDisplay() {
        const first = findElem(input1)
        const second = findElem(input2)
        setWord1(createTextBox(first))
        setWord2(createTextBox(second))
    }

    return (
        <div className="container">
            <div className="word-container">
                <div className="word1">{word1}</div>
                <div className="word2">{word2}</div>
            </div>
            <div className="input-container">
                <div className="input1">
                    <input
                        type="text"
                        placeholder="first word"
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                    />
                </div>
                <div className="input2">
                    <input
                        type="text"
                        placeholder="second word"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={handleDisplay}>Elementalize!</button>
                </div>
            </div>
        </div>
    )
}

export default App

function findElem(word) {
    let i = 0

    while (i < word.length) {
        let twoLetters = word.slice(i, i + 2)
        let oneLetter = word.charAt(i)

        if (elements.hasOwnProperty(twoLetters)) {
            return [
                word.slice(0, i),
                twoLetters,
                word.slice(i + 2, word.length),
                elements[twoLetters],
            ]
        }

        if (elements.hasOwnProperty(oneLetter)) {
            return [
                word.slice(0, i),
                oneLetter,
                word.slice(i + 1, word.length),
                elements[oneLetter],
            ]
        }
        i++
    }
    return [word]
}

function createTextBox(elem) {
    return (
        <div className="words">
            <span>{elem[0]}</span>
            {elem[1] && (
                <div style={{ backgroundColor: elem[3] }} className="element">
                    {elem[1]}
                </div>
            )}
            <span>{elem[2]}</span>
        </div>
    )
}
