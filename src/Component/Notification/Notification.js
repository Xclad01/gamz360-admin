import React, { useState } from 'react';
import styles from './Notification.module.css';

const Notification = () => {
  const [notificationTitle, setNotificationTitle] = useState('');
  const [notificationDescription, setNotificationDescription] = useState('');

  const handleTitleChange = (e) => {
    setNotificationTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setNotificationDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // You can add your logic here to handle the form submission
    console.log('Title:', notificationTitle);
    console.log('Description:', notificationDescription);
  };

  return (
    <div className={styles.notificationPage}>
      <h2>Notification Page</h2>
      <form className={styles.notificationForm} onSubmit={handleSubmit}>
        <label className={styles.inputlabel}>Notification Title*</label>
        <input
          type="text"
          className={styles.input}
          placeholder="Notification Title"
          value={notificationTitle}
          onChange={handleTitleChange}
          required
        />
        <label className={styles.inputlabel}>Notification Description*</label>
        <input
          type="text"
          className={styles.input}
          placeholder="Notification Description"
          value={notificationDescription}
          onChange={handleDescriptionChange}
          required
        />
        <button className={styles.formSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Notification;
