import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Sustainly Logo"
                width={200}
                height={50}
                className="h-8 w-auto"
              />
            </div>
            <Link
              href="/privacy-policy"
              className="text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">
              Get started with ESG reporting
            </h3>
            <p className="text-primary-foreground/80 mb-6 text-lg">
              Book an appointment with us and we will introduce you to our
              product
            </p>
            <div className="space-y-2">
              <a
                href="mailto:info@sustainly.tech"
                className="block text-accent hover:text-accent/80 transition-colors"
              >
                info@sustainly.tech
              </a>
              <a
                href="tel:+420725957080"
                className="block text-accent hover:text-accent/80 transition-colors"
              >
                +420 725 957 080
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
