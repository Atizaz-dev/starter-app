import React from 'react';
import styles from './HeroSection.module.css'; // Assuming CSS Module is used for styling

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      {/* Hero Section Content */}
      <div className={styles.heroContent}>
        {/* Heading */}
        <h1 className={styles.heroHeading}>Welcome to Our Website</h1>
        {/* CTA Button */}
        <button className={styles.ctaButton}>Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;

// Assuming the following CSS in HeroSection.module.css
/*
.heroSection {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background-color: #f0f0f0; /* Example background color */
}

.heroContent {
  text-align: center;
}

.heroHeading {
  font-size: 48px; /* Minimum font size as per requirements */
  margin-bottom: 20px; /* Spacing between heading and CTA button */
}

.ctaButton {
  font-size: 20px; /* Large enough to be easily readable */
  padding: 10px 20px; /* Sufficient padding for tap targets */
  background-color: #007bff; /* Example primary color for visibility */
  color: white; /* Contrast color for readability */
  border: none;
  border-radius: 5px; /* Slight rounding of corners for a modern look */
  cursor: pointer; /* Indicates the button is clickable */
  transition: background-color 0.3s; /* Smooth transition for hover effect */
}

.ctaButton:hover {
  background-color: #0056b3; /* Darker shade on hover for feedback */
}
*/