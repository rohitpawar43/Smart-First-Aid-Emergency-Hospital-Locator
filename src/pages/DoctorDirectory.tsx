import { Search, Phone, Calendar } from 'lucide-react';
import { useState } from "react";

import d1 from '../pages/images/Doctor_1.jpg'
import d2 from '../pages/images/Doctor_2.webp'
import d3 from '../pages/images/Doctor_3.webp'
import d4 from '../pages/images/Doctor_4.jpg'
import d5 from '../pages/images/Doctor_5.jpg'
import d6 from '../pages/images/Doctor_6.jpg'

import './DoctorDirectory.css'; // import CSS

const doctors = [
  {
    id: 1,
    name: 'Dr. Priya Nair',
    qualifications: ['MBBS'],
    specialty: 'General Physician',
    problems: ['Cold, Fever, Infection'],
    availability: '24/7',
    contact: '+91 7767911747',
    imageUrl: d1 
  },
  {
    id: 2,
    name: 'Dr. Arjun Mehta ',
    qualifications: ['MD', 'FAAP'],
    specialty: 'Pediatrician',
    problems: ['Child Health, Vaccination, Growth Issues'],
    availability: '24/7',
    contact: '+91 7821831040',
    imageUrl: d2
  },
  {
    id: 3,
    name: 'Dr. Sneha Reddy',
    qualifications: ['MD', 'FACS'],
    specialty: 'Surgeon',
    problems: ['Surgery, Injury, Tumors'],
    availability: '24/7',
    contact: '+91 72182 39450',
    imageUrl: d3
  },
  {
    id: 4,
    name: 'Dr. Rohit Kulkarni',
    qualifications: ['MD', 'FACP'],
    specialty: 'Cardiologist',
    problems: ['Heart Disease, Hypertension, ECG Issues'],
    availability: 'Wed, Thu, Fri',
    contact: '+91 9657021331',
    imageUrl: d4
  },
  {
    id: 5,
    name: 'Dr. Kiran Deshpande',
    qualifications: ['MD', 'FACOG'],
    specialty: 'Gynecologist',
    problems: ['Pregnancy, PCOS, Menstrual Disorders'],
    availability: 'Mon, Wed, Fri',
    contact: '+91 94229 35350',
    imageUrl: d5
  },
  {
    id: 6,
    name: 'Dr. Vivek Choudhary',
    qualifications: ['MD', 'FACOG'],
    specialty: 'Orthopedic',
    problems: ['Bone Fracture, Joint Pain, Arthritis'],
    availability: 'Mon, Wed, Fri',
    contact: '+91 97647 12291',
    imageUrl: d6
  }
];

const DoctorDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = doctors.filter(doctor => {
    return doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="doctor-directory">
      <h1 className="title">Find a Doctor</h1>

      <div className="search-box">
        <Search className="search-icon" />
        <input
          type="text"
          placeholder="Search doctors by name..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="doctor-grid">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <div className="doctor-card-flex">
              <img src={doctor.imageUrl} alt={doctor.name} className="doctor-image" />
              <div className="doctor-info">
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-qual">{doctor.qualifications.join(', ')}</p>
                <p className="doctor-specialty">{doctor.specialty}</p>
                <p className="doctor-problems">Helps with: {doctor.problems.join(', ')}</p>
                <div className="doctor-contact">
                  <Phone className="icon-sm" />
                  {doctor.contact}
                </div>
                <div className="doctor-availability">
                  <Calendar className="icon-sm" />
                  Available: {doctor.availability}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorDirectory;
