import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const CTASection = () => {
  const ref = useScrollReveal();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for subscribing! We'll be in touch.");
      setEmail("");
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-secondary/50">
      <div ref={ref} className="container mx-auto px-6 section-fade-in">
        <div className="relative max-w-3xl mx-auto text-center rounded-3xl border border-border bg-card p-12 sm:p-16 overflow-hidden">
          <div className="absolute inset-0 -z-10 hero-gradient-bg opacity-5" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Join thousands of teams already building better products.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full h-12 px-5"
              required
            />
            <Button type="submit" className="rounded-full h-12 px-6 hero-gradient-bg border-0 hover:opacity-90 transition-opacity whitespace-nowrap">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
