import { motion } from "framer-motion";
import "./TrustedBy.css";

import DellLogo from '/projects/my-app/src/assets/icons/Logo-dell.png';
import Logolattice from '/projects/my-app/src/assets/icons/Logo-lattice.png';
import LogoNcr from '/projects/my-app/src/assets/icons/Logo-ncr.png';
import logoPacific from '/projects/my-app/src/assets/icons/Logo-pacific.png';
import logoRakuten from '/projects/my-app/src/assets/icons/Logo-rakuten.png';
import logoTed from '/projects/my-app/src/assets/icons/Logo-ted.png';
import logoZendesk from '/projects/my-app/src/assets/icons/Logo-zendesk.png';

const logoAnimation = {
  hidden: { opacity: 0, y: -40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const logos = [
  { src: DellLogo, alt: "DellLogo" },
  { src: logoZendesk, alt: "Zendesk" },
  { src: logoRakuten, alt: "Rakuten" },
  { src: logoPacific, alt: "Pacific" },
  { src: LogoNcr, alt: "NCR" },
  { src: Logolattice, alt: "Lattice" },
  { src: logoTed, alt: "TED" },
];

function TrustedBy() {
  return (
    <div className="logos-section">
      <div className="heading-container">
        <p className="logos-heading">
          Trusted by teams at over 1,000 of the world’s leading organizations
        </p>
      </div>

      <div className="logos-container">
        <div className="logos">
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo.src}
              alt={logo.alt}
              custom={index}
              variants={logoAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustedBy;
