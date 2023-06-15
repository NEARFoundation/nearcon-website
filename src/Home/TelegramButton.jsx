const Link = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  width: 10.625em;
  gap: 0.5em;
  text-align: center;
  white-space: nowrap;
  background: #ffffff;
  border: 2px solid #0daebb;
  font-family: "FK Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #0daebb;
  border-radius: 100px;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    background: #0daebb;
    color: #fff;
  }

  &:disabled {
    background: #e5e5e5;
  }
`;

return <Link href={props.href ?? "#"}>{props.text}</Link>;
