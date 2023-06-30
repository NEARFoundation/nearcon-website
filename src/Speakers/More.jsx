const ownerId = "nearcon23.near";

const Container = styled.div`
  display: flex;
  padding: 3.125rem 3.125rem 5rem 3.125rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.75rem;
  align-self: stretch;
  border-radius: 0rem 0rem 0.875rem 0.875rem;
  background: var(--purple-lighter, #dcdcf9);

  & > h2 {
    color: var(--black, #000);
    font-size: 2rem;
    font-family: FK Grotesk;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  & > p {
    color: var(--black, #000);
    font-size: 1rem;
    font-family: Mona Sans;
    font-style: normal;
    font-weight: 600;
    line-height: 170%;
  }
`;

return (
  <Container>
    <h2>Have some expertise to offer the Ecosystem?</h2>
    <p>We’d love to get you involved.</p>
    <Widget src={`${ownerId}/widget/Speakers.SpeakerButton`} />
  </Container>
);
