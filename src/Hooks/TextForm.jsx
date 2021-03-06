import React, { useState } from 'react';

function TextForm(props) {

    const handleUpperClick = () => {

        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowerClick = () => {

        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const [text, setText] = useState('Enter Text Here!');

    return (
        <div className='form' >
            <h1>
                {props.heading}
            </h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" onChange={handleOnChange} rows={8} value={text} />
            </div>
            <button type="button"
                onClick={handleUpperClick}
                class="btn btn-dark">Convert To Uppercase
            </button>
            <button type="button"
                onClick={handleLowerClick}
                class="btn btn-dark">Convert To Lowercase
            </button>
        </div>
    )
}

export default TextForm;