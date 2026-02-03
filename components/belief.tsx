import Container from "./ui/container";
import Reveal from "./reveal";

export default function Belief() {
  return (
    <section style={{ padding: "96px 0" }}>
      <Container>
        <Reveal>
          <h2 style={{ fontSize: 36, maxWidth: 600 }}>
            Credit should be the result of trust not the prerequisite.
          </h2>
        </Reveal>
      </Container>
    </section>
  );
}
