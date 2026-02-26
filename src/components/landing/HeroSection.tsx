import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full hero-gradient-bg opacity-20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-8 animate-fade-in">
          <span className="inline-block w-2 h-2 rounded-full bg-accent" />
          Now available — start building today
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Build something{" "}
          <span className="gradient-text">extraordinary</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          A modern platform that helps you ship faster, iterate smarter, and deliver experiences your users will love.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" className="rounded-full px-8 text-base h-12 hero-gradient-bg border-0 hover:opacity-90 transition-opacity">
            Get Started Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 text-base h-12">
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
