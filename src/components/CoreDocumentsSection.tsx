
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CoreDocumentsSection = () => {
  const documents = [
    {
      id: 1,
      title: "Last Will and Testament",
      items: [
        "Names beneficiaries and guardians for minors",
        "Goes through probate (court-supervised process)",
        "Can be slow and public"
      ]
    },
    {
      id: 2,
      title: "Revocable Living Trust",
      items: [
        "Avoids probate and maintains privacy",
        "Lets you manage assets during life and after death",
        "Stronger for blended families, real estate owners, or high-value estates"
      ]
    },
    {
      id: 3,
      title: "Durable Power of Attorney",
      items: [
        "Authorizes someone to manage your finances if you're incapacitated"
      ]
    },
    {
      id: 4,
      title: "Medical Power of Attorney / Health Care Proxy",
      items: [
        "Allows someone to make medical decisions for you if you cannot"
      ]
    },
    {
      id: 5,
      title: "Advance Directive (Living Will)",
      items: [
        "Outlines end-of-life medical wishes (e.g., life support preferences)"
      ]
    },
    {
      id: 6,
      title: "HIPAA Authorization",
      items: [
        "Grants access to your private medical information"
      ]
    }
  ];

  return (
    <section id="documents" className="section-anchor py-16 md:py-24 bg-cream">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy text-center mb-4">
          The Core Documents in Every Estate Plan
        </h2>
        <p className="text-slate text-center mb-12 max-w-2xl mx-auto">
          Understanding these essential documents will help you make informed decisions about your estate plan.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <Card key={doc.id} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium flex items-start">
                  <span className="text-sage mr-2">✅</span>
                  <span>{doc.id}. {doc.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  {doc.items.map((item, index) => (
                    <li key={index} className="text-sm text-slate">
                      • {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreDocumentsSection;
