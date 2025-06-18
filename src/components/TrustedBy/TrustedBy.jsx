import "./TrustedBy.css";
import DellLogo  from '/projects/my-app/src/assets/icons/Logo-dell.png'
import Logolattice  from '/projects/my-app/src/assets/icons/Logo-lattice.png'
import LogoNcr  from '/projects/my-app/src/assets/icons/Logo-ncr.png'
import logoPacific  from '/projects/my-app/src/assets/icons/Logo-pacific.png'
import logoRakuten  from '/projects/my-app/src/assets/icons/Logo-rakuten.png'
import logoTed from '/projects/my-app/src/assets/icons/Logo-ted.png'
import logoZendesk  from '/projects/my-app/src/assets/icons/Logo-zendesk.png'

function TrustedBy() {
  return (
    <>
      <div className="logos-section">
        <div className="heading-container">
          <p className="logos-heading">
            Trusted by teams at over 1,000 of the world’s leading organizations
          </p>
        </div>
        <div className="logos-container">
          <div className="logos">
            <img src={DellLogo} alt="DellLogo" />
            <img src={logoZendesk} alt="logoZendesk" />
            <img src={logoRakuten} alt="logoRakuten" />
            <img src={logoPacific} alt="logoPacific" />
            <img src={LogoNcr} alt="LogoNcr" />
            <img src={Logolattice} alt="Logolattice" />
            <img src={logoTed} alt="logoTed" />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default TrustedBy;
