import { CreditCard, Database } from "lucide-react";
import Image from "next/image";
import { SolutionCard } from "@/components/ui/solution-card";
import {
  ESGReportIllustration,
  SustainabilityStrategyIllustration,
  CarbonFootprintIllustration,
} from "@/components/ui/solution-illustrations";
import { ContactForm } from "@/components/ui/contact-form";

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

      <section className="py-16 bg-[#122E44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                Learn more about our product
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Feel free to contact us to understand how our non-financial data
                reporting software can help you meet European standards, your
                customers' expectations and your corporate sustainability goals.
              </p>
              <div className="space-y-2 text-blue-100">
                <p>
                  <strong>email:</strong> info@sustainly.tech
                </p>
                <p>
                  <strong>mobile:</strong> +421 902 402 292
                </p>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
