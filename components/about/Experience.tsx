"use client";


const experiences = [

    {
        period: "Oct 2022 - Apr 2026",

        role: "Senior AI & Automation Engineer",

        company: "REALTECH Inc.",

        description:
            "Designed and developed AI-powered applications using LLMs, RAG systems, AI agents, and automation workflows. Built scalable backend services and intelligent solutions using Python, FastAPI, cloud technologies, and modern AI frameworks."

    },


    {
        period: "Oct 2020 - Aug 2022",

        role: "Senior Python Engineer",

        company: "Avenue Code",

        description:
            "Developed scalable backend systems using Python, Django, FastAPI, databases, and cloud infrastructure. Improved application performance through optimized architectures, automation, and testing practices."

    },


    {
        period: "Jul 2019 - Sep 2020",

        role: "Senior Python Developer",

        company: "DB1 Global Software",

        description:
            "Built enterprise applications using Python frameworks, REST APIs, GraphQL, PostgreSQL, and AWS services. Focused on scalable architecture, security, and system reliability."

    },


    {
        period: "May 2018 - Jun 2019",

        role: "Software Engineer",

        company: "BRQ Digital Solutions",

        description:
            "Supported software development using Python, PHP, JavaScript, and SQL. Worked on backend development, automation scripts, testing, and application improvements."

    }

];



export default function Experience() {


    return (

        <section>


            <h3
                className=" text-3xl font-semibold mb-12 "
            >

                Work Experience

            </h3>




            <div
                className=" relative border-l border-cyan-400/30 ml-4 space-y-12 "
            >


                {
                    experiences.map(
                        (item, index) => (

                            <div
                                key={index}

                                className=" relative pl-10 "
                            >


                                {/* Timeline dot */}

                                <div
                                    className=" absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] "
                                />




                                <div
                                    className=" text-sm text-cyan-400 mb-2 "
                                >

                                    {item.period}

                                </div>




                                <h4
                                    className=" text-xl font-semibold "
                                >

                                    {item.role}

                                </h4>



                                <div
                                    className=" text-gray-400 mb-3"
                                >

                                    {item.company}

                                </div>




                                <p
                                    className=" text-gray-400 leading-relaxed max-w-3xl"
                                >

                                    {item.description}

                                </p>



                            </div>

                        )
                    )
                }


            </div>


        </section>

    );

}