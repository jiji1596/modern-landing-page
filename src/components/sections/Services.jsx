import services from "../../utils/services"
import { Container } from "../shared/Container"
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import { Service } from "../cards/Service";

export const Services = () => {
  return (
    <section id="services">
      {" "}
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title> Our Services </Title>
          <Paragraph className="mt-4">
            Get access to a curated network of skilled freelancers ready to tackle your most important projects.
          </Paragraph>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            { services.map((service, key) => {
              return ( <Service title={service.title} description={service.description} icon={service.icon} key={key}></Service>
              )
            }) }

          </div>
        </div>
      </Container>
    </section>
  )
}
