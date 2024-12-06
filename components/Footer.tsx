import React from 'react'

export default function Footer() {
  return (
    <div><footer className="bg-zinc-900 text-white py-12">
    <div className="container mx-auto px-4 text-center">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Ramisa Fatima's Blog</h2>
        <p className="text-sm mt-2 text-zinc-400">Your go-to place for HTML, Tailwind CSS, TypeScript, and Next.js tutorials and articles.</p>
      </div>
  
      <div className="flex justify-center gap-8 mb-6">
        <a className="text-sm hover:text-fuchsia-500">HTML</a>
        <a className="text-sm hover:text-fuchsia-500">Tailwind CSS</a>
        <a className="text-sm hover:text-fuchsia-500">TypeScript</a>
        <a className="text-sm hover:text-fuchsia-500">Next.js</a>
      </div>
  
      <div className="mb-6">
        <p className="text-sm text-zinc-400">Want to reach out? Feel free to connect on LinkedIn!</p>
        <a 
    href="https://www.linkedin.com/in/ramisa-fatima-8639822b8/" 
    className="text-sm text-fuchsia-500 hover:text-fuchsia-700" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Visit My LinkedIn Profile
  </a>
      </div>
  
      <div className="border-t border-zinc-600 pt-4 mt-6">
        <p className="text-xs text-zinc-400">© 2024 Ramisa Fatima. All rights reserved.</p>
      </div>
    </div>
  </footer>
  </div>
  )
}
