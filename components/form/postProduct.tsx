'use client'

import React, { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { MdOutlineAddAPhoto } from 'react-icons/md'
import Link from 'next/link'
import { postProduct } from '@/lib/actions'

type Category = {
  id: number
  name: string
}

const MAX_IMAGES = 20

const ProductPostForm = ({
  category,
  loggedInUserEmail,
  loggedInUserImage,
}: {
  category: Category
  loggedInUserEmail: string
  loggedInUserImage: string
}) => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [details, setDetails] = useState('')
  const [brand, setBrand] = useState('')
  const [postedIn, setPostedIn] = useState('')
  const [images, setImages] = useState<(File | null)[]>(Array(MAX_IMAGES).fill(null))
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleImageSelect = (index: number, file: File | null) => {
    const updated = [...images]
    updated[index] = file
    setImages(updated)
  }

  const triggerFileInput = (index: number) => {
    inputRefs.current[index]?.click()
  }

  const removeImage = (index: number) => {
    const updated = [...images]
    updated[index] = null
    setImages(updated)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('details', details)
    formData.append('brand', brand)
    formData.append('posted_in', postedIn)
    formData.append('category_id', String(category.id))
    formData.append('owner_id', loggedInUserEmail)
    formData.append('owner_picture_url', loggedInUserImage)
    formData.append('owner_email', loggedInUserEmail)

    images.forEach((file) => {
      if (file) {
        formData.append('images', file)
      }
    })

    try {
      const res = await postProduct(formData)
      setMessage(res.message || 'Product submitted successfully.')
      
      setTimeout(() => {
        router.push('/')
      }, 1000)

      setName('')
      setDescription('')
      setPrice('')
      setDetails('')
      setBrand('')
      setPostedIn('')
      setImages(Array(MAX_IMAGES).fill(null))
    } catch (err: any) {
      setMessage(err.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section>
      <div className='max-w-3xl mx-auto'>
        <div className='w-full text-2xl text-center p-4 uppercase font-bold'>
          <h6>Post your Ad</h6>
        </div>
        <div className='border rounded-md'>
          <div className='p-4 border-b-2'>
            <h6 className='text-2xl font-semibold'>Selected category</h6>
            <div className='flex gap-4'>
              <span className='text-gray-500'>{category.name}</span>
              <Link className='text-md font-semibold text-blue-900 hover:underline underline-offset-6' href='/post'>
                Change
              </Link>
            </div>
          </div>
          <form onSubmit={handleSubmit} className='space-y-6 p-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block font-medium mb-1'>Name</label>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className='w-full p-2 border rounded'
                />
              </div>
              <div>
                <label className='block font-medium mb-1'>Price</label>
                <input
                  type='number'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  className='w-full p-2 border rounded'
                />
              </div>
              <div>
                <label className='block font-medium mb-1'>Brand</label>
                <input
                  type='text'
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  required
                  className='w-full p-2 border rounded'
                />
              </div>
              <div>
                <label className='block font-medium mb-1'>Posted In</label>
                <input
                  type='text'
                  value={postedIn}
                  onChange={(e) => setPostedIn(e.target.value)}
                  required
                  className='w-full p-2 border rounded'
                />
              </div>
            </div>

            <div>
              <label className='block font-medium mb-1'>Details</label>
              <input
                type='text'
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                required
                className='w-full p-2 border rounded'
              />
            </div>

            <div>
              <label className='block font-medium mb-1'>Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className='w-full p-2 border rounded'
              />
            </div>

            <div>
              <h3 className='text-black font-bold text-lg mb-2'>UPLOAD UP TO 20 PHOTOS</h3>
              <div className='grid grid-cols-4 gap-3'>
                {Array.from({ length: MAX_IMAGES }).map((_, index) => (
                  <div
                    key={index}
                    className={`relative w-24 h-24 border rounded flex items-center justify-center bg-gray-50 ${
                      index === 0 && images[0] ? 'border-black border-2' : ''
                    }`}
                  >
                    {images[index] ? (
                      <>
                        <img
                          src={URL.createObjectURL(images[index]!)}
                          alt={`Image ${index + 1}`}
                          className='absolute w-full h-full object-cover rounded'
                        />
                        <button
                          type='button'
                          onClick={() => removeImage(index)}
                          className='absolute top-0 right-0 bg-black/70 text-white text-xs px-1 rounded-bl'
                        >
                          ×
                        </button>
                      </>
                    ) : (
                      <button
                        type='button'
                        onClick={() => triggerFileInput(index)}
                        disabled={index !== 0 && !images[index - 1]}
                        className={`flex flex-col items-center justify-center text-center text-xs text-gray-900 ${
                          index !== 0 && !images[index - 1] ? 'opacity-30 cursor-not-allowed' : ''
                        }`}
                      >
                        <MdOutlineAddAPhoto className='w-6 h-6 mb-1' />
                        Add Photo
                      </button>
                    )}
                    <input
                      type='file'
                      accept='image/*'
                      className='hidden'
                      ref={(el) => (inputRefs.current[index] = el)}
                      onChange={(e) => handleImageSelect(index, e.target.files?.[0] || null)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              type='submit'
              disabled={loading}
              className='bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:opacity-50 w-full'
            >
              {loading ? 'Submitting...' : 'Submit Product'}
            </button>

            {message && <p className='text-center text-sm mt-2 text-red-600'>{message}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ProductPostForm
