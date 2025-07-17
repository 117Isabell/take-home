import { SolutionCard } from "@/components/ui/solution-card";
import {
  ESGReportIllustration,
  SustainabilityStrategyIllustration,
  CarbonFootprintIllustration,
} from "@/components/ui/solution-illustrations";

export function SolutionsSection() {
  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our solutions</h2>
        </div>

        <div className="space-y-16">
          <SolutionCard
            title="ESG report"
            description="We will help you create a report for your business partners, banks or regulators. The report can be set up according to VSME or GRI standards. At the same time, you will receive a plan for implementing ESG requirements, a calculated carbon footprint and draft guidelines for compliance with all regulations."
            price="2,000 EUR excl. VAT"
            illustration={<ESGReportIllustration />}
          />

          <SolutionCard
            title="Sustainability strategy"
            description="Our tool will create a tailored strategy according to your requirements and help you design the ideal action plan. We build the strategy on your company's foundations such as ISO certifications or H&S and EMS standards. Additionally, you will find out where your competitors stand in ESG and what is good practice in a specific area of sustainability."
            price="800 EUR excl. VAT"
            illustration={<SustainabilityStrategyIllustration />}
            reverse={true}
          />

          <SolutionCard
            title="Carbon footprint"
            description="We will calculate your company's carbon footprint for you according to an internationally recognised standard GHG protocol. The carbon footprint is the first step in the sustainability journey and is also information that is very important for multinational companies with environmental goals. And they may just be your clients."
            price="800 EUR excl. VAT"
            illustration={<CarbonFootprintIllustration />}
          />
        </div>
      </div>
    </section>
  );
}
