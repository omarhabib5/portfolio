import { useState, useEffect, useRef } from 'react'
import Hero from './component/Hero'
import About from './component/about'
import Projects from './component/Project'
import Skills from './component/Skills'
import Contact from './component/contact'
import ThemeToggle from './component/toggleTheme'
import './App.css'

function App() {
    const [theme, setTheme] = useState("light")
    const appRef = useRef(null)

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }

    // Fade-in animation: watch every <section> and add "visible" once it scrolls into view
    useEffect(() => {
        const sections = appRef.current.querySelectorAll("section")

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible")
                    }
                })
            },
            { threshold: 0.15 }
        )

        sections.forEach((section) => {
            section.classList.add("fade-section")
            observer.observe(section)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <div className="app" data-theme={theme} ref={appRef}>
            <header className="site-header">
                <a className="brand" href="#top" aria-label="Omar Habib home">OH<span>.</span></a>
                <nav className="site-nav" aria-label="Primary navigation">
                    <a href="#work">Work</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </nav>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </header>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </div>
    )
}

export default App