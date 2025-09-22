import { useState } from 'react';
import { emergencyGuides } from '../data/emergencyGuides';
import { AlertTriangle, Phone } from 'lucide-react';
import './EmergencyGuide.css';

type Language = 'english' | 'hindi' | 'marathi';

const EmergencyGuide = () => {
  const [language, setLanguage] = useState<Language>('english'); 

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="emergency-guide">
      {/* Language Buttons */}
      <div className="lang-buttons">
        <button onClick={() => handleLanguageChange('english')}>English</button>
        <button onClick={() => handleLanguageChange('hindi')}>हिंदी</button>
        <button onClick={() => handleLanguageChange('marathi')}>मराठी</button>
      </div>

      {/* Emergency Numbers */}
      <div className="emergency-box">
        <div className="emergency-header">
          <div className="emergency-info">
            <AlertTriangle className="icon-lg red" />
            <div>
              <h2>
                {language === 'hindi'
                  ? 'आपातकालीन नंबर'
                  : language === 'marathi'
                  ? 'आपत्कालीन नंबर'
                  : 'Emergency Numbers'}
              </h2>
              <p>
                {language === 'hindi'
                  ? 'आपातकालीन सेवा: '
                  : language === 'marathi'
                  ? 'आपत्कालीन सेवा: '
                  : 'Emergency Services: '}
                <span className="highlight">911</span>
              </p>
              <p>
                {language === 'hindi'
                  ? 'पॉइजन कंट्रोल: '
                  : language === 'marathi'
                  ? 'पॉइजन कंट्रोल: '
                  : 'Poison Control: '}
                <span className="highlight">1800-425-1213</span>
              </p>
            </div>
          </div>
          <button
            onClick={() => (window.location.href = 'tel:911')}
            className="call-btn"
          >
            <Phone className="icon-sm" />
            {language === 'hindi'
              ? 'आपातकालीन सेवाओं को कॉल करें'
              : language === 'marathi'
              ? 'आपत्कालीन सेवांना कॉल करा'
              : 'Call Emergency Services'}
          </button>
        </div>
      </div>

      {/* Guides */}
      <div className="guide-grid">
        {emergencyGuides.map((guide) => (
          <div key={guide.id} className="guide-card">
            <div className="guide-title">
              <h2>{guide[language]?.title || guide.english.title}</h2>
            </div>
            <div className="guide-content">
              <ol>
                {(guide[language]?.steps || guide.english.steps).map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>

              {guide.warning && (
                <div className="warning-box">
                  <p>
                    <strong>Warning:</strong> {guide.warning}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmergencyGuide;
