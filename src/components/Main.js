import React from "react";
import { useState} from "react";

export default function Main() {
    const [message, setMessage] = useState("");

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        console.log(message);
    }

    const handleConvert = (e) => {
        e.preventDefault();
        let text = message.split("\n");
        let json = {};
        for (let i = 0; i < text.length; i++) {
            let line = text[i].split(",");
            if (line.length === 2) {
                json[line[0]] = line[1];
            } else {
                json[line[0]] = line.slice(1);
            }
        }
        // If the JSON object value is an array iterate through the JSON object value array and remove any empty values.
        for (let key in json) {
            if (Array.isArray(json[key])) {
                for (let i = 0; i < json[key].length; i++) {
                    if (json[key][i] === "") {
                        json[key].splice(i, 1);
                    }
                }
            }
        }
        // Remove the last key value pair from the JSON object
        let lastKey = Object.keys(json).pop();
        delete json[lastKey];
        setMessage(JSON.stringify(json));
    }

    // When the reset button is clicked, the page will reload.
    const handleReset = () => {
        window.location.reload();
    }
    // When the copy button is clicked, the text area will be copied to the clipboard.
    const handleCopy = (e) => {
        e.preventDefault();
        let textarea = document.createElement("textarea");
        textarea.value = message;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
    }


    return (
        <div className="flex flex-col justify-center items-center h-screen">
        <section id="main">
            <div className="flex flex-col justify-center items-center p-5">
                <h1 className="text-center text-3xl font-bold text-white-800">
                    CSV to JSON Converter
                </h1>
            </div>
            <div className="flex flex-col justify-center items-center p-5">
                <h2 className="text-center text-xl font-bold text-white-800">
                    Paste your CSV data into the text area below and click the Convert button.
                </h2>
            </div>
            <div className="flex flex-col justify-center items-center p-5">
                <textarea className="text-left text-xl font-bold text-white-800" rows="10" cols="50" id="message" name="message" value={message} onChange={handleMessageChange}></textarea>
            </div>
            <div className="flex flex-col justify-center items-center p-5">
                <button className="text-center text-xl font-bold text-white-800" onClick={handleConvert}>Convert</button>
                <button className="text-center text-xl font-bold text-white-800" onClick={handleReset}>Reset</button>
                <button className="text-center text-xl font-bold text-white-800" onClick={handleCopy}>Copy</button>
            </div>

        </section>
        </div>
    );
}