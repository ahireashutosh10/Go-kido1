import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Background.module.css';

const Background = () => {
  const [query, setQuery] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [fullTextIndex, setFullTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const phrases = [
    'at the best price!',
    'with unique food!',
    'with nice location!',
  ];

  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  useEffect(() => {
    const currentPhrase = phrases[fullTextIndex];
    if (charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentPhrase[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayText('');
        setFullTextIndex((prev) => (prev + 1) % phrases.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, fullTextIndex]);

  return (
    <div className={styles['background-container']}>
      <div className={styles.content}>
        <p className={styles.para}>Delivery or Takeaway Food</p>

        <h2 className={`${styles.subheading} ${styles.typewriter}`}>
          {displayText}
        </h2>

        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Your Address or postal code"
            className={styles.inputField}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={styles.SearchBTN} onClick={handleSearch}>
            Search
          </button>
        </div>

        <h4 className={styles.subheading}>
          Trending:- Pizza, Sushi, Burgher, Nudeln, Indisch, Thai uvm
        </h4>
      </div>

      <div className={styles['wave-container']}>
        <div className={`${styles.wave} ${styles.wave1}`}></div>
        <div className={`${styles.wave} ${styles.wave2}`}></div>
        <div className={`${styles.wave} ${styles.wave3}`}></div>
      </div>
    </div>
  );
};

export default Background;
