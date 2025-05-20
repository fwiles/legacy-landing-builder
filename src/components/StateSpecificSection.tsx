
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const StateSpecificSection = () => {
  return (
    <section id="states" className="section-anchor py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy text-center mb-4">
          What's Different in TX, NM, and AZ?
        </h2>
        <p className="text-slate text-center mb-12 max-w-2xl mx-auto">
          Estate planning laws vary by state. Here's how our multi-state practice addresses key differences.
        </p>
        
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader className="bg-cream">
              <TableRow>
                <TableHead className="font-bold w-1/4">Feature</TableHead>
                <TableHead className="font-bold w-1/4">Texas</TableHead>
                <TableHead className="font-bold w-1/4">New Mexico</TableHead>
                <TableHead className="font-bold w-1/4">Arizona</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="border font-medium">Community Property State</TableCell>
                <TableCell className="border">✅ Yes</TableCell>
                <TableCell className="border">✅ Yes</TableCell>
                <TableCell className="border">✅ Yes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border font-medium">Remote Online Notarization (RON)</TableCell>
                <TableCell className="border">✅ Allowed</TableCell>
                <TableCell className="border">❌ Not fully supported</TableCell>
                <TableCell className="border">✅ Allowed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border font-medium">Transfer-on-Death Deeds (for Real Estate)</TableCell>
                <TableCell className="border">✅ Available</TableCell>
                <TableCell className="border">✅ Available</TableCell>
                <TableCell className="border">✅ Available</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border font-medium">Simplified Probate?</TableCell>
                <TableCell className="border">⚠️ Somewhat</TableCell>
                <TableCell className="border">❌ Often slow</TableCell>
                <TableCell className="border">❌ Expensive and complex</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border font-medium">Special Notes</TableCell>
                <TableCell className="border">Widely uses trusts to avoid probate</TableCell>
                <TableCell className="border">Many rural clients underserved</TableCell>
                <TableCell className="border">Popular for snowbirds & retirees</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default StateSpecificSection;
