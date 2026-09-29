import Hero from "./component/Hero"
import About from "./component/about"
import Contact from "./component/contact"
import Project from "./component/Project"
import Skills from "./component/Skills"
function App (){

    return (
            <div>
                <Hero/>
                <About/>
                <Project/>
                <Skills/>
                <Contact/>
            </div>
    )
}

export default App