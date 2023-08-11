const ownerId = "nearcon23.near";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  padding: 3.5em 3.5em 4.5em;
  gap: 3em;
  background: #fff;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Explainer = styled.div`
  width: 45%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Detail = styled.div`
  width: 55%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const {
  props: { contractId, secretKey },
} = props;

State.init({
  isValidTicket: false,
});

const checkTicketValidity = (secretKey) => {
  asyncFetch(
    `https://kb73xf6bzk.execute-api.us-east-1.amazonaws.com/production/api/v1/keypom/${secretKey}`
  ).then((response) => {
    if (response.ok) {
      const keyInfo = Near.view(contractId, "get_key_information", {
        key: response.body.publicKey,
      });

      if (keyInfo) {
        State.update({ isValidTicket: true });
      }
    }
  });
};

if (contractId && secretKey) {
  checkTicketValidity(secretKey);
}

return (
  <Container>
    {state.isValidTicket ? (
      <>
        <Explainer>
          <Widget src={`${ownerId}/widget/Ticket.QRCode`} props={props} />
        </Explainer>
        <Detail>
          <Widget src={`${ownerId}/widget/Ticket.Detail`} props={props} />
        </Detail>
      </>
    ) : (
      <h2>Invalid Ticket.</h2>
    )}
  </Container>
);
