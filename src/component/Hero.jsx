function Hero() {
    return (
        <section className="hero" id="top">
            <div className="hero-copy">
                <div className="availability"><span className="status-dot" /> Available for new opportunities</div>
                <p className="eyebrow">FULL-STACK DEVELOPER <span>/</span> TUNISIA</p>
                <h1>I build digital products people <em>love to use.</em></h1>
                <p className="intro">I’m Omar Habib, a software engineer who turns complex business problems into fast, thoughtful, and reliable web experiences.</p>
                <div className="hero-buttons">
                    <a href="#work"><button className="button-primary">Explore my work <span>↗</span></button></a>
                    <a href="#contact"><button className="button-quiet">Let’s talk <span>→</span></button></a>
                </div>
                <div className="hero-proof">
                    <div><strong>3+</strong><span>Years learning<br />& building</span></div>
                    <div><strong>10</strong><span>Technologies<br />in my toolkit</span></div>
                    <div><strong>∞</strong><span>Curiosity<br />for better work</span></div>
                </div>
            </div>
            <div className="hero-visual" aria-label="Developer workspace preview">
                <div className="visual-top"><span className="window-dots"><i /><i /><i /></span><span className="mono">omarhabib.dev</span><span className="visual-index">01 / 04</span></div>
                <div className="code-block mono">
                    <span className="code-comment">// make it useful</span><br />
                    <span className="code-keyword">const</span> <span className="code-name">developer</span> = {'{'}<br />
                    &nbsp;&nbsp;name: <span className="code-string">'Omar Habib'</span>,<br />
                    &nbsp;&nbsp;focus: <span className="code-string">'human-centered web'</span>,<br />
                    &nbsp;&nbsp;stack: [<span className="code-string">'React'</span>, <span className="code-string">'Node'</span>, <span className="code-string">'.NET'</span>],<br />
                    &nbsp;&nbsp;available: <span className="code-boolean">true</span><br />
                    {'}'}
                </div>
                <div className="visual-caption"><span>Currently crafting</span><strong>the next great thing</strong><span className="arrow">↗</span></div>
            </div>
        </section>

    );

}
export default Hero
