import Image from "next/image";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { CallToAction } from "@/components/sections/call-to-action";

export default function HomePage() {
  return (
    <main>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-foreground tracking-tight sm:text-5xl md:text-6xl">
                Create your own ESG report and calculate your carbon footprint
              </h1>
              <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                A non-financial reporting tool that makes it easy for you to
                meet European standards and your customers' expectations.
              </p>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <Image src="/Group-627443.png" alt="" width={500} height={500} />
            </div>
          </div>
        </div>
      </section>

      <SolutionsSection />
      <CallToAction />
    </main>
  );
}
