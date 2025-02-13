import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Do I need to have prior experience to enroll in the program?
              </AccordionTrigger>
              <AccordionContent>
                No, the program is designed to be inclusive of all levels of
                experience. All topics will be covered from the basics, making
                it suitable for individuals from any field of work.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How long does it take to receive the referral bonus?
              </AccordionTrigger>
              <AccordionContent>
                The referral bonus is credited to your account within 30 days
                after your referred friend completes their program enrollment
                and makes the full payment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I refer multiple friends?</AccordionTrigger>
              <AccordionContent>
                Yes, you can refer as many friends as you want. There is no
                limit to the number of referrals you can make, and you'll earn a
                bonus for each successful referral.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
