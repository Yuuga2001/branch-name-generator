import React, { useState, useMemo } from 'react';
import './OptionsPanel.css';
import { FaCodeBranch, FaBug, FaFire, FaLightbulb } from 'react-icons/fa';

const PREFIXES = [
    { label: 'feature', value: 'feature/', icon: <FaLightbulb /> },
    { label: 'bugfix', value: 'bugfix/', icon: <FaBug /> },
    { label: 'hotfix', value: 'hotfix/', icon: <FaFire /> },
    { label: 'fix', value: 'fix/', icon: <FaCodeBranch /> },
];

const CASES = [
    { label: 'camelCase', value: 'camelCase' },
    { label: 'snake_case', value: 'snake_case' },
    { label: 'kebab-case', value: 'kebab-case' },
    { label: 'PascalCase', value: 'PascalCase' },
    { label: 'UPPER_CASE', value: 'UPPER_CASE' },
    { label: 'lower case', value: 'lower case' },
];

const OptionsPanel = ({ options, setOptions }) => {
    const [customPrefix, setCustomPrefix] = useState('');

    // Case Styleに応じたslugを生成
    const formatSlug = (caseStyle, separator) => {
        switch (caseStyle) {
            case 'camelCase':
                return 'hogeHoge';
            case 'PascalCase':
                return 'HogeHoge';
            case 'snake_case':
                return `hoge${separator}hoge`;
            case 'kebab-case':
                return `hoge${separator}hoge`;
            case 'UPPER_CASE':
                return `HOGE${separator}HOGE`;
            case 'lower case':
                return `hoge${separator}hoge`;
            default:
                return `hoge${separator}hoge`;
        }
    };

    // プレビュー用のブランチ名を生成
    const previewBranchName = useMemo(() => {
        let preview = '';

        // 1. Prefix
        if (options.prefix && options.prefix !== 'none') {
            preview += options.prefix;
        }

        // 2. Ticket Number
        if (options.includeTicket && options.ticketNumber) {
            const hashPart = options.useHashPrefix ? '#' : '';
            preview += `${hashPart}${options.ticketNumber}${options.ticketSeparator}`;
        }

        // 3. Slug (Case StyleとSeparatorを反映)
        preview += formatSlug(options.caseStyle, options.separator);

        return preview;
    }, [options]);

    const handlePrefixChange = (val) => {
        setOptions({ ...options, prefix: val });
        if (!PREFIXES.find(p => p.value === val)) {
            setCustomPrefix(val);
        } else {
            setCustomPrefix('');
        }
    };

    const handleCustomPrefixChange = (e) => {
        const val = e.target.value;
        setCustomPrefix(val);
        setOptions({ ...options, prefix: val });
    };

    return (
        <div className="options-panel glass">
            {/* プレビュー表示 */}
            <div className="preview-section">
                <span className="preview-label">Output Format:</span>
                <code className="preview-value">{previewBranchName}</code>
            </div>

            <div className="option-group">
                <label className="option-label">Prefix</label>
                <div className="prefix-grid">
                    {PREFIXES.map((p) => (
                        <button
                            key={p.value}
                            className={`prefix-btn ${options.prefix === p.value ? 'active' : ''}`}
                            onClick={() => handlePrefixChange(p.value)}
                        >
                            {p.icon} <span>{p.label}</span>
                        </button>
                    ))}
                    <div className="custom-prefix-wrapper">
                        <input
                            type="text"
                            placeholder="custom..."
                            className={`custom-prefix-input ${!PREFIXES.find(p => p.value === options.prefix) && options.prefix ? 'active' : ''}`}
                            value={customPrefix}
                            onChange={handleCustomPrefixChange}
                            onFocus={() => setOptions({ ...options, prefix: customPrefix })}
                        />
                    </div>
                </div>
            </div>

            <div className="options-row">
                <div className="option-group">
                    <label className="option-label">Case Style</label>
                    <div className="select-wrapper">
                        <select
                            value={options.caseStyle}
                            onChange={(e) => setOptions({ ...options, caseStyle: e.target.value })}
                            className="styled-select"
                        >
                            {CASES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                        </select>
                    </div>
                </div>

                <div className="option-group">
                    <label className="option-label">Word Separator</label>
                    <div className="toggle-group">
                        <button
                            className={`toggle-btn ${options.separator === '_' ? 'active' : ''}`}
                            onClick={() => setOptions({ ...options, separator: '_' })}
                        >
                            Underscore (_)
                        </button>
                        <button
                            className={`toggle-btn ${options.separator === '-' ? 'active' : ''}`}
                            onClick={() => setOptions({ ...options, separator: '-' })}
                        >
                            Hyphen (-)
                        </button>
                    </div>
                </div>
            </div>

            <div className="option-group">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                    <input
                        type="checkbox"
                        id="includeTicket"
                        checked={options.includeTicket}
                        onChange={(e) => setOptions({ ...options, includeTicket: e.target.checked })}
                        style={{ width: '1rem', height: '1rem', cursor: 'pointer', accentColor: 'var(--primary)' }}
                    />
                    <label htmlFor="includeTicket" className="option-label" style={{ margin: 0, cursor: 'pointer', color: options.includeTicket ? 'var(--text-main)' : 'var(--text-muted)' }}>
                        Include Ticket / Issue Number
                    </label>
                </div>

                {options.includeTicket && (
                    <div className="ticket-options" style={{
                        padding: '1rem',
                        background: '#f8fafc',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid #e2e8f0',
                        display: 'grid',
                        gridTemplateColumns: '1fr auto auto',
                        gap: '1rem',
                        alignItems: 'center'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>No.</label>
                            <input
                                type="text"
                                placeholder="e.g. 1234"
                                className="custom-prefix-input"
                                value={options.ticketNumber}
                                onChange={(e) => setOptions({ ...options, ticketNumber: e.target.value })}
                            />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <input
                                type="checkbox"
                                id="useHash"
                                checked={options.useHashPrefix}
                                onChange={(e) => setOptions({ ...options, useHashPrefix: e.target.checked })}
                                style={{ width: '1rem', height: '1rem', cursor: 'pointer', accentColor: 'var(--primary)' }}
                            />
                            <label htmlFor="useHash" style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>Use #</label>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Separator:</label>
                            <select
                                value={options.ticketSeparator}
                                onChange={(e) => setOptions({ ...options, ticketSeparator: e.target.value })}
                                className="styled-select"
                                style={{ padding: '0.4rem 2rem 0.4rem 0.8rem', fontSize: '0.9rem', minWidth: '80px' }}
                            >
                                <option value="/">/</option>
                                <option value="-">-</option>
                                <option value="_">_</option>
                            </select>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OptionsPanel;
