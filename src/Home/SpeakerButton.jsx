const Anchor = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  gap: 0.5em;
  white-space: nowrap;
  border: 2px solid #7269e1;
  border-radius: 100px;
  background: #fff;
  font-family: "FK Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #7269e1;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    background: #7269e1;
    color: #fff;
  }
`;

return (
  <Anchor href="https://airtable.com/shru9TnZ53F7qZT9C">Apply to Speak</Anchor>
);
