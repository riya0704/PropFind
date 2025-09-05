import Image from "next/image"

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
)

const services = [
    {
      icon: <CheckIcon />,
      title: 'Budget Friendly',
      description: 'We provide properties that are budget-friendly and cater to your financial needs without compromising on quality.'
    },
    {
      icon: <CheckIcon />,
      title: 'Trusted By Thousand',
      description: 'Our services are trusted by thousands of clients who have successfully found their dream homes with us.'
    },
    {
      icon: <CheckIcon />,
      title: 'Prime Location',
      description: 'Our properties are located in prime locations, offering convenience and access to essential amenities.'
    }
  ];

export function ValuableClients() {
    return (
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image src="https://picsum.photos/600/800?random=11" alt="Modern white house" className="absolute top-0 left-0 w-2/3 h-2/3 object-cover rounded-2xl" width={400} height={533} data-ai-hint="modern house" />
              <Image src="https://picsum.photos/600/800?random=12" alt="A-frame cabin" className="absolute bottom-0 right-0 w-2/3 h-2/3 object-cover rounded-2xl border-8 border-background" width={400} height={533} data-ai-hint="cabin woods" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">We Provide Latest Properties For Our Valuable Clients</h2>
              <p className="mt-4 text-lg text-muted-foreground">We are committed to offering the best properties that meet the highest standards of quality and comfort.</p>
              <div className="mt-8 space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="text-muted-foreground mt-1">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
