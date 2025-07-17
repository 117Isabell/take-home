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
        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
        <p className="text-xl font-semibold text-gray-700">{price}</p>
        <Button className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-200">
          Learn more
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
      </div>
      <div className="flex-1 flex justify-center">{illustration}</div>
    </div>
  );
}
