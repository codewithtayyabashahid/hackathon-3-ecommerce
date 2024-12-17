import Image from "next/image";

const offers = [
  {
    id: 1,
    title: "24/7 Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    image: "/free-delivery 1.png", 
    alt: "Free Delivery",
  },
  {
    id: 2,
    title: "24/7 Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    image: "/cashback 1.png", 
    alt: "Cashback",
  },
  {
    id: 3,
    title: "24/7 Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    image: "/premium-quality 1.png", 
    alt: "Premium Quality",
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    image: "/24-hours-support 1.png", 
    alt: "24 Hours Support",
  },
];

const OffersSection: React.FC = () => {
  return (
    <section className="pt-36 w-[1920px]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-4xl font-bold text-center mb-8 text-violet-950">
          What Shopex Offer!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg text-center"
            >
              <div className="mb-4">
                <Image
                  src={offer.image}
                  alt={offer.alt}
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {offer.title}
              </h3>
              <p className="text-gray-500 text-sm">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;