const Anchor = styled.a`
  display: flex;
  width: 10.6875rem;
  height: 2.4375rem;
  padding: 0.625rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  border: 2px solid var(--purple, #9797ff);
  background: var(--purple, #9797ff);
  color: #fff;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    background: #fff;
    color: var(--purple-dark, #7269e1);
    border: 2px solid var(--purple-dark, #7269e1);
  }
`;

return (
  <Anchor href="https://airtable.com/shru9TnZ53F7qZT9C">Apply to Speak</Anchor>
);
