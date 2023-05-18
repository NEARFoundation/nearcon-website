const ownerId = "nearcon";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  padding: 3.5em 3.5em 4.5em;
  gap: 3em;
  background: #fff;
`;

const Explainer = styled.div`
  width: 45%;
`;

const Form = styled.div`
  width: 55%;
`;

return (
  <Container>
    <Explainer>
      <Widget src={`${ownerId}/widget/Register.Explainer`} />
    </Explainer>
    <Form>
      <Widget src={`${ownerId}/widget/Register.Form`} />
    </Form>
  </Container>
);
