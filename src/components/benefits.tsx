import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const programs = [
  {
    name: "Professional Certificate Program in Product Management",
    referrerBonus: "₹7,000",
    refereeBonus: "₹9,000",
  },
  {
    name: "PG Certificate Program in Strategic Product Management",
    referrerBonus: "₹9,000",
    refereeBonus: "₹11,000",
  },
  {
    name: "Executive Program in Data Driven Product Management",
    referrerBonus: "₹10,000",
    refereeBonus: "₹10,000",
  },
];

export function Benefits() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12">
          Referral Benefits
        </h2>
        <div className="rounded-lg border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50%]">Programs</TableHead>
                <TableHead>Referrer Bonus</TableHead>
                <TableHead>Referee Bonus</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {programs.map((program) => (
                <TableRow key={program.name}>
                  <TableCell className="font-medium">{program.name}</TableCell>
                  <TableCell>{program.referrerBonus}</TableCell>
                  <TableCell>{program.refereeBonus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-8 text-center">
          <Button size="lg" variant="outline">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
}
