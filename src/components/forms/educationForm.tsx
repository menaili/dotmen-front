import React from 'react'
import { FormData } from '@/interfaces/types'

interface FormProps {
    formData: FormData;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const EducationForm: React.FC<FormProps> = ({ formData, handleInputChange }) => {

    return (
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
    )
}

export default EducationForm
