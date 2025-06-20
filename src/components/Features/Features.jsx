import FeatureCard from "../FeatureCard/FeatureCard";
import analysisIcon from "/projects/my-app/src/assets/icons/analysis-icon.png";
import digitalIcon from "/projects/my-app/src/assets/icons/digital-icon.png";
import codeIcon from "/projects/my-app/src/assets/icons/code-icon.png";
import CodeImage from "/projects/my-app/src/assets/code-image.png";

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
            icon={analysisIcon}
            title="Analytics Dashboard"
            description="Our Analytics Dashboard provides a clear and intuitive interface for you to easily track and analyze your data. From customizable graphs and charts to real-time data updates, our dashboard offers everything you need to gain valuable insights and make data-driven decisions."
            linkUrl="#"
            linkText="View Dashboard"
            className=" card-1"
          />
          <FeatureCard
            icon={digitalIcon}
            title="Digital Credit Tokens"
            description="Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business."
            linkUrl="#"
            linkText="View tokens"
            className=" card-2"
          />
          <FeatureCard
            icon={codeIcon}
            title="Code collaboration"
            description="Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it's coming from. Whether you're integrating data from multiple sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable."
            linkUrl="#"
            linkText="View code collaboration"
            image={CodeImage}
            className=" card-3"
          />
          <FeatureCard
            
            title="Code collaboration"
            description="Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it's coming from. Whether you're integrating data from multiple sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable."
            linkUrl="#"
            linkText="View code collaboration"
           
            className=" card-4"
          />

          
        </div>

        
      </div>
    </section>
  );
}

export default Features;
