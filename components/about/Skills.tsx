"use client";


const skillGroups = [

  {
    title:"AI & Machine Learning",

    skills:[
      "LLMs",
      "RAG Systems",
      "AI Agents",
      "LangChain",
      "LangGraph",
      "Prompt Engineering"
    ]

  },


  {
    title:"Backend Engineering",

    skills:[
      "Python",
      "FastAPI",
      "Django",
      "REST APIs",
      "GraphQL",
      "Microservices"
    ]

  },


  {
    title:"Cloud & DevOps",

    skills:[
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Linux",
      "Git"
    ]

  }

];



export default function Skills(){


  return (

    <section>


      <h3
        className=" text-3xl font-semibold mb-8 "
      >

        Technical Skills

      </h3>



      <div
        className=" space-y-10"
      >


        {
          skillGroups.map(
            (group)=>(
              
              <div
                key={group.title}
              >

                <h4
                  className=" text-xl text-cyan-400 mb-4 "
                >

                  {group.title}

                </h4>



                <div
                  className=" flex flex-wrap gap-3"
                >

                  {
                    group.skills.map(
                      (skill)=>(

                        <div
                          key={skill}

                          className=" px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-300 transition"
                        >

                          {skill}

                        </div>

                      )
                    )
                  }


                </div>


              </div>

            )
          )
        }


      </div>


    </section>

  );

}