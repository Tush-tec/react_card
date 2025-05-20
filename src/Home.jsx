import Carousel from "./Carousel";

const carouselItems = [
  {
    image: "https://via.placeholder.com/800x400?text=Slide+1",
    title: "Advanced Coagulation Analyzer",
    description: "High precision diagnostics for labs.",
    cta1: "View Details",
    cta2: "Buy Now",
  },
  {
    image: "https://via.placeholder.com/800x400?text=Slide+2",
    title: "Portable Blood Testing Kit",
    description: "Compact. Reliable. Ready anywhere.",
    cta1: "Learn More",
    cta2: "Request Demo",
  },
  {
    image: "https://via.placeholder.com/800x400?text=Slide+3",
    title: "Automated Sample Processor",
    description: "Speed up your workflow efficiently.",
    cta1: "Explore",
    cta2: "Get Quote",
  },
];

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <Carousel items={carouselItems} slidesPerView={1} />
    </div>
  );
}
