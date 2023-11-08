// NoticeText.js

import React, { useState } from 'react';
import styles from './NoticeText.module.css';

function NoticeText() {
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: "Important Announcement",
      content: "We have scheduled maintenance on the gaming server. Please plan accordingly.",
      date: "2023-11-15",
    },
    {
      id: 2,
      title: "New Game Release",
      content: "Exciting news! A new game will be released on November 20th. Get ready for the fun!",
      date: "2023-11-10",
    },
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const addNotice = () => {
    if (newTitle && newContent) {
      const newNotice = {
        id: notices.length + 1,
        title: newTitle,
        content: newContent,
        date: new Date().toLocaleDateString(),
      };
      setNotices([...notices, newNotice]);
      setNewTitle('');
      setNewContent('');
    }
  };

  const deleteNotice = (id) => {
    const updatedNotices = notices.filter((notice) => notice.id !== id);
    setNotices(updatedNotices);
  };

  return (
    <div className={styles.noticeTextContainer}>
      <div className={styles.addNoticeContainer}>
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className={styles.inputField}
        />
        <textarea
          placeholder="Content"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          className={styles.textArea}
        />
        <button onClick={addNotice} className={styles.addButton}>
          Add Notice
        </button>
      </div>
      <h2 className={styles.noticeTextTitle}>Gaming Dashboard Notices</h2>
      <div className={styles.noticeList}>
        {notices.map((notice) => (
          <div key={notice.id} className={styles.noticeItem}>
            <h3 className={styles.noticeTitle}>{notice.title}</h3>
            <p className={styles.noticeContent}>{notice.content}</p>
            <p className={styles.noticeDate}>Posted on: {notice.date}</p>
            <button
              className={styles.deleteButton}
              onClick={() => deleteNotice(notice.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoticeText;
