import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This platform completely transformed how our team ships products. We went from monthly to weekly releases.",
    author: "Sarah Chen",
    role: "CTO, Acme Inc.",
  },
  {
    quote: "The analytics alone paid for the subscription ten times over. We finally understand our users.",
    author: "Marcus Rivera",
    role: "Head of Growth, Startify",
  },
  {
    quote: "I've tried every tool on the market. Nothing comes close to the simplicity and power of this platform.",
    author: "Priya Patel",
    role: "Founder, NovaTech",
  },
  {
    quote: "Our team onboarded in a single afternoon. The developer experience is genuinely delightful.",
    author: "James Okonkwo",
    role: "Engineering Lead, Flowbase",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 sm:py-32">
      <div ref={ref} className="container mx-auto px-6 section-fade-in">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Loved by builders everywhere</h2>
        </div>

        <div className="max-w-4xl mx-auto px-12">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.author} className="md:basis-1/2">
                  <Card className="border-border bg-card h-full">
                    <CardContent className="p-8 flex flex-col justify-between h-full">
                      <div>
                        <Quote className="h-8 w-8 text-primary/30 mb-4" />
                        <p className="text-foreground leading-relaxed mb-6">{t.quote}</p>
                      </div>
                      <div>
                        <p className="font-semibold">{t.author}</p>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
