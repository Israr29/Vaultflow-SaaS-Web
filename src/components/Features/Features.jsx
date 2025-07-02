import { motion } from "framer-motion";

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
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="features-title"
        >
          Features that
          <br />
          work for your
          <br />
          future.
        </motion.h1>
        <motion.p
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="features-subtitle"
        >
          Check out our amazing features and experience the power of Vaultflow
          for yourself.
        </motion.p>

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
            title=" Our powerful analytics provides invaluable insights."
            description="Unlock the power of data with our cutting-edge analytics product. Get instant insights with our user-friendly Analytics Dashboard, and take advantage of our innovative digital credit tokens to reward your customers and incentivize engagement. "
            button="Download the app"
            className=" card-4"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
