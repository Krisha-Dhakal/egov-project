import React from 'react';
import './index.css'; // Import CSS file for custom styling
import corrupImage from '../../assets/corruption.png';

function Index() {
  return (
    <div className="container1">
      <div className='container p-4'>
        <div className='welcome-section'>
          <h1 className='text-center main-heading'>Welcome to <span className="highlight-text">BRIBEBANE</span>!</h1>
          <p className="sub-heading">
            At ACP, we are dedicated to shedding light on corruption in Nepal and empowering individuals and organizations to take a stand against this pervasive issue. <b>Our platform implements the Critical Flow Model, collecting and curating data from esteemed sources such as the Commission for Investigation of Abuse of Authority (CIAA) Nepal and Transparency International (Transparency.org).</b>
          </p>
          <p>
            Our mission is to provide a comprehensive and accessible resource hub for those studying or seeking to discover more about corruption in Nepal. Through our platform, <b>we aim to bridge the gap between valuable data and our targeted audience, including students, researchers, and anyone passionate about promoting transparency and accountability.</b>
          </p>
          <p>
            By leveraging cutting-edge technology and innovative design, we offer an intuitive user experience that enables users to explore a wealth of information on corruption in Nepal. Our platform features advanced search functionality, engaging data visualizations, and interactive tools that empower users to delve deep into the data and gain valuable insights.
          </p>
          <p>
            We prioritize data accuracy and reliability, ensuring that the information we provide is thoroughly vetted and sourced from reputable channels. Additionally, we encourage user participation and feedback, fostering a vibrant community where ideas are shared, discussions are held, and collective action is inspired.
          </p>
          <p>
            Join us in our journey to combat corruption and drive positive change in Nepal. Together, we can make a difference and pave the way for a more transparent and accountable society.
          </p>
          <h3 className="text-center">Explore, discover, and take action with BRIBEBANE!</h3>
          {/* Attach a photo here */}
          <div className="image-container">
            <img src={corrupImage} alt="Corruption" className="corrup-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
