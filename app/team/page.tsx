import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Peter Špirec",
    title: "CEO",
    bio: "At Sustainly, we believe that the issue of ESG or sustainability can be approached pragmatically. There's no need to be afraid of it, you've done most of the work in your company, you just don't know that ESG is behind it. Peter brings over five years of expertise in corporate banking. He studied Business & Economics at the University of Liverpool.",
    experience: [
      "Sustainable Finance",
      "Institutional ESG governance",
      "Advising corporate clients",
      "First ESG bond in the banking sector in the Czech Republic",
      "Leadership of the European Taxonomy Working Group under the Czech Banking Association",
    ],
    linkedinUrl: "https://www.linkedin.com/in/peter-%C5%A1-653b7612a/",
    imageUrl: "/peter-spirec.jpeg",
  },
  {
    name: "Ondrej Ponteš",
    title: "CTO",
    bio: "Ondrej brings over six years of experience in information system development. He studied applied informatics at Masaryk University in Brno.",
    experience: [
      "software architect",
      "teaching at Masaryk University courses focused on Java technology",
      "technical manager",
      "full-stack developer",
      "tester",
    ],
    linkedinUrl: "https://www.linkedin.com/in/ondrej-pontes",
    imageUrl: "/ondrej-pontes.jpeg",
  },
];

export default function TeamPage() {
  return (
    <main>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground tracking-tight sm:text-5xl md:text-6xl mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The passionate individuals behind Sustainly who are dedicated to
              making ESG reporting accessible and practical for businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`flex flex-col lg:flex-row items-start gap-8 lg:gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    {member.imageUrl ? (
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        width={192}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-4xl font-bold text-muted-foreground">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      {member.name} - {member.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Experience
                    </h3>
                    <ul className="space-y-2">
                      {member.experience.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                      LinkedIn →
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
