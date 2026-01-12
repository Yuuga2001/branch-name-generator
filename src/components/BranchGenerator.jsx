import React, { useState } from 'react';
import { generateBranchNames } from '../services/openai';
import OptionsPanel from './OptionsPanel';
import ResultList from './ResultList';
import { FaMagic, FaSpinner } from 'react-icons/fa';
import './BranchGenerator.css';

const BranchGenerator = () => {
    const [description, setDescription] = useState('');
    const [options, setOptions] = useState({
        prefix: 'feature/',
        caseStyle: 'kebab-case', // Default for git
        separator: '-',
        includeTicket: false,
        ticketNumber: '',
        useHashPrefix: false,
        ticketSeparator: '/'
    });
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleGenerate = async () => {
        if (!description.trim()) return;
        setLoading(true);
        setError(null);
        setResults([]); // Clear previous results

        try {
            const names = await generateBranchNames(description, options);
            setResults(names);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Allow Ctrl+Enter to generate
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            handleGenerate();
        }
    }

    return (
        <div className="generator-container">
            <div className="input-section glass">
                <textarea
                    className="main-input"
                    placeholder="Describe your task... (e.g. カート機能の修正)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    rows={3}
                />
                <div className="action-row">
                    <span className="hint">Cmd + Enter to generate</span>
                    <button
                        className="generate-btn"
                        onClick={handleGenerate}
                        disabled={loading || !description.trim()}
                    >
                        {loading ? <FaSpinner className="spin" /> : <FaMagic />}
                        <span>Generate</span>
                    </button>
                </div>
            </div>

            <OptionsPanel options={options} setOptions={setOptions} />

            {error && <div className="error-message glass">
                ⚠️ {error}
            </div>}

            <ResultList results={results} />
        </div>
    );
};

export default BranchGenerator;
