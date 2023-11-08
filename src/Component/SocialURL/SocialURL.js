// SocialURL.js

import React, { useState } from 'react';
import styles from './SocialURL.module.css';

function SocialURL() {
  const [socialURLs, setSocialURLs] = useState([
    {
      id: 1,
      platform: "Facebook",
      url: "https://www.facebook.com/example",
    },
    {
      id: 2,
      platform: "Twitter",
      url: "https://twitter.com/example",
    },
  ]);

  const [newPlatform, setNewPlatform] = useState('');
  const [newURL, setNewURL] = useState('');

  const addSocialURL = () => {
    if (newPlatform && newURL) {
      const newSocialURL = {
        id: socialURLs.length + 1,
        platform: newPlatform,
        url: newURL,
      };
      setSocialURLs([...socialURLs, newSocialURL]);
      setNewPlatform('');
      setNewURL('');
    }
  };

  const deleteSocialURL = (id) => {
    const updatedSocialURLs = socialURLs.filter((url) => url.id !== id);
    setSocialURLs(updatedSocialURLs);
  };

  return (
    <div className={styles.socialURLContainer}>
      <div className={styles.addSocialURLContainer}>
        <input
          type="text"
          placeholder="Platform"
          value={newPlatform}
          onChange={(e) => setNewPlatform(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="text"
          placeholder="URL"
          value={newURL}
          onChange={(e) => setNewURL(e.target.value)}
          className={styles.inputField}
        />
        <button onClick={addSocialURL} className={styles.addButton}>
          Add Social URL
        </button>
      </div>
      <h2 className={styles.socialURLTitle}>Social Media URLs</h2>
      <div className={styles.socialURLList}>
        {socialURLs.map((url) => (
          <div key={url.id} className={styles.socialURLItem}>
            <h3 className={styles.socialPlatform}>{url.platform}</h3>
            <a href={url.url} target="_blank" rel="noopener noreferrer" className={styles.socialURL}>
              {url.url}
            </a>
            <button
              className={styles.deleteButton}
              onClick={() => deleteSocialURL(url.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialURL;
