'use client'

import { Product } from '@/lib/type'
import { deleteProduct } from '@/lib/actions'
import { useRouter } from 'next/navigation'

const Ads = ({ product }: { product: Product }) => {
  const router = useRouter()
  console.log(product.id);
  

  const handleDelete = async () => {
    const confirmed = confirm('Are you sure you want to delete this product?')
    if (!confirmed) return

    try {
      await deleteProduct(product.id)
      router.refresh() // Refresh the page to show updated list
    } catch (error) {
      console.error('Failed to delete product:', error)
      alert('Error deleting product.')
    }
  }

  return (
    <div className="border p-4 mb-4 rounded-md shadow-sm">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.description}</p>

      <button
        onClick={handleDelete}
        className="mt-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  )
}

export default Ads
