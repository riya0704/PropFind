import Image from "next/image"

const BudgetFriendlyIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#3B82F6"/>
        <path d="M12 6C11.45 6 11 6.45 11 7V8C11 8.55 11.45 9 12 9C12.55 9 13 8.55 13 8V7C13 6.45 12.55 6 12 6Z" fill="#3B82F6"/>
        <path d="M12 10C11.45 10 11 10.45 11 11V13C11 13.55 11.45 14 12 14C12.55 14 13 13.55 13 13V11C13 10.45 12.55 10 12 10Z" fill="#3B82F6"/>
        <path d="M12 15C11.45 15 11 15.45 11 16V17C11 17.55 11.45 18 12 18C12.55 18 13 17.55 13 17V16C13 15.45 12.55 15 12 15Z" fill="#3B82F6"/>
        <path d="M8 11H10V13H8V11Z" fill="#3B82F6"/>
        <path d="M14 11H16V13H14V11Z" fill="#3B82F6"/>
    </svg>
)

const TrustedIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7V13C2 17.97 6.34 22.42 11.35 23.82C11.75 23.94 12.25 23.94 12.65 23.82C17.66 22.42 22 17.97 22 13V7L12 2ZM10.29 16.71L6.7 13.12L8.11 11.71L10.29 13.89L15.89 8.29L17.3 9.7L10.29 16.71Z" fill="#3B82F6"/>
    </svg>
)

const PrimeLocationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#3B82F6"/>
    </svg>
)

const services = [
    {
      icon: <BudgetFriendlyIcon />,
      title: 'Budget Friendly',
      description: 'Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.'
    },
    {
      icon: <TrustedIcon />,
      title: 'Trusted By Thousand',
      description: 'Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.'
    },
    {
      icon: <PrimeLocationIcon />,
      title: 'Prime Location',
      description: 'Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.'
    }
  ];

export function ValuableClients() {
    return (
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image src="https://picsum.photos/600/800?random=11" alt="Modern white house" className="absolute top-0 left-0 w-2/3 h-2/3 object-cover rounded-2xl" width={400} height={533} data-ai-hint="modern house" />
              <Image src="https://picsum.photos/600/800?random=12" alt="A-frame cabin" className="absolute bottom-0 right-0 w-2/3 h-2/3 object-cover rounded-2xl border-8 border-secondary" width={400} height={533} data-ai-hint="cabin woods" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">We Provide Latest Properties For Our Valuable Clients</h2>
              <div className="mt-8 space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center">{service.icon}</div>
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
