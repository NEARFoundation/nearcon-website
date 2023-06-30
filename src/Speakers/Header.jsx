const ownerId = "nearcon23.near";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 4.5em;
  gap: 0.625em;
  background: #000;

  h1 {
    font-family: "FK Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 2.5em;
    line-height: 1.25em;
    color: #fff;
  }

  p {
    color: var(--green, #00ec97);
    font-size: 1.3125rem;
    font-family: Mona Sans;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    max-width: 30rem;
  }
`;

return (
  <Container>
    <h1>2022 Speakers</h1>
    <p>
      Here’s a look at our speakers from last year.
      <br />
      Want to speak this year?
    </p>
    <Widget src={`${ownerId}/widget/Speakers.SpeakerButton`} />
  </Container>
);
