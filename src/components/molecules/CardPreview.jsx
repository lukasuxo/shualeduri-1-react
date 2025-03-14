const CardPreview = ({ formData }) => {
    return (
      <div>
        <img src="./foni.png" alt="" />
        <img src="./card.png" alt="" className="cardfoto"/>
        <div className="cardfront">
          <p className="cardnumber">
            {formData.cardNumber || "0000 0000 0000 0000"}
          </p>
          <p className="cardname">{formData.name || "JANE APPLESEED"}</p>
          <p className="carddate">
            {formData.expiryMonth || "00"}/{formData.expiryYear || "00"}
          </p>
        </div>
  
        <div className="cardback">
          <div className="cardbackline"></div>
          <div className="cardbackcvc">
            <p>{formData.cvc || "000"}</p>
          </div>
          <div className="cardbackimg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="186"
              height="26"
              viewBox="0 0 186 26"
              fill="none"
            >
              <rect width="115" height="4" rx="2" fill="#ADB5BE" />
              <rect x="121" width="22" height="4" rx="2" fill="#ADB5BE" />
              <rect x="149" width="22" height="4" rx="2" fill="#ADB5BE" />
              <rect x="177" width="9" height="4" rx="2" fill="#ADB5BE" />
              <rect
                width="115"
                height="4"
                rx="2"
                transform="matrix(-1 0 0 1 186 22)"
                fill="#ADB5BE"
              />
              <rect
                width="22"
                height="4"
                rx="2"
                transform="matrix(-1 0 0 1 65 22)"
                fill="#ADB5BE"
              />
              <rect
                width="22"
                height="4"
                rx="2"
                transform="matrix(-1 0 0 1 37 22)"
                fill="#ADB5BE"
              />
              <rect
                width="9"
                height="4"
                rx="2"
                transform="matrix(-1 0 0 1 9 22)"
                fill="#ADB5BE"
              />
              <rect x="42" y="11" width="60" height="4" rx="2" fill="#ADB5BE" />
              <rect x="14" y="11" width="22" height="4" rx="2" fill="#ADB5BE" />
              <rect x="108" y="11" width="46" height="4" rx="2" fill="#ADB5BE" />
              <rect x="160" y="11" width="9" height="4" rx="2" fill="#ADB5BE" />
            </svg>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardPreview;