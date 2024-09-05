// types.ts
export interface PersonalInfo {
    firstName: string;
    lastName: string;
    email: string;
    website: string;
    bio?: string;
    phone?: string;
    location?: string;
    postalCode?: string;
    city?: string;
  }
  
  export interface Experience {
    jobTitle?: string;
    company?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
  }
  
  export interface Education {
    education?: string;
    employer?: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
  }
  export interface Language {
    language?: string;
    level?: string;
  }
  export interface Skill {
    skill?: string;
    level?: string;
  }
  export interface Hobbie {
    hobbie?: string;
    level?: string;
  }
  
  export interface FormData extends PersonalInfo, Experience , Education, Language, Skill, Hobbie {}
  