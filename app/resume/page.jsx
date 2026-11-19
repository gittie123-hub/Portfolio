export const metadata = { title: "Skills and Education | Sainath Seeram" };

const skills = [
  ["Backend", "Java, Spring Boot, REST APIs, Hibernate, Apache Kafka"],
  ["Frontend", "Angular, React, TypeScript, JavaScript"],
  ["Data", "PostgreSQL, MongoDB, Oracle"],
  ["Cloud and delivery", "AWS, Azure, Docker, Kubernetes, Jenkins"],
];

export default function Resume() {
  return (
    <main className="container mx-auto pb-16">
      <h1 className="h2 mb-8">Skills and education</h1>
      <dl className="grid max-w-4xl gap-x-8 gap-y-6 sm:grid-cols-2">
        {skills.map(([category, technologies]) => (
          <div key={category} className="border-t border-white/15 pt-4">
            <dt className="text-lg font-semibold text-accent">{category}</dt>
            <dd className="text-white/80">{technologies}</dd>
          </div>
        ))}
      </dl>
      <section className="mt-10">
        <h2 className="mb-2 text-2xl font-semibold">Education</h2>
        <p className="text-white/80">Master’s in Information Systems, Wilmington University</p>
      </section>
    </main>
  );
}
