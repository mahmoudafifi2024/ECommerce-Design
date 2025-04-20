import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

interface FooterLink {
  id: number;
  text: string;
  url: string;
}

interface SocialMedia {
  id: number;
  icon: string;
  url: string;
  alt: string;
}

const Footer: React.FC = () => {
  const footerLinks: FooterLink[] = [
    { id: 1, text: "سياسة الخصوصية", url: "/privacy" },
    { id: 2, text: "الشروط والاحكام", url: "/terms" },
    { id: 3, text: "اتصل بنا", url: "/contact" },
    { id: 4, text: "من نحن", url: "/about" }
  ];

  const socialMedia: SocialMedia[] = [
    { id: 1, icon: "/images/facebook.png", url: "https://facebook.com", alt: "Facebook" },
    { id: 2, icon: "/images/instagram.png", url: "https://instagram.com", alt: "Instagram" },
    { id: 3, icon: "/images/twitter.png", url: "https://twitter.com", alt: "Twitter" }
  ];

  return (
    <div className="footer-background footer mt-3 pt-2" style={{ maxHeight: "50px" }}>
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col sm="6" className="d-flex align-items-center">
            {footerLinks.map((link) => (
              <div key={link.id} className="footer-text">
                <a href={link.url} className="text-decoration-none">
                  {link.text}
                </a>
              </div>
            ))}
          </Col>
          <Col sm="6" className="d-flex justify-content-end align-items-center">
            <div className="d-flex gap-3">
              {socialMedia.map((social) => (
                <a 
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className="footer-social-icon"
                    style={{ width: "20px", height: "20px" }}
                  />
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer; 