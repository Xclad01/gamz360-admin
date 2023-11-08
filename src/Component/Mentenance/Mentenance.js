import React, { useState } from 'react'
import styles from './Mentenance.module.css';


const Mentenance = () => {
    const [mode, setMode] = useState(false)
    const changeMode = () => {
        setMode(!mode)
    }
    return (
        <div className={styles.mentenancelLayout}>
            <h1>Mentenance</h1>
            <div className={styles.mentenancelbox1} >
                <div className={styles.mentenancelbox1Line1}>
                    <div>Game Version</div>
                    <div>32.2</div>
                </div>
                <div className={styles.mentenancelbox1Line1}>
                    <div>Mentenance mode</div>
                    <div className={mode ? styles.mentenancelbox2buttontrue : styles.mentenancelbox2buttonfalse} onClick={changeMode}>
                        {mode ? "Yes" : "No"}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mentenance