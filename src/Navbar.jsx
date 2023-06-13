const ownerId = "nearcon23.near";

const Navbar = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.75em 0;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  position: sticky;
  top: 0;
  transform: translateY(-1em);
`;

const LogoArea = styled.a`
  display: block;
  width: 14em;
  padding: 0px;
  gap: 0.7em;
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  line-height: 1em;
  color: #11181c;

  &:hover {
    text-decoration: none;
    color: #11181c;
  }
`;

const ActionArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px;
  gap: 1em;
`;

const logo = (
  <LogoArea
    href={`/${ownerId}/widget/Index`}
    onClick={() => props.update({ tab: "home" })}
  >
    <svg
      width="170"
      height="26"
      viewBox="0 0 170 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M108.037 0.77356C115.032 0.77356 118.089 5.10541 118.334 8.55384V9.04399H115.539C115.343 6.64074 113.397 3.35601 108.085 3.35601C102.773 3.35601 99.5201 6.83738 99.5201 13C99.5201 19.1626 102.723 22.644 108.085 22.644C113.447 22.644 115.342 19.3099 115.604 16.7923H118.399V17.2824C118.088 20.7803 115.065 25.2264 108.036 25.2264C101.006 25.2264 96.4795 20.8462 96.4795 13C96.4795 5.15384 100.975 0.77356 108.036 0.77356H108.037Z"
        fill="black"
      />
      <path
        d="M133.749 0.77356C140.728 0.77356 145.485 5.18678 145.485 13C145.485 20.8132 140.728 25.2264 133.749 25.2264C126.77 25.2264 122.012 20.8132 122.012 13C122.012 5.18678 126.77 0.77356 133.749 0.77356ZM133.749 22.644C138.996 22.644 142.428 19.1462 142.428 13C142.428 6.85384 138.995 3.35601 133.749 3.35601C128.502 3.35601 125.07 6.85384 125.07 13C125.07 19.1462 128.502 22.644 133.749 22.644Z"
        fill="black"
      />
      <path
        d="M153.985 1.23077L166.032 20.4044H166.294V1.23077H169.187V24.7692H165.575L153.544 5.59556H153.283V24.7692H150.389V1.23077H153.985Z"
        fill="black"
      />
      <path
        d="M13.2145 0.816193C10.6369 0.816193 8.76251 1.42548 7.17003 2.83101L4.358 5.26719C4.12359 5.45511 3.65476 5.59557 3.32735 5.31369C2.99897 5.03277 2.95248 4.6579 3.23339 4.28303L4.73288 2.0338C4.96729 1.70542 4.78034 1.28406 4.358 1.28406H0.749743C0.328375 1.28406 0 1.61243 0 2.0338V23.9643C0 24.3857 0.328375 24.714 0.749743 24.714H4.49846C4.91983 24.714 5.2482 24.3857 5.2482 23.9643V11.5935C5.2482 5.92394 9.98108 5.03374 11.7615 5.03374C15.5567 5.03374 16.9157 7.75181 16.9157 9.81312V23.9643C16.9157 24.3857 17.2441 24.714 17.6655 24.714H21.4142C21.8356 24.714 22.1639 24.3857 22.1639 23.9643V9.34428C22.1639 4.09608 18.7426 0.816193 13.2135 0.816193H13.2145Z"
        fill="black"
      />
      <path
        d="M37.4388 0.722229C30.1758 0.722229 25.5369 5.17419 25.5369 11.2186V14.546C25.5369 20.9188 30.1758 25.2768 37.4388 25.2768C43.8581 25.2768 48.3566 21.9495 48.8254 17.451C48.8729 16.9822 48.5445 16.6548 48.0757 16.6548H44.4209C44.0925 16.6548 43.8116 16.8427 43.7177 17.1701C43.2488 18.6696 41.0471 20.9188 37.4388 20.9188C33.8305 20.9188 30.4567 18.2947 30.5032 14.546L30.5507 10.3759C30.5972 7.23647 33.878 5.0812 37.4388 5.0812C40.6722 5.0812 43.8116 6.90907 44.139 9.90804C44.1662 10.2548 43.9279 10.5677 43.5859 10.6336L33.0798 12.6726C32.6585 12.7666 32.3301 13.1414 32.3301 13.6093V13.6558C32.3301 14.0772 32.7515 14.452 33.3607 14.452H48.4496C48.8642 14.452 49.1993 14.1159 49.1993 13.7023V10.7508C49.1993 5.17516 44.3725 0.723198 37.4378 0.723198L37.4388 0.722229Z"
        fill="black"
      />
      <path
        d="M63.585 0.722221C57.7275 0.722221 52.6672 4.14256 52.6672 8.64102C52.6672 9.0159 52.9956 9.29681 53.4169 9.29681H57.2121C57.587 9.29681 57.8679 9.0159 57.9154 8.64102C58.2903 6.57971 60.7739 5.08023 63.4445 5.08023C66.6304 5.08023 68.7867 7.04855 68.7867 10.4224V14.4995C68.7867 18.6696 65.6937 20.7783 61.8511 20.7783C58.8521 20.7783 57.1182 19.6537 57.1182 17.8259C57.1182 16.2324 57.9619 14.8734 61.4287 14.0771L66.4425 12.7181C66.9578 12.5777 67.1457 12.1553 67.0518 11.6875C67.0053 11.3126 66.5839 11.1247 66.2081 11.1247H61.0073C56.6028 11.1247 52.1509 13.9357 52.1509 18.0593V18.7151C52.1509 22.9326 56.134 25.1344 60.679 25.1344C63.584 25.1344 66.0676 24.0098 67.6136 22.6982L69.9103 20.7299C70.2852 20.4015 70.66 20.4015 70.9875 20.7299C71.2684 21.0108 71.1744 21.4332 70.94 21.7606L69.5345 23.9633C69.3 24.2917 69.487 24.713 69.9093 24.713H73.2832C73.7046 24.713 74.0329 24.3847 74.0329 23.9633V9.76467C74.0329 4.32951 70.1438 0.721252 63.583 0.721252L63.585 0.722221Z"
        fill="black"
      />
      <path
        d="M94.276 1.285H89.0278C87.2009 1.285 85.4195 2.40962 84.1545 3.48774L82.0931 5.26814C81.8587 5.45606 81.4364 5.59651 81.1555 5.3621C80.8271 5.12768 80.6867 4.65885 80.9685 4.28398L82.468 2.03475C82.7024 1.70637 82.5155 1.285 82.0931 1.285H78.5788C78.1575 1.285 77.8291 1.61338 77.8291 2.03475V23.9652C77.8291 24.3866 78.1575 24.715 78.5788 24.715H82.4215C82.8429 24.715 83.1713 24.3866 83.1713 23.9652V12.7191C83.1713 7.89224 85.1396 5.73697 89.4036 5.73697H94.277C94.6983 5.73697 95.0267 5.40859 95.0267 4.98723V2.03475C95.0267 1.61338 94.6983 1.285 94.277 1.285H94.276Z"
        fill="black"
      />
    </svg>
  </LogoArea>
);

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 0.5em;
  flex: none;
  order: 0;
  align-self: stretch;
  font-family: "Mona Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  line-height: 1em;
  text-align: right;
  color: #666666;
`;

const info = <Info>November 7-10, 2023 + Lisbon, Portugal</Info>;

const actions = (
  <ActionArea>
    {info}
    <Widget src={`${ownerId}/widget/Register.Button`} />
  </ActionArea>
);

return (
  <Navbar>
    {logo}
    {actions}
  </Navbar>
);
