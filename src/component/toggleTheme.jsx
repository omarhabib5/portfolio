function ThemeToggle({ theme, toggleTheme }) {
    return (
        <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}>
            <span>{theme === "light" ? "◐" : "○"}</span>
        </button>
    )
}

export default ThemeToggle