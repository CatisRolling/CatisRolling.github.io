import { useState, useEffect, use } from "react";

const togglecomponent = () => {
    const [isDark, setDarkMode] = useState(false);

    const HandleToggleChange = () => {
        setDarkMode(isDark => !isDark);
    }

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.setAttribute("data-theme", "dark");
        } else {
            root.removeAttribute("data-theme");
        }
    });

    return (
        <label class = "mode-toggle">
            <input 
                type = "checkbox" 
                id = "dark-mode-toggle" name = "toggle" 
                onChange = {HandleToggleChange}
            />
            <span class = "slider"></span>
        </label>
    )
}

export default togglecomponent;