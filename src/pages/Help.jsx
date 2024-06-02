import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  text-align: center;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const ContactInfo = styled.div`
  margin-top: 20px;
`;

const Help = () => {
    const [showContactInfo, setShowContactInfo] = useState(false);

    const handleClick = () => {
        setShowContactInfo(true);
    };

    return (
        <Container>
            <h2>Need Help?</h2>
            <p>If you need assistance, you can contact us through the following:</p>
            <Button onClick={handleClick}>Contact Information</Button>
            {showContactInfo && (
                <ContactInfo>
                    <h4>Contact Information:</h4>
                    <p>You can contact us via email:</p>
                    <ul>
                        <li>aamir.llc@gmail.com</li>
                        <li>hammadanwaar04@gmail.com</li>
                    </ul>
                    <p>Or by phone:</p>
                    <p>03325550518, 03405480870</p>
                </ContactInfo>
            )}
        </Container>
    );
};

export default Help;
