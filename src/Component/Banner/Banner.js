import React, {useContext, useState } from 'react';
import styles from './Banner.module.css';
import offerContext from '../../context/offerContext'

function Banner() {
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: "Important Announcement",
      imageUrl: "https://wallpapers.com/images/hd/youtube-banner-gaming-557nnzh0ovcuj01c.jpg",
      date: "2023-11-15",
    },
    {
      id: 2,
      title: "New Game Release",
      imageUrl: "https://img.freepik.com/premium-psd/gaming-youtube-banner_584197-753.jpg",
      date: "2023-11-10",
    },
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const context = useContext(offerContext)
  console.log("Contect ",context)
  //const { dashboardData } = context


  const addNotice = () => {
    if (newTitle && selectedImage) {
      const newNotice = {
        id: notices.length + 1,
        title: newTitle,
        imageUrl: URL.createObjectURL(selectedImage), // Display the selected image
        date: new Date().toLocaleDateString(),
      };
      setNotices([...notices, newNotice]);
      setNewTitle('');
      setSelectedImage(null);
    }
  };

  const deleteNotice = (id) => {
    const updatedNotices = notices.filter((notice) => notice.id !== id);
    setNotices(updatedNotices);
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      setSelectedImage(imageFile);
    }
  };

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.addNoticeContainer}>
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className={styles.imageInput}
        />
        <button onClick={addNotice} className={styles.addButton}>
          Add Banner
        </button>
      </div>
      <h2 className={styles.noticeTextTitle}>Gaming Dashboard Banners</h2>
      <div className={styles.noticeList}>
        {notices.map((notice) => (
          <div key={notice.id} className={styles.noticeItem}>
            
            {notice.imageUrl && (
              <img src={notice.imageUrl} alt="Banner" className={styles.noticeImage} />
            )}
            <h3 className={styles.noticeTitle}>{notice.title}</h3>
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

export default Banner;
