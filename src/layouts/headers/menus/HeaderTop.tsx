import Link from "next/link";

const HeaderTop = () => {
  return (
    <div className="top-header">
      <div className="container">
        <div className="top-header-wrapper">
          <ul>
            <li>
              <i className="fas fa-paper-plane me-2"></i>
              <Link href="mailto:info@example.com" className="link">
                info@shrinavkar.co.in
              </Link>
            </li>
            <li>
              <i className="fas fa-map-marker-alt me-2"></i>
              U-I - Plot No: 3540-3541, Opp: HBS Pharma Sez, GIDC Panoli -
              394116, India
            </li>
            <li>
              <i className="fas fa-map-marker-alt me-2"></i>
              U-II Plot No: 120-121-11 & 12, GIDC Ankleshwar - 393002, Gujarat,
              India
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
