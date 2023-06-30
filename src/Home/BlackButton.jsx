const Anchor = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.625em 1.25em;
  min-width: 10.625em;
  gap: 0.5em;
  border-radius: 50px;
  background: #161615;
  color: #fff;
  font-style: normal;
  font-weight: 600;
  font-size: 0.95em;
  line-height: 1em;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #161615;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    background: #fff;
    color: #161615;
    text-decoration: none;
  }

  &:disabled {
    background: #e5e5e5;
  }
`;

return <Anchor href={props.href ?? "#"}>{props.text}</Anchor>;
