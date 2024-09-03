'use client'

import { useState } from 'react'

const steps = [
  { id: 'Step 1', name: 'Personal Information' },
  { id: 'Step 2', name: 'Experience' },
  { id: 'Step 3', name: 'Education' },
  { id: 'Step 4', name: 'Languages' },
  { id: 'Step 5', name: 'Skills' },
  { id: 'Step 6', name: 'Hobbies' },
]
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  website: string;
}

interface FormProps {
  formData: FormData;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form: React.FC<FormProps> = ({ formData, handleInputChange }) => {
  const [currentStep, setCurrentStep] = useState(0)

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(step => step + 1)
    }
  }

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep(step => step - 1)
    }
  }

  return (
    <section className='w-full p-5'>
      {/* steps */}
      <nav aria-label='Progress'>
        <ol role='list' className='space-y-4 md:flex md:space-x-8 md:space-y-0'>
          {steps.map((step, index) => (
            <li key={step.name} className='md:flex-1'>
              {currentStep > index ? (
                <button
                  onClick={() => setCurrentStep(index)}
                  className='group flex w-full flex-col'
                >
                
                  {/* <span className='text-sm font-medium text-sky-600 transition-colors group-hover:text-sky-800'>
                    {step.id}
                  </span> */}
                  <div className='flex w-full items-center flex-col gap-3'>
                    <div className='h-2.5 w-full rounded-full bg-sky-600 '></div>
                    <span className='text-sm font-medium'>{step.name}</span>
                  </div>
                </button>
              ) : currentStep === index ? (
                <button
                  onClick={() => setCurrentStep(index)}
                  className='group flex w-full flex-col'
                  aria-current='step'
                >
                  {/* <span className='text-sm font-medium text-sky-600'>
                    {step.id}
                  </span> */}
                  <div className='flex w-full items-center flex-col gap-3'>
                    <div className='h-2.5 w-full rounded-full bg-sky-600 '></div>
                    <span className='text-sm font-medium'>{step.name}</span>
                  </div>
                </button>
              ) : (
                <button
                  onClick={() => setCurrentStep(index)}
                  className='group flex w-full flex-col'
                >
                  {/* <span className='text-sm font-medium text-gray-500 transition-colors group-hover:text-gray-700'>
                    {step.id}
                  </span> */}
                  <div className='flex w-full items-center flex-col gap-3'>
                    <div className='h-2.5 w-full rounded-full bg-gray-200 hover:bg-gray-300'></div>
                    <span className='text-sm font-medium'>{step.name}</span>
                  </div>
                </button>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Form */}
      <form className='mt-10 py-10'>
        {currentStep === 0 && (
          <>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Personal Information
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            fournir votre personal details.
          </p>
          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        
            {/* Profile Picture */}
            
            <div className='sm:col-span-2'>
              <label
                htmlFor='profile-picture'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Photo
              </label>
              <div className='mt-2'>
                <img
                  src='your-image-source-url-here'
                  alt='Profile'
                  className='w-full h-auto rounded-lg'
                />
              </div>
            </div>
        
            {/* First Name */}
            <div className='sm:col-span-2'>
              <label
                htmlFor='first-name'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Prénom
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='firstName'
                  id='first-name'
                  value={formData.firstName}
                  onChange={handleInputChange}
                  autoComplete='given-name'
                  className='w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                />
              </div>
            </div>
        
            {/* Last Name */}
            <div className='sm:col-span-2'>
              <label
                htmlFor='last-name'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Nom de famille
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='lastName'
                  id='last-name'
                  value={formData.lastName}
                  onChange={handleInputChange}
                  autoComplete='family-name'
                  className='w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                />
              </div>
            </div>

            {/* Bio */}
            <div className='sm:col-span-6'>
              <label
                htmlFor='bio'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Bio
              </label>
              <div className='mt-2'>
                <textarea
                  name='bio'
                  id='bio'
                  rows={4}
                  className='w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                />
              </div>
            </div>
        
            {/* Email */}
            <div className='sm:col-span-3'>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Adresse e-mail
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                />
              </div>
            </div>
        
            {/* Title */}
            <div className='sm:col-span-3'>
              <label
                htmlFor='title'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Titre
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='title'
                  id='title'
                  className='w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                />
              </div>
            </div>
        
            {/* Phone Number */}
            <div className='sm:col-span-3'>
              <label
                htmlFor='phone'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Numéro de téléphone
              </label>
              <div className='mt-2'>
                <input
                  type='tel'
                  name='phone'
                  id='phone'
                  autoComplete='tel'
                  className='w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                />
              </div>
            </div>
        
            {/* Address */}
            <div className='sm:col-span-3'>
              <label
                htmlFor='address'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Adresse
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='location'
                  id='address'
                  className='w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                />
              </div>
            </div>
        
            {/* Postal Code */}
            <div className='sm:col-span-3'>
              <label
                htmlFor='postal-code'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Code postal
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='postalCode'
                  id='postal-code'
                  className='w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                />
              </div>
            </div>
        
            {/* City */}
            <div className='sm:col-span-3'>
              <label
                htmlFor='city'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Ville
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='city'
                  id='city'
                  className='w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                />
              </div>
            </div>
          </div>
        </>
        
        )}

        {currentStep === 1 && (
          <>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Experience
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            Add details about your professional experience.
          </p>
          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            
            {/* Job Title */}
            <div className='sm:col-span-6'>
              <label
                htmlFor='job-title'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Poste
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='jobTitle'
                  id='job-title'
                  className='w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                />
              </div>
            </div>
        
            {/* Employer */}
            <div className='sm:col-span-3'>
              <label
                htmlFor='employer'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Employeur
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='employer'
                  id='employer'
                  className='w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                />
              </div>
            </div>
        
            {/* City */}
            <div className='sm:col-span-3'>
              <label
                htmlFor='city'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Ville
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='city'
                  id='city'
                  className='w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                />
              </div>
            </div>
        
            {/* Start Date */}
            <div className='sm:col-span-3'>
              <label
                htmlFor='start-date'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Date de début
              </label>
              <div className='mt-2 grid grid-cols-2 gap-2'>
                <select
                  name='startMonth'
                  id='start-month'
                  className='px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                >
                  <option value=''>Mois</option>
                  {/* Add month options */}
                </select>
                <select
                  name='startYear'
                  id='start-year'
                  className='px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                >
                  <option value=''>Année</option>
                  {/* Add year options */}
                </select>
              </div>
            </div>
        
            {/* End Date */}
            <div className='sm:col-span-3'>
              <label
                htmlFor='end-date'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Date de fin
              </label>
              <div className='mt-2 grid grid-cols-2 gap-2'>
                <select
                  name='endMonth'
                  id='end-month'
                  className='px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                >
                  <option value=''>Mois</option>
                  {/* Add month options */}
                </select>
                <select
                  name='endYear'
                  id='end-year'
                  className='px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                >
                  <option value=''>Année</option>
                  {/* Add year options */}
                </select>
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    name='current'
                    id='current'
                    className='mr-2'
                  />
                  <label htmlFor='current' className='text-sm text-gray-600'>
                    ce jour
                  </label>
                </div>
              </div>
            </div>
        
            {/* Description */}
            <div className='sm:col-span-6'>
              <label
                htmlFor='description'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Description
              </label>
              <div className='mt-2'>
                <textarea
                  name='description'
                  id='description'
                  rows={4}
                  className='w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                />
              </div>
            </div>
        
            {/* Add more experience */}
            <div className='sm:col-span-6'>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200'
              >
                + Ajouter une expérience professionnelle
              </button>
            </div>
          </div>
        </>
        
        )}

        {currentStep === 2 && (
          <>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Education
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            Add details about your professional education.
          </p>
          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            
            {/* Job Title */}
            <div className='sm:col-span-6'>
              <label
                htmlFor='education'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Formation
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='education'
                  id='education'
                  className='w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                />
              </div>
            </div>
        
            {/* Employer */}
            <div className='sm:col-span-3'>
              <label
                htmlFor='school'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Établissement
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='school'
                  id='employer'
                  className='w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                />
              </div>
            </div>
        
            {/* City */}
            <div className='sm:col-span-3'>
              <label
                htmlFor='city'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Ville
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='city'
                  id='city'
                  className='w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                />
              </div>
            </div>
        
            {/* Start Date */}
            <div className='sm:col-span-3'>
              <label
                htmlFor='start-date'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Date de début
              </label>
              <div className='mt-2 grid grid-cols-2 gap-2'>
                <select
                  name='startMonth'
                  id='start-month'
                  className='px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                >
                  <option value=''>Mois</option>
                  {/* Add month options */}
                </select>
                <select
                  name='startYear'
                  id='start-year'
                  className='px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                >
                  <option value=''>Année</option>
                  {/* Add year options */}
                </select>
              </div>
            </div>
        
            {/* End Date */}
            <div className='sm:col-span-3'>
              <label
                htmlFor='end-date'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Date de fin
              </label>
              <div className='mt-2 grid grid-cols-2 gap-2'>
                <select
                  name='endMonth'
                  id='end-month'
                  className='px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                >
                  <option value=''>Mois</option>
                  {/* Add month options */}
                </select>
                <select
                  name='endYear'
                  id='end-year'
                  className='px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                >
                  <option value=''>Année</option>
                  {/* Add year options */}
                </select>
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    name='current'
                    id='current'
                    className='mr-2'
                  />
                  <label htmlFor='current' className='text-sm text-gray-600'>
                    ce jour
                  </label>
                </div>
              </div>
            </div>
        
            {/* Description */}
            <div className='sm:col-span-6'>
              <label
                htmlFor='description'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Description
              </label>
              <div className='mt-2'>
                <textarea
                  name='description'
                  id='description'
                  rows={4}
                  className='w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                />
              </div>
            </div>
        
            {/* Add more experience */}
            <div className='sm:col-span-6'>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200'
              >
                + Ajouter une éducation
              </button>
            </div>
          </div>
        </>
        )}

        {currentStep === 3 && (
         <>
          {/* Language */}
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Langues
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            fournir votre languages.
          </p>
          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
          <div className='sm:col-span-3'>
            <label
              htmlFor='language'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Langue
            </label>
            <input
              type='text'
              name='language'
              id='language'
              className='mt-2 block w-full rounded-md border-0 bg-gray-100 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
    
          {/* Level */}
          <div className='sm:col-span-3'>
            <label
              htmlFor='level'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Niveau
            </label>
            <select
              id='level'
              name='level'
              className='mt-2 block w-full rounded-md border-0 bg-gray-100 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
            >
              <option value=''>Sélectionnez le niveau</option>
              <option value='beginner'>Débutant</option>
              <option value='intermediate'>Intermédiaire</option>
              <option value='advanced'>Avancé</option>
              <option value='native'>Langue maternelle</option>
            </select>
          </div>
    
          {/* Submit or Add button */}
          <div className='sm:col-span-6'>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200'
              >
                + Ajouter une langue
              </button>
            </div>
            </div>
        </>
        )}

        {currentStep === 4 && (
         <>
          {/* Skill */}
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Compétence
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            fournir votre Compétence.
          </p>
          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
          <div className='sm:col-span-3'>
            <label
              htmlFor='skill'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Compétence
            </label>
            <input
              type='text'
              name='skill'
              id='skill'
              className='mt-2 block w-full rounded-md border-0 bg-gray-100 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
    
          {/* Level */}
          <div className='sm:col-span-3'>
            <label
              htmlFor='level'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Niveau
            </label>
            <select
              id='level'
              name='level'
              className='mt-2 block w-full rounded-md border-0 bg-gray-100 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
            >
              <option value=''>Sélectionnez le niveau</option>
              <option value='beginner'>Débutant</option>
              <option value='intermediate'>Intermédiaire</option>
              <option value='advanced'>Avancé</option>
              <option value='native'>Langue maternelle</option>
            </select>
          </div>
    
          {/* Submit or Add button */}
          <div className='sm:col-span-6'>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200'
              >
                + Ajouter une lompétence
              </button>
            </div>
          </div>
        </>
        )}

        {currentStep === 5 && (
         <>
          {/* Skill */}
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Centre d'intérêt
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            fournir votre Centre d'intérêt.
          </p>
          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
          <div className='sm:col-span-3'>
            <label
              htmlFor='skill'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Centre d'intérêt
            </label>
            <input
              type='text'
              name='skill'
              id='skill'
              className='mt-2 block w-full rounded-md border-0 bg-gray-100 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
    
          {/* Level */}
          
    
          {/* Submit or Add button */}
          <div className='sm:col-span-6'>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200'
              >
                + Ajouter une lompétence
              </button>
            </div>
          </div>
        </>
        )}
      </form>

      {/* Navigation */}
      <div className='mt-2 pt-2'>
        <div className='flex justify-between'>
          <button
            type='button'
            onClick={prev}
            disabled={currentStep === 0}
            className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:cursor-not-allowed disabled:opacity-50'
          >
            Previous
          </button>
          <button
            type='button'
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
          >
            Next
          </button>
        </div>
      </div>
    </section>
  )
}

export default Form;