import { ContactForm } from "@/components/sections/contact-form";

export function CallToAction() {
  return (
    <section id="contact" className="py-16 bg-[#122E44]">
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
  );
}
