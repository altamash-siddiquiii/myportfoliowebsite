import SEOHead from "../components/SEOHead";
import { getPersonSchema } from "../data/personSchema";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <SEOHead
                title="Full Stack Developer (MERN)"
                description="Mohd Altamish is a self-taught Full Stack Developer specializing in React.js, Node.js, Express.js, and MongoDB — building authentication systems, REST APIs, and production-ready web applications."
                path="/"
                jsonLd={getPersonSchema()}
            />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Education />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
}