const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.25em 1.25em 1.5em;
  gap: 0.625em;
  background: #ffffff;
  border-radius: 16px;

  h3 {
    color: var(--black, #000);
    font-size: 1.3rem;
    font-family: FK Grotesk;
    font-style: normal;
    font-weight: 700;
    line-height: 2.5rem;
  }

  p {
    color: var(--green, #00ec97);
    font-size: 0.875rem;
    font-family: Mona Sans;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }

  img {
    width: 100%;
    border-radius: 10px;
  }

  &:hover,
  &:visited,
  &:active {
    text-decoration: none;
  }
`;

return (
  <Container>
    <img src={props.image} alt={props.name} />
    <h3>{props.name}</h3>
    <p>{props.org}</p>
  </Container>
);
