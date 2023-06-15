const ownerId = "nearcon23.near";

const Link = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  width: 10.625em;
  gap: 0.5em;
  border: none;
  border-radius: 50px;
  background: #00ec97;
  color: #11181c;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  white-space: nowrap;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    background: #11181c;
    color: #fff;
  }
`;

return <Link href="https://nearcon-hackathon.devpost.com/">Apply to hack</Link>;
