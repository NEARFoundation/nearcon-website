const {
    props: { secretKey },
  } = props;
  
  const MINTBASE_URL = secretKey
    ? `https://omni-site-git-nearcon-page-mintbase.vercel.app/nearcon/${secretKey}`
    : "#";
  
  const Container = styled.div`
      @media (max-width: 768px) {
       display:block;
      }
       @media (min-width: 768px) {
      display:flex;
      }
      width: 100%;
  `;
  
  const TicketContent = styled.div`
      width:70%;
      padding:20px;
      @media (max-width: 768px) {
      width:100%;
      }
  `;
  
  const TicketHeading = styled.p`
      font-family: "FK Grotesk";
      font-size: 24px;
      font-weight: bold;
      line-height: 31px;
      letter-spacing: 0em;
      text-align: left;
  `;
  
  const TicketSubtitle = styled.p`
      font-family: "Mona Sans";
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 15px;
  `;
  
  const SellButton = styled.a`
      width: 185px;
      height: 50px;
      color:white;
      border-width:0px;
      padding: 10px 20px 10px 20px;
      border-radius: 100px;
      background-color:rgba(244, 71, 56, 1);
      margin-top:35px;
      margin-bottom:15px;
      &:hover {
        text-decoration: none;
      }
      &:active {
        text-decoration: none;
      }
  `;
  
  const Dividerline = styled.div`
      background-color:rgba(242, 241, 234, 1);
      width:100%;
      height:1px;
      margin-bottom:15px;
  `;
  
  const GrayBackground = styled.div`
      background-color:rgba(249, 249, 248, 1);
      padding:10px;
      margin-top:10px;
  `;
  
  return (
    <Container>
      <TicketContent>
        <TicketHeading>
          This page is not only your ticket, but your portal into the NEARCON
          Experience.
        </TicketHeading>
        <TicketSubtitle>
          Don’t just screenshot the QR code. Have your mobile device ready with
          this screen open as you enter the event. We’re unleashing the power of
          the BOS at NEARCON. Don’t miss out.
        </TicketSubtitle>
        <Dividerline />
        <TicketSubtitle>
          Can’t make it to NEARCON this year? You can sell your ticket on the
          secondary marketplace powered by Mintbase.
        </TicketSubtitle>
        <SellButton style={{ marginTop: 25 }} href={MINTBASE_URL} target="_blank">
          Sell on MintBase
        </SellButton>
        <div style={{ marginTop: 25 }}>
          <img
            src="https://nearcon.s3.amazonaws.com/ticketing-solutions-by.png"
            style={{ width: "100%" }}
          />
        </div>
      </TicketContent>
    </Container>
  );
  