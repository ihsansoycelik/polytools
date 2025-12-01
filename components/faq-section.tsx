import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
    return (
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Polymarket Ecosystem FAQ
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Common questions about the Polymarket ecosystem and tools.
                    </p>
                </div>
                <div className="mx-auto max-w-3xl mt-12">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What is the Polymarket Ecosystem?</AccordionTrigger>
                            <AccordionContent>
                                The Polymarket Ecosystem is a collection of tools, analytics platforms, bots, and resources built by the community to enhance the prediction market experience.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>How can I list my project?</AccordionTrigger>
                            <AccordionContent>
                                You can submit your project by clicking the "Submit Project" button in the navigation bar. All submissions are reviewed before being listed.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Is this official?</AccordionTrigger>
                            <AccordionContent>
                                This is a community-maintained directory. While we list official Polymarket resources, this website itself is an independent community initiative.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Are these tools safe to use?</AccordionTrigger>
                            <AccordionContent>
                                We review submissions for basic quality, but you should always do your own research (DYOR) before connecting your wallet or using third-party tools.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>How can I advertise here?</AccordionTrigger>
                            <AccordionContent>
                                Please visit the "Advertise" page linked in the navigation bar for more information on sponsorship opportunities.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
