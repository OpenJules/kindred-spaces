import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Zap, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance that keeps your users engaged. Sub-second load times, every time.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade security baked in from day one. Your data stays safe, always.",
  },
  {
    icon: BarChart3,
    title: "Actionable Insights",
    description: "Real-time analytics that help you make smarter decisions and grow faster.",
  },
];

const FeaturesSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 sm:py-32">
      <div ref={ref} className="container mx-auto px-6 section-fade-in">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Features</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything you need to succeed</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl hero-gradient-bg text-primary-foreground">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
