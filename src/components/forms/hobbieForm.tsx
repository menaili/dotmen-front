import React from 'react'
import { FormData } from '@/interfaces/types'

interface FormProps {
    formData: FormData
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const HobbieForm: React.FC<FormProps> = ({ formData, handleInputChange }) => {

    return (
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
    )
}

export default HobbieForm
