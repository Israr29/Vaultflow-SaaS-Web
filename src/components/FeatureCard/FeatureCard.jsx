import { motion } from "framer-motion";
import "./FeatureCard.css";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.4,
      duration: 0.8,
      type: "spring",
      stiffness: 100,
      
    },
  }),
};

function FeatureCard({
  icon,
  title,
  description,
  linkText,
  linkUrl,
  image,
  className,
  button,
  index, 
}) {
  return (
    <motion.div
      className={`features-cards ${className || ""}`}
      custom={index}
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ once: true }}
    >
      {icon && (
        <div className="icon">
          <img src={icon} alt={title} />
        </div>
      )}

      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>

      {linkText && linkUrl && (
        <a href={linkUrl} className="card-link">
          {linkText}
        </a>
      )}

      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}

      {button && (
        <button className="btn-outline">
          {button}
        </button>
      )}
    </motion.div>
  );
}

export default FeatureCard;
