const {
    props: { contractId, secretKey },
  } = props;
  
  const qrPayload = `https://keypom.xyz/nearcon/${contractId}:${secretKey}`;
  
  const SVG_CONTENT_TYPE = "image/svg+xml";
  
  const imageToBase64 = (data, type) => {
    const buff = Buffer.from(data);
    return `data:${type};base64,` + buff.toString("base64");
  };
  
  const qrCodeParams = {
    type: "svg",
    data: qrPayload,
    dotsOptions: { color: "#403E3E", type: "dots" },
    cornersSquareOptions: { type: "square" },
    qrOptions: { errorCorrectionLevel: "M" },
    backgroundOptions: { color: "#ffffff" },
  };
  
  const srcData = `<script type="text/javascript" src="https://unpkg.com/qr-code-styling@1.5.0/lib/qr-code-styling.js"></script>
  <script type="text/javascript">
  console.log(window.location)
  console.log(document.URL)
    const canvas = document.createElement('canvas');
    const qrCode = new QRCodeStyling(${JSON.stringify(qrCodeParams)});
    qrCode.append(canvas);
    const rawSvg = canvas.firstChild.outerHTML
    window.top.postMessage(rawSvg, "*")
  </script>`;
  
  const svgTemplate = `<?xml version="1.0" standalone="yes"?>
  <svg width="400" height="400" version="1.1" xmlns = 'http://www.w3.org/2000/svg'>
      <a href="${qrPayload}">
      <g transform="translate(-100,-30)">
      <svg x="40%" y="50" width="600" height="600">
      ${state.qrCodeData}
      </svg>
      </g>
    </a>
  
  </svg>`;
  
  const mainSvgImage = imageToBase64(svgTemplate, SVG_CONTENT_TYPE);
  
  return (
    <div>
      <img src={mainSvgImage} />
      <iframe
        srcDoc={srcData}
        onMessage={(data) => State.update({ qrCodeData: data })}
        style={{ width: 0, height: 0 }}
      />
    </div>
  );
  