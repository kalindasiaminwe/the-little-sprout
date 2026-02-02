
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { careGuides } from '@/components/data/plants';

const CareGuides = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto py-12 md:p-15 max-sm:p-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl max-sm:text-3xl font-bold text-foreground lg:text-5xl">
            Plant Care Guides
          </h1>
          <p className="mt-4 max-sm:mt-2 max-w-2xl mx-auto text-lg max-sm:text-md text-muted-foreground">
            Everything you need to keep your plants happy and thriving. 
            From watering basics to expert tips, we've got you covered.
          </p>
        </div>

        {/* Care Guide Cards */}
        <div className="grid gap-8 lg:grid-cols-2 max-sm:grid-cols-1">
          {careGuides.map((guide) => (
            <div
              key={guide.id}
              className="rounded-2xl bg-card p-8 shadow-md hover:shadow-hover transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-5xl">{guide.icon}</span>
                <div className="flex-1">
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    {guide.title}
                  </h2>
                  <p className="mt-2 text-muted-foreground">{guide.description}</p>
                </div>
              </div>

              <div className="mt-6">
                <Accordion type="single" collapsible>
                  <AccordionItem value="tips" className="border-none">
                    <AccordionTrigger className="text-primary font-medium hover:no-underline py-2">
                      View Tips
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 pt-2">
                        {guide.tips.map((tip, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-foreground/80"
                          >
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tips Banner */}
        <section className="mt-16 rounded-3xl bg-green-950/20 p-8 lg:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground">
              🌱 Quick Plant Parent Tips
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-card/80 backdrop-blur-sm p-6 shadow-botanical">
                <p className="text-4xl mb-3">🪴</p>
                <h3 className="font-display font-semibold text-foreground">Start Easy</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Begin with low-maintenance plants like pothos or snake plants
                </p>
              </div>
              <div className="rounded-2xl bg-card/80 backdrop-blur-sm p-6 shadow-botanical">
                <p className="text-4xl mb-3">💧</p>
                <h3 className="font-display font-semibold text-foreground">Less is More</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Overwatering is the #1 killer of houseplants. When in doubt, wait
                </p>
              </div>
              <div className="rounded-2xl bg-card/80 backdrop-blur-sm p-6 shadow-botanical">
                <p className="text-4xl mb-3">☀️</p>
                <h3 className="font-display font-semibold text-foreground">Light Matters</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Match plants to your space's natural light conditions
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CareGuides;
