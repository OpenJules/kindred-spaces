import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { number: "01", title: "Sign Up", description: "Create your free account in seconds. No credit card required." },
  { number: "02", title: "Configure", description: "Set up your workspace with our intuitive onboarding flow." },
  { number: "03", title: "Launch", description: "Go live and start seeing results from day one." },
];

const HowItWorksSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 sm:py-32 bg-secondary/50">
      <div ref={ref} className="container mx-auto px-6 section-fade-in">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Three steps to get started</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary mb-6">
                <span className="text-2xl font-bold gradient-text">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
