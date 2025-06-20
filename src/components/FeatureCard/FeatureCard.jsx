import "./FeatureCard.css";

function FeatureCard({ icon, title, description, linkText, linkUrl, image, className }) {
  return (
    <div className={`features-cards ${className || ""}`}>
      <div className="icon">
        <img src={icon} alt={title} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <a href={linkUrl} className="card-link">{linkText}</a>

      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}
    </div>
  );
}


export default FeatureCard;
