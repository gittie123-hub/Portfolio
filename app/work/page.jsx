export const metadata = { title: "Selected Work | Sainath Seeram" };

const work = [
  {
    company: "Bank of America",
    title: "Banking IVR and monitoring",
    contribution:
      "Integrated customer-service call flows with Java REST services and supported an Angular portal where teams could see call status, workflow failures, and API errors.",
    stack: ["Java", "Spring Boot", "Groovy", "Angular", "TypeScript"],
  },
  {
    company: "Toyota Financial Services",
    title: "Profile maintenance",
    contribution:
      "Built a Spring Boot service and React components that automated profile cleanup across enterprise systems. Integrated Kafka for asynchronous data exchange.",
    stack: ["Java", "Spring Boot", "React", "Kafka", "MongoDB", "Oracle"],
  },
  {
    company: "LTIMindtree",
    title: "Internal analytics dashboard",
    contribution:
      "Built reusable React components that displayed reporting data from backend APIs and developed REST services using Spring Boot and Hibernate.",
    stack: ["Java", "Spring Boot", "React", "Hibernate"],
  },
];

export default function Work() {
  return (
    <main className="container mx-auto pb-16">
      <h1 className="h2 mb-8">Selected work</h1>
      <div className="grid gap-5 lg:grid-cols-3">
        {work.map(({ company, title, contribution, stack }) => (
          <article key={company} className="flex flex-col rounded-xl border border-white/15 p-6">
            <p className="text-sm font-medium text-accent">{company}</p>
            <h2 className="mb-3 mt-2 text-2xl font-semibold leading-tight">{title}</h2>
            <p className="mb-5 flex-1 text-white/80">{contribution}</p>
            <ul aria-label="Technologies" className="flex flex-wrap gap-2">
              {stack.map((technology) => (
                <li key={technology} className="rounded-full bg-white/10 px-3 py-1 text-sm">
                  {technology}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
}
