"use client"
import products from '@/data/allblogs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Blog() {
  const route= useRouter()
  return (
    <div>
      {/*latest products*/}
      <div className='bg-zinc-300'>
            <h1 className="text-4xl font-bold mb-4 text-zinc-500 mx-4 py-6"><u>Our Blogs</u></h1>
            <div className="grid grid-cols-2 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 rounded-md shadow-md">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                        <h2 className="text-lg font-bold ">{product.name}</h2>
                        <Link href={`/products/${product.id}`}>
                            <button className="mt-2 bg-fuchsia-700 hover:bg-fuchsia-500 text-zinc-800 font-semibold px-4 py-2 rounded border border-zinc-500">
                                Read
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        <div className='flex items-center justify-center bg-zinc-300 py-10'>
          <button onClick={()=>route.push("/")} className='mt-2 bg-fuchsia-700 hover:bg-fuchsia-500 text-zinc-800 font-semibold px-4 py-2 rounded border border-zinc-500'>Go Back</button>
        </div>
    </div>
  );
}
