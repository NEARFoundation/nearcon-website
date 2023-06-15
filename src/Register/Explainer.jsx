const ownerId = "nearcon23.near";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3em;

  .red {
    color: #ff7966;
  }

  h2 {
    font-family: "FK Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 2em;
    line-height: 1.5em;
    color: #000000;
  }

  ol {
    font-family: "Mona Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 1em;
    line-height: 170%;
    color: #000000;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5em;
    list-style-position: outside;
    padding-left: 1.25em;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2em;
    gap: 1em;
    background: #f3f3f2;
    border-radius: 8px;

    & > span {
      font-family: "Mona Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 1em;
      line-height: 150%;
      color: #a1a09a;
    }

    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 2em;
      width: 100%;
    }
  }
`;

const mapImage = (src) => `https://ipfs.near.social/ipfs/${src}`;

return (
  <Container>
    <h2>How it works</h2>
    <ol>
      <li>
        Complete the form <span className="red">(All fields required)</span>
      </li>
      <li>
        You will be redirected to complete payment (via crypto or fiat currency)
      </li>
      <li>You will receive your NFT ticket via your wallet</li>
    </ol>
    <div>
      <span>Ticketing fulfillment by</span>
      <div>
        <a
          href="https://veriken.com/"
          target="_blank"
          referrerPolicy="unsafe-url"
        >
          <svg
            width="137"
            height="20"
            viewBox="0 0 137 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_471_2736)">
              <path
                d="M5.80932 18.175L0 4.85547H2.98591L7.96242 16.8781H7.02805L11.9843 4.85547H14.9295L9.18116 18.175H5.80932Z"
                fill="#0028FA"
              />
              <path
                d="M24.712 12.6166V15.8899H34.8478V18.175H22.0104V4.85547H34.8275V7.14058H24.712V10.455H32.9994V12.6166H24.712Z"
                fill="#0028FA"
              />
              <path
                d="M42.7242 18.175V4.85547H51.6413C52.6569 4.85547 53.5371 4.99957 54.2819 5.28779C55.0402 5.56228 55.6293 6.00146 56.0491 6.60533C56.4689 7.19548 56.6788 7.95719 56.6788 8.89045C56.6788 9.52177 56.5704 10.057 56.3538 10.4962C56.1371 10.9354 55.8324 11.2922 55.4397 11.5667C55.0605 11.8412 54.6204 12.0539 54.1194 12.2049C53.6184 12.3421 53.0835 12.4313 52.5147 12.4725L52.2304 12.3078C53.1783 12.3216 53.9569 12.4039 54.5663 12.5549C55.1756 12.6921 55.6293 12.9529 55.9272 13.3372C56.2387 13.7077 56.3944 14.2636 56.3944 15.0047V18.175H53.6928V15.19C53.6928 14.6822 53.6048 14.291 53.4288 14.0165C53.2527 13.7283 52.9345 13.5293 52.4741 13.4195C52.0272 13.3097 51.3772 13.2548 50.5241 13.2548H45.4257V18.175H42.7242ZM45.4257 11.1138H51.6413C52.3996 11.1138 52.9751 10.9285 53.3679 10.558C53.7741 10.1874 53.9772 9.68646 53.9772 9.05514C53.9772 8.45127 53.7741 7.9915 53.3679 7.67584C52.9751 7.36017 52.3996 7.20234 51.6413 7.20234H45.4257V11.1138Z"
                fill="#0028FA"
              />
              <path
                d="M64.9943 4.85547H67.6958V18.175H64.9943V4.85547Z"
                fill="#0028FA"
              />
              <path
                d="M81.9231 11.6902L81.9028 10.5374L90.759 18.175H86.859L78.9778 11.1756L85.9856 4.85547H89.8246L81.9231 11.6902ZM76.2966 4.85547H78.9982V18.175H76.2966V4.85547Z"
                fill="#0028FA"
              />
              <path
                d="M100.644 12.6166V15.8899H110.78V18.175H97.9427V4.85547H110.76V7.14058H100.644V10.455H108.932V12.6166H100.644Z"
                fill="#0028FA"
              />
              <path
                d="M131.981 15.4576L131.128 15.8076V7.4288H133.83V18.175H131.128L120.505 7.65525L121.358 7.30528V18.175H118.656V4.85547H121.358L131.981 15.4576Z"
                fill="#0028FA"
              />
              <path d="M137 2H134.146V4.85419H137V2Z" fill="#5CD94A" />
            </g>
            <defs>
              <clipPath id="clip0_471_2736">
                <rect width="137" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </div>
  </Container>
);
