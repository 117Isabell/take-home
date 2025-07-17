import Image from "next/image";

export function ESGReportIllustration() {
  return (
    <div className="relative">
      <Image src="/esg-report.png" alt="ESG Report" width={320} height={320} />
    </div>
  );
}

export function SustainabilityStrategyIllustration() {
  return (
    <div className="relative">
      <Image
        src="/sustainability-strategy.png"
        alt="Sustainability Strategy"
        width={320}
        height={320}
      />
    </div>
  );
}

export function CarbonFootprintIllustration() {
  return (
    <div className="relative">
      <Image
        src="/carbon-footprint.png"
        alt="Carbon Footprint"
        width={320}
        height={320}
      />
    </div>
  );
}
