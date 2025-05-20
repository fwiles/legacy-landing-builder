
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, FileText, FileCheck } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      id: 1,
      title: "Free Planning Call",
      description: "We'll answer your questions and help you choose the right plan.",
      icon: Phone,
      iconColor: "text-sage"
    },
    {
      id: 2,
      title: "Design Your Plan",
      description: "Via Zoom or phone, with custom guidance and flat-fee transparency.",
      icon: FileText,
      iconColor: "text-navy"
    },
    {
      id: 3,
      title: "Sign + Protect",
      description: "We'll handle the paperwork, funding guidance, and notary options.",
      icon: FileCheck,
      iconColor: "text-gold"
    }
  ];

  return (
    <section id="process" className="section-anchor py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy text-center mb-4">
          Our Simple 3-Step Process
        </h2>
        <p className="text-slate text-center mb-12 max-w-2xl mx-auto">
          We've streamlined estate planning to make it straightforward and stress-free.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card key={step.id} className="border shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-col items-center text-center pb-2">
                <div className={`w-16 h-16 rounded-full bg-cream flex items-center justify-center mb-4`}>
                  <step.icon className={`h-8 w-8 ${step.iconColor}`} />
                </div>
                <CardTitle className="text-xl font-medium">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-slate">
                {step.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
