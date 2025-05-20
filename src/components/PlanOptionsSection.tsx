
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PlanOptionsSection = () => {
  return (
    <section id="plans" className="section-anchor py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy text-center mb-4">
          Simple Flat-Fee Plans That Fit Your Life
        </h2>
        <p className="text-slate text-center mb-12 max-w-2xl mx-auto">
          Choose from our transparent pricing options tailored to your specific needs and family situation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Basic Will Plan */}
          <Card className="border-t-4 border-t-sage shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">👨‍👩‍👧</span>
                <CardTitle className="text-xl md:text-2xl">Basic Will Plan</CardTitle>
              </div>
              <CardDescription className="text-slate text-base">
                Perfect for individuals or couples who want a simple plan and don't own significant real estate.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-2xl font-serif font-bold text-navy">$1,500</p>
              <div>
                <p className="font-medium mb-2">Includes:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-sage mr-2">✓</span>
                    Last Will and Testament
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-2">✓</span>
                    Durable Power of Attorney
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-2">✓</span>
                    Medical Power of Attorney
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-2">✓</span>
                    Advance Directive (Living Will)
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-2">✓</span>
                    HIPAA Authorization
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-2">✓</span>
                    Virtual consultation
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-2">✓</span>
                    Printed or digital signing instructions
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-2">✓</span>
                    Notary coordination (where available)
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start pt-2 space-y-2">
              <div className="flex items-start">
                <span className="text-sage mr-2">✅</span>
                <span><strong>Great for:</strong> renters, young families, simple assets</span>
              </div>
              <Badge variant="secondary" className="bg-cream text-navy">
                📍 Available in TX, NM, and AZ
              </Badge>
            </CardFooter>
          </Card>
          
          {/* Living Trust Plan */}
          <Card className="border-t-4 border-t-navy shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🏠</span>
                <CardTitle className="text-xl md:text-2xl">Living Trust Plan</CardTitle>
              </div>
              <CardDescription className="text-slate text-base">
                Avoid probate and maintain privacy. Ideal for families or individuals who own real estate or want asset protection.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-2xl font-serif font-bold text-navy">$3,500 (Single) / $4,500 (Couple)</p>
              <div>
                <p className="font-medium mb-2">Includes:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-navy mr-2">✓</span>
                    Revocable Living Trust
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">✓</span>
                    Pour-Over Will
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">✓</span>
                    Durable Power of Attorney
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">✓</span>
                    Medical Power of Attorney
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">✓</span>
                    Advance Directive
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">✓</span>
                    HIPAA Authorization
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">✓</span>
                    Property transfer documents (1 deed included)
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">✓</span>
                    Certificate of Trust
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">✓</span>
                    Step-by-step funding instructions
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">✓</span>
                    Virtual or in-person signing meeting (via Zoom)
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">✓</span>
                    Binder with estate plan OR secure digital copy
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start pt-2 space-y-2">
              <div className="flex items-start">
                <span className="text-navy mr-2">✅</span>
                <span><strong>Great for:</strong> homeowners, blended families, small business owners</span>
              </div>
              <Badge variant="secondary" className="bg-cream text-navy">
                📍 Fully compliant with TX, NM, AZ trust laws
              </Badge>
            </CardFooter>
          </Card>
          
          {/* Advanced Planning Plan */}
          <Card className="border-t-4 border-t-gold shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">💼</span>
                <CardTitle className="text-xl md:text-2xl">Advanced Planning Plan</CardTitle>
              </div>
              <CardDescription className="text-slate text-base">
                Custom planning for high-net-worth individuals, business owners, or clients with complex needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-2xl font-serif font-bold text-navy">$6,500+</p>
              <div>
                <p className="font-medium mb-2">Includes:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    Everything in the Living Trust Plan
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    Irrevocable Trusts (ILIT, Asset Protection, etc.)
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    Business succession planning
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    LLC formation or entity structuring (optional)
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    Estate tax minimization strategies
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    Legacy letters or trustee instructions
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    Up to 3 real estate deeds
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    Attorney strategy sessions
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start pt-2">
              <div className="flex items-start">
                <span className="text-gold mr-2">✅</span>
                <span><strong>Tailored for:</strong> real estate investors, physicians, executives, blended families, and multi-generational plans</span>
              </div>
            </CardFooter>
          </Card>
        </div>
        
        {/* Add-Ons Table */}
        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-navy mb-6 text-center">
            ➕ Optional Add-Ons
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto border-collapse">
              <thead>
                <tr className="bg-cream">
                  <th className="border border-gray-200 px-4 py-3 text-left">Add-On</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">Deed preparation (per extra property)</td>
                  <td className="border border-gray-200 px-4 py-3">$350</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3">Trust restatement or amendment</td>
                  <td className="border border-gray-200 px-4 py-3">$950</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">Estate Plan Review (non-clients)</td>
                  <td className="border border-gray-200 px-4 py-3">$250</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3">Annual Maintenance Plan (updates + funding help)</td>
                  <td className="border border-gray-200 px-4 py-3">$500/year</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">In-person signing session in El Paso area</td>
                  <td className="border border-gray-200 px-4 py-3">$150</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3">Mobile notary coordination (outside El Paso)</td>
                  <td className="border border-gray-200 px-4 py-3">$100–$200 (varies by location)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanOptionsSection;
