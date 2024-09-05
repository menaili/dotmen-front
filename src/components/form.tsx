'use client'

import { useState } from 'react'
import PersonalForm from './forms/personalForm';
import ExperienceForm from './forms/experienceForm';
import EducationForm from './forms/educationForm';
import LanguageForm from './forms/languageForm';
import SkillForm from './forms/skillForm';
import HobbieForm from './forms/hobbieForm';
import { FormData } from '@/interfaces/types'

const steps = [
  { id: 'Step 1', name: 'Personal Information' },
  { id: 'Step 2', name: 'Experience' },
  { id: 'Step 3', name: 'Education' },
  { id: 'Step 4', name: 'Languages' },
  { id: 'Step 5', name: 'Skills' },
  { id: 'Step 6', name: 'Hobbies' },
]


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
          <PersonalForm formData={formData} handleInputChange={handleInputChange} />        
        )}

        {currentStep === 1 && (
          <ExperienceForm formData={formData} handleInputChange={handleInputChange} />        
        )}

        {currentStep === 2 && (
          <EducationForm formData={formData} handleInputChange={handleInputChange} />
        )}

        {currentStep === 3 && (
          <LanguageForm formData={formData} handleInputChange={handleInputChange} />
        )}

        {currentStep === 4 && (
          <SkillForm formData={formData} handleInputChange={handleInputChange} />
        )}

        {currentStep === 5 && (
          <HobbieForm formData={formData} handleInputChange={handleInputChange} />
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