import "./FeatureCard.css";

function FeatureCard({ title, description, linkText, linkUrl, icon, extraContent }) {
  return (
    <div className="feature-card">
      <div className="card-left">
        <div className="icon">{icon}</div>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href={linkUrl} className="card-link" target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      </div>
      {extraContent && <div className="card-right">{extraContent}</div>}
    </div>
  );
}

export default FeatureCard;
