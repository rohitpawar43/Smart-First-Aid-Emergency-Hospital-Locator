export interface Symptom {
  id: string;
  name: string;
  possibleCauses: string[];
  firstAid: string[];
}

export interface Hospital {
  id: string;
  name: string;
  address: string;
  contact: string;
  coordinates: [number, number];
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  qualifications: string[];
  availability: string;
  imageUrl: string;
}

// Use this version of EmergencyGuide
export interface EmergencyGuide {
  id: string;
  english: {
    title: string;
    steps: string[];
  };
  hindi: {
    title: string;
    steps: string[];
  };
  marathi: {
    title: string;
    steps: string[];
  };
  warning?: string;
}
