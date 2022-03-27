import { useState } from 'react'
import styles from './counter.module.css'
const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <>
            <h2>{counter}</h2>
            <button
                onClick={() => {
                    setCounter((c) => c + 1)
                }}
                type='button'
                className={styles.button}
            >
                count
            </button>
        </>
    )
}

export default Counter
