
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQsSection = () => {
  const faqs = [
    {
      id: "faq-1",
      question: "Do I need a trust or is a will enough?",
      answer: "If you want to avoid probate, maintain privacy, or have a blended family or real estate, a trust is likely the better option. Wills alone require probate."
    },
    {
      id: "faq-2",
      question: "What happens if I die without a will or trust?",
      answer: "Each state has \"intestacy laws\" that dictate who gets what:\n\n• You lose control over who inherits\n\n• The court decides guardianship for your kids\n\n• Probate is required — and can cost thousands"
    },
    {
      id: "faq-3",
      question: "How often should I update my plan?",
      answer: "Every 3–5 years, or after:\n\n• Marriage, divorce, or birth/adoption\n\n• Significant asset changes (buying property, business)\n\n• Moving to a new state"
    },
    {
      id: "faq-4",
      question: "Can I do this all virtually?",
      answer: "Yes! Carter Legacy Planning serves clients across TX, NM, and AZ virtually. We handle consults by Zoom, provide secure digital document delivery, and coordinate notarization as needed."
    }
  ];

  return (
    <section id="faqs" className="section-anchor py-16 md:py-24 bg-cream">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy text-center mb-4">
          Common Questions Answered
        </h2>
        <p className="text-slate text-center mb-12 max-w-2xl mx-auto">
          Get answers to frequently asked questions about estate planning.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium text-navy py-4 hover:no-underline hover:text-navy/80">
                  <div className="flex items-center text-left">
                    <span className="text-green-600 mr-2">🟢</span>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate py-4 whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
