import { Button } from "./button";

interface SolutionCardProps {
  title: string;
  description: string;
  price: string;
  illustration: React.ReactNode;
  reverse?: boolean;
}

export function SolutionCard({
  title,
  description,
  price,
  illustration,
  reverse = false,
}: SolutionCardProps) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-8 lg:gap-12 py-12`}
    >
      <div className="flex-1 space-y-4">
        <h3 className="text-3xl font-bold text-foreground">{title}</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
        <p className="text-xl font-semibold text-foreground">{price}</p>
      </div>
      <div className="flex-1 flex justify-center">{illustration}</div>
    </div>
  );
}
