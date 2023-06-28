const Anchor = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.625em 1.25em;
  min-width: 10.625em;
  gap: 0.5em;
  border: none;
  border-radius: 50px;
  background: #161615;
  color: #fff;
  font-style: normal;
  font-weight: 600;
  font-size: 0.95em;
  line-height: 1em;
  text-align: center;
  white-space: nowrap;

  &:disabled {
    background: #e5e5e5;
  }
`;

return <Anchor href={props.href ?? "#"}>{props.text}</Anchor>;
