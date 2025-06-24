import "./FeatureCard.css";

function FeatureCard({
  icon,
  title,
  description,
  linkText,
  linkUrl,
  image,
  className,
  button,
}) {
  return (
    <div className={`features-cards ${className || ""}`}>
     
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
    </div>
  );
}

export default FeatureCard;
