const ownerId = "nearcon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  padding: 3.5em 3.5em 4.5em;
  gap: 1.5em;
  background: #fff;

  h2 {
    font-family: "FK Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 1.625em;
    line-height: 1.5em;
    color: #000000;
  }

  p {
    font-family: "FK Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 0.9em;
    line-height: 1.25em;
    color: #000000;
  }
`;

return (
  <Container>
    <h2>More info coming soon</h2>
    <p>
      We’re working on the full list of partners, speakers, and sessions. Stay
      tuned!
    </p>
    <Widget src={`${ownerId}/widget/Register.Button`} />
  </Container>
);
