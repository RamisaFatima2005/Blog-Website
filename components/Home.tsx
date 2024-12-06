"use client"
import latestblogs from '@/data/latestblog';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Homepage() {
  const route= useRouter()
  return (
    <div>
      <div>
        <Image
          src="/landingpage.jpg"
          alt="landingpage"
          width={1400}
          height={1400}
        />
      </div>

      <div className="absolute top-1/2 text-white p-4">
        <h1 className="text-4xl font-bold mb-4 text-fuchsia-700">Hii,</h1>
          <p className="text-6xl font-bold mb-4 text-zinc-500"> I'm Ramisa Fatima</p>
        <p className="text-lg">Welcome to my blog, where you'll find insightful 
        <br/>articles, tips, and tutorials on all things web development. </p>
      </div>

      <div className='bg-zinc-300'>
            <h1 className="text-4xl font-bold mb-4 text-zinc-500 mx-4 py-6"><u>Our Latest Blogs</u></h1>
            <div className="grid grid-cols-2 gap-4">
                {latestblogs.map((latestblog) => (
                    <div key={latestblog.id} className="border p-4 rounded-md shadow-md">
                        <Image src={latestblog.image} alt={latestblog.name} width={300} height={300} className="w-full h-48 object-cover" />
                        <h2 className="text-lg font-bold ">{latestblog.name}</h2>
                        <Link href={`/products/${latestblog.id}`}>
                            <button className="mt-2 bg-fuchsia-700 hover:bg-fuchsia-500 text-zinc-800 font-semibold px-4 py-2 rounded border border-zinc-500">
                                Read
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        <div className='flex items-center justify-center bg-zinc-300 py-10'>
          <button onClick={()=>route.push("/blog")} className='mt-2 bg-fuchsia-700 hover:bg-fuchsia-500 text-zinc-800 font-semibold px-4 py-2 rounded border border-zinc-500'>View More Blogs</button>
        </div>
    </div>
  );
}
