import React from 'react'
import { FormData } from '@/interfaces/types'
  
  interface FormProps {
    formData: FormData;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

const PersonalForm: React.FC<FormProps> = ({ formData, handleInputChange }) => {

    return (
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
                  value={formData.email}
                  onChange={handleInputChange}
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
    )
}

export default PersonalForm
