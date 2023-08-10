const ownerId = "nearcon23.near";

const {
  props: { contractId, secretKey },
} = props;

State.init({
  isValidTicket: true,
});

if (contractId && secretKey) {
  const response = fetch(
    `https://kb73xf6bzk.execute-api.us-east-1.amazonaws.com/production/api/v1/keypom/${secretKey}`
  );

  const keyInfo = Near.view(contractId, "get_key_information", {
    key: response.body.publicKey,
  });

  if (keyInfo) {
    State.update({ isValidTicket: true });
  }
}

return (
  <div>
    {state.isValidTicket ? (
      <>
        <Widget src={`${ownerId}/widget/Ticket.Header`} />
        <Widget src={`${ownerId}/widget/Ticket.Content`} props={props} />
      </>
    ) : (
      "Invalid ticket."
    )}
  </div>
);
