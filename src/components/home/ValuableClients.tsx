import Image from "next/image"
import BudgetFriendlyIcon from "../icons/BudgetFriendlyIcon";
import TrustedByThousandIcon from "../icons/TrustedByThousandIcon";
import PrimeLocationIcon from "../icons/PrimeLocationIcon";

const services = [
    {
      icon: <BudgetFriendlyIcon />,
      title: 'Budget Friendly',
      description: 'Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.'
    },
    {
      icon: <TrustedByThousandIcon />,
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
