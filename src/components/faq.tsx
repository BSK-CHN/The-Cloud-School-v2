import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Who is the Cloud Engineering program for?",
    a: "Experienced IT professionals — VMware, Windows, Linux, and Network administrators, M365 admins, and IT support engineers — who want to move into Cloud, DevOps or AI roles.",
  },
  {
    q: "Where is The Cloud School located?",
    a: "6, Manickavasagar Street, Pallikaranai, Chennai. We also run weekend workshops and flexible weekday/weekend batches for working professionals.",
  },
  {
    q: "How much does the workshop cost?",
    a: "Weekend AI workshops are ₹199 for a 2-hour live session. The flagship program fee is shared during your free consultation call.",
  },
  {
    q: "Do you help with interviews and resumes?",
    a: "Yes. Every program includes resume preparation tuned for cloud roles, structured mock interviews, and one-on-one career guidance.",
  },
];

export function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl">
      {FAQS.map((item, i) => (
        <AccordionItem key={item.q} value={`item-${i}`}>
          <AccordionTrigger className="text-left font-display text-lg">{item.q}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
