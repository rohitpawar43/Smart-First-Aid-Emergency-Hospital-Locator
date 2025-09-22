import { useState } from "react";
import { AlertTriangle, Info, ShieldAlert } from "lucide-react";
import "./SymptomChecker.css";

function SymptomChecker() {
  const [selectedCondition, setSelectedCondition] = useState<
    keyof typeof recommendations | null
  >(null);

  const recommendations = {
    Headache: [
      "Rest in a quiet, dark room.",
      "Drink water to stay hydrated.",
      "Use a cold compress on the forehead.",
    ],
    Vomiting: [
      "Drink small sips of water or oral rehydration solution (ORS).",
      "Avoid solid food until vomiting stops.",
      "Seek medical help if vomiting persists for more than 24 hours.",
    ],
    "Chest Pain": [
      "Call emergency services immediately (911).",
      "Chew an aspirin if recommended and not allergic.",
      "Stay calm and avoid physical exertion.",
    ],
    "High Sweats": [
      "Rest in a cool, shaded area.",
      "Drink water to stay hydrated.",
      "Seek medical help if sweating is accompanied by dizziness or nausea.",
    ],
    Diarrhea: [
      "Drink plenty of fluids to prevent dehydration.",
      "Eat a bland diet (BRAT – Banana, Rice, Applesauce, Toast).",
      "Take ORS if symptoms persist.",
    ],
    Suffocation: [
      "Move to an open, well-ventilated area.",
      "Loosen any tight clothing around the neck.",
      "Seek immediate medical assistance if breathing difficulty persists.",
    ],
    Paralysis: [
      "Ensure a safe, stable position to prevent further injury.",
      "Call emergency services immediately.",
      "Do not attempt sudden movements; wait for medical assistance.",
    ],
    Typhoid: [
      "Drink boiled or purified water to stay hydrated.",
      "Take prescribed antibiotics as directed by a doctor.",
      "Eat light, easily digestible foods.",
    ],
    Cough: [
      "Drink warm fluids like honey and ginger tea.",
      "Use a humidifier to keep the air moist.",
      "Avoid cold or dusty environments.",
    ],
    "Animal Bite": [
      "Wash the wound with soap and running water for at least 5 minutes.",
      "Apply an antiseptic and cover with a clean bandage.",
      "Seek medical help to check for rabies vaccination.",
    ],
    "Heavy Bleeding": [
      "Apply direct pressure to stop bleeding.",
      "Elevate the injured area if possible.",
      "Seek emergency medical assistance immediately.",
    ],
    "Heart Attack": [
      "Call emergency services immediately (911).",
      "Chew an aspirin if recommended and not allergic.",
      "Stay calm and avoid physical exertion.",
    ],
  };

  return (
    <div className="symptom-container">
      <h2 className="symptom-title">
        <AlertTriangle className="icon-warning" />
        Emergency Guidelines
      </h2>

      <div className="symptom-grid">
        {Object.keys(recommendations).map((condition) => (
          <button
            key={condition}
            onClick={() => setSelectedCondition(condition as keyof typeof recommendations)}
            className="symptom-btn"
          >
            <ShieldAlert className="icon-btn" /> {condition}
          </button>
        ))}
      </div>

      {selectedCondition && (
        <div className="symptom-box">
          <h3 className="symptom-subtitle">
            <Info className="icon-info" />
            Recommended Actions
          </h3>
          <ul className="symptom-list">
            {recommendations[selectedCondition].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button
            onClick={() => setSelectedCondition(null)}
            className="close-btn"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default SymptomChecker;
