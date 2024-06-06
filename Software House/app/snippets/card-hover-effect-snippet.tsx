import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
      icon : <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
      title: "Website Design & development",
      description:
        "Excels in web design and development, crafting visually stunning and user-friendly websites tailored to your brand. Our Web development company in florida combines creativity with technical expertise to deliver custom-designed websites that captivate audiences and drive engagement.",
    
    },
    {
      icon : <div className="bg-blue-100 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-blue-600" /></div>,
      title: "Search Engine Optimization",
      description:
        "We specialize in Search Engine Optimization (SEO) strategies tailored to elevate your online visibility in perfect way. We are SEO agency in Florida employ cutting-edge techniques to enhance your website's ranking on search engine results Search Engine Results Page (SERP).",
     
    },
    {
      icon : <div className="bg-blue-100 p-4 rounded-full"><PiLock className="w-8 h-8 text-blue-600" /></div>,
      title: "Graphic Desiging",
      description:
        "Digital Destiny is your premier graphic design agency in Florida, offering creative solutions to elevate your brand's visual identity. Our talented designers specialize in captivating crafting graphics that resonate with your audience and leave a lasting impression."
    
    },
    {
      icon : <div className="bg-blue-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-blue-600" /></div>,
      title: "Social Media Marketing",
      description:
        "Through compelling content creation, strategic audience targeting, and performance tracking, we ensure maximum impact for your social media efforts. With Digital Destiny's SMM services, you can harness the power of social media to connect with your audience.",
    
    },
    {
      icon : <div className="bg-blue-100 p-4 rounded-full"><PiAppStoreLogo className="w-8 h-8 text-blue-600" /></div>,
      title: "Content Writing",
      description:
        "Whether it's website copy, blog articles, social media posts, or email newsletters, we deliver top-notch Content Writing Services in Florida that drives engagement and boosts conversions. Rely on Digital Destiny to craft compelling content for communications.",
    
    },
    {
      icon : <div className="bg-blue-100 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-blue-600" /></div>,
      title: "Support",
      description:
        "We offer support for all our clients. We are here to help you with any issues or questions you may have.",
   
    },
];
