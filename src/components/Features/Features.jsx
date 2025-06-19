import FeatureCard from "../FeatureCard/FeatureCard";
import "./Features.css";

function Features() {
  return (
    <section className="features-container">
      <div className="features-content">
        <h1 className="features-title">
          Features that
          <br />
          work for your
          <br />
          future.
        </h1>
        <p className="features-subtitle">
          Check out our amazing features and experience the power of Vaultflow
          for yourself.
        </p>

        <div className="features-grid">
          <FeatureCard
            icon="📊"
            title="Analytics Dashboard"
            description="Track and analyze your data easily with real-time charts."
            linkText="View dashboard"
            linkUrl="#"
          />

          <FeatureCard
            icon="💳"
            title="Digital Credit Tokens"
            description="Incentivize your users with secure and flexible tokens."
            linkText="View tokens"
            linkUrl="#"
          />

          <FeatureCard
            icon="🤝"
            title="Code Collaboration"
            description="Sync data across teams easily and reliably."
            linkText="View code collaboration"
            linkUrl="#"
            
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
