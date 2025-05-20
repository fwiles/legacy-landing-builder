
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "The team at Carter Legacy Planning made it easy and affordable. I avoided probate and finally feel peace of mind.",
      author: "Ana R., Tucson, AZ"
    },
    {
      id: 2,
      text: "I've used lawyers before, but this felt like a real conversation. I trust them with my family's future.",
      author: "Marcos G., El Paso, TX"
    },
    {
      id: 3,
      text: "I didn't know New Mexico probate was so complicated — I'm glad we set up a trust!",
      author: "Lisa M., Santa Fe, NM"
    }
  ];

  return (
    <section id="testimonials" className="section-anchor py-16 md:py-24 bg-cream">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy text-center mb-4">
          What Our Clients Say
        </h2>
        <p className="text-slate text-center mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what clients have to say about working with us.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sage to-navy"></div>
              <CardHeader className="pt-8">
                <span className="text-3xl text-gold">❝</span>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-navy italic mb-6">{testimonial.text}</p>
                <p className="text-slate font-medium">— {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
