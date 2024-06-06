import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



const FAQS = () => {
    return ( 
        <div className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        ">
          <div className=" p-10 md:p-4 md:px-20">
            <div className="text-3xl md:text-3xl font-bold text-black">
              Have questions ?
            </div>
            <div className="  font-semibold text-3xl md:text-3xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
              Get answers.
            </div>
            <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger className="md:text-3xl">What is Hitus?</AccordionTrigger>
      <AccordionContent>
        Hitus is a full fledge marketing agency that specializes in branding, web design, and digital marketing.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger className="md:text-3xl">How to start ?</AccordionTrigger>
      <AccordionContent>
        You can start by contacting us. We will get back to you within 24 hours.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger className="md:text-3xl">
    Pricing ?
      </AccordionTrigger>
      <AccordionContent>
        We offer custom tailored solutions for your business. Contact us to get a quote.
      </AccordionContent>
    </AccordionItem>
  
    <AccordionItem value="item-4">
      <AccordionTrigger className="md:text-3xl">
    Support ?
        </AccordionTrigger>
      <AccordionContent>
        We offer Monday-Friday support for all our clients.
      </AccordionContent>
    </AccordionItem>


    <AccordionItem value="item-4">
      <AccordionTrigger className="md:text-3xl">
      Feel free to contact us.
        </AccordionTrigger>
      <AccordionContent>
      <div className=" font-normal pb-4 ">
                Contact number 📲: <a href="https://bit.ly/4bF9RnG">+923059424343</a>
              </div>
              <div className=" font-normal pb-4 ">
                Our Company Email is 📧: <a href="http://Hitusservicesprovider@gmail.com">Hitusservicesprovider@gmail.com</a>
              </div>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
      <AccordionTrigger className="md:text-3xl">
        Please Visit our Facebook page
        </AccordionTrigger>
      <AccordionContent>
      <div className=" font-normal pb-4 ">
                Our Company facebook page is: <a href="https://www.facebook.com/profile.php?id=100092558241955&mibextid=LQQJ4d">https://www.facebook.com/profile.php?id=100092558241955&mibextid=LQQJ4d</a>
              </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>

  
  
  
          </div>
        </div> );
}
 
export default FAQS;