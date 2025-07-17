import { CreditCard, Database } from "lucide-react";
import Image from "next/image";
import { SolutionCard } from "@/components/ui/solution-card";
import {
  ESGReportIllustration,
  SustainabilityStrategyIllustration,
  CarbonFootprintIllustration,
} from "@/components/ui/solution-illustrations";

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Create your own ESG report and calculate your carbon footprint
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                A non-financial reporting tool that makes it easy for you to
                meet European standards and your customers’ expectations.
              </p>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <Image src="/Group-627443.png" alt="" width={500} height={500} />
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Ready to launch your SaaS?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Our template provides everything you need to get your SaaS up
                and running quickly. Don't waste time on boilerplate - focus on
                what makes your product unique.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
