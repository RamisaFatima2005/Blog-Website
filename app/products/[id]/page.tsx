"use client"
import products from "@/data/allblogs";
import { useRouter } from "next/navigation";
import CommentSection from "@/components/Comment";  

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
    const product = products.find((p) => p.id === params.id);

    if (!product) {
        return <p>Product not found!</p>;
    }

    const route = useRouter();

    return (
        <div className="bg-zinc-200 min-h-screen">
            <h1 className="text-5xl font-bold text-fuchsia-700 mx-5 py-6">{product.name}</h1>
            <img src={product.image} alt={product.name} className="w-full h-80 object-cover my-4" />
            <p className="text-lg">{product.description}</p>
            <br />
            <p className="text-lg">{product.description2}</p>
            <br />
            <p className="text-lg">{product.description3}</p>
            <br />
            <CommentSection />
            
            <div className='flex items-center justify-center bg-zinc-300 py-10'>
                <button onClick={() => route.push("/")} className='mt-2 bg-fuchsia-700 hover:bg-fuchsia-500 text-zinc-800 font-semibold px-4 py-2 rounded border border-zinc-500'>
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default ProductDetailPage;
