import Image from "next/image";
import link from "next/link";

export default function Home() {
  return (
<main>
    <div className="bg-[url(/flixlogo.png)] h-screen bg-no-repeat bg-cover">
       <h1 className="text-5xl font-bold text-blue-500 text-center">This is a background Image</h1>
    </div>
    <div className="my-5 grid grid-cols-4">
      <div className="w-100 h-100 rounded-md shadow-md">
           <Image
           src="/img1.png"
           alt="image"
           width={200}
           height={200}
           className="w-100 h-100 rounded-md"
           />
      </div>
            <div className="w-100 h-100 rounded-md shadow-md">
           <Image
           src="/img2.png"
           alt="image"
           width={200}
           height={200}
           className="w-100 h-100 rounded-md"
           />
      </div>
            <div className="w-100 h-100 rounded-md shadow-md">
           <Image
           src="/img3.png"
           alt="image"
           width={200}
           height={200}
           className="w-100 h-100 rounded-md"
           />
      </div>
            <div className="w-100 h-100 rounded-md shadow-md">
           <Image
           src="/img4.png"
           alt="image"
           width={200}
           height={200}
           className="w-100 h-100 rounded-md"
           />
      </div>
    </div>
</main>

  )
}
