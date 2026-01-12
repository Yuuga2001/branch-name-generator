import React from 'react';
import BranchGenerator from './components/BranchGenerator';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <main className="container">
        <header className="header">
          <h1 className="title text-gradient">Branch Name Generator</h1>
          <p className="subtitle">
            タスクの説明を完璧な Git ブランチ名に変換します。
          </p>
        </header>

        <BranchGenerator />

        <footer className="footer">
          <p>Powered by OpenAI ✦ Built with React & Vite</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
