import React, { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'
import sun from './sun.svg'
import moon from './moon.svg'
import detectDarkMode from './darkMode'
import './darkMode.css'

const Button = () => {
    const [darkMode, setDarkMode] = useLocalStorage(
        "darkMode",
        detectDarkMode()
    );

    useEffect(() => {
        if (darkMode === "dark") {
            // document.body.classList.add("dark")
            document.getElementById("darkBg").classList.add("active")
            document.getElementById("darkBs").classList.add("active")
        } else {
            // document.body.classList.remove("dark")
            document.getElementById("darkBg").classList.remove("active")
            document.getElementById("darkBs").classList.remove("active")
        }
    }, [darkMode])

    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (event) => {
                const newColorScheme = event.matches ? "dark" : "light";
                setDarkMode(newColorScheme)
            });
    }, [setDarkMode])

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === "light" ? "dark" : "light"
        })
    }

    const btnNormal = "dark-mode-btn"
    const btnActive = "dark-mode-btn dark-mode-btn--active"

    return (
        <button className={darkMode === "dark" ? btnActive : btnNormal} onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    )
}

export default Button
