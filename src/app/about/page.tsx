import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import AboutSidebar from "../../../components/about/AboutSidebar";
import Introduction from "../../../components/about/Introduction";
import Skills from "../../../components/about/Skills";
import Experience from "../../../components/about/Experience";
import Education from "../../../components/about/Education";


export default function AboutPage() {

    return (

        <main>

            <Navbar />

            <div className=" max-w-7xl mx-auto px-8 pt-16 grid lg:grid-cols-[250px_1fr] gap-12 ">
                <AboutSidebar />
                <div></div>
                <div className=" space-y-32 ">

                    <section id="introduction" className="py-16 mb-0">
                        <Introduction />
                    </section>


                    <section id="skills" className="py-16 mb-0">
                        <Skills />
                    </section>


                    <section id="experience" className="py-16 mb-0">
                        <Experience />
                    </section>


                    <section id="education" className="py-16 mb-0">
                        <Education />
                    </section>


                </div>


            </div>

            <Footer />


        </main>

    );

}