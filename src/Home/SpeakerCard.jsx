const Container = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.25em 1.25em 1.5em;
  gap: 0.625em;
  background: #ffffff;
  border-radius: 16px;

  h3 {
    font-family: "FK Grotesk";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    color: #000000;
  }

  p {
    font-family: "Mona Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 0.95em;
    line-height: 150%;
    color: #04a46e;
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
  <Container href={props.href ?? "#"}>
    <img src={props.image} alt={props.name} />
    <h3>{props.name}</h3>
    <p>{props.org}</p>
  </Container>
);
