import React, { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';
import './ResultList.css';

const ResultList = ({ results }) => {
    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleCopy = (text, index) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 2000);
        });
    };

    if (!results || results.length === 0) return null;

    return (
        <div className="result-list-container">
            <h3 className="result-title">Generated Suggestions</h3>
            <ul className="results">
                {results.map((result, index) => (
                    <li key={index} className="result-item glass" onClick={() => handleCopy(result, index)}>
                        <code className="branch-name">{result}</code>
                        <button className="copy-btn" title="Copy to clipboard">
                            {copiedIndex === index ? <FaCheck className="icon-success" /> : <FaCopy />}
                        </button>
                        {/* Visual ripple or feedback could be added here */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResultList;
