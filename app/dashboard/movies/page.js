"use client"
import Image from "next/image";
import { useSession } from "next-auth/react";
import { db } from "@/config/firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";


export default function Movies() {
    const {data: session} = useSession();
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        const fetchMovies = async()=>{
            try{
                const movieRef = query(collection(db, "movies"), where("user", "==", session?.user?.id));
                const snapShot = await getDocs(movieRef);
                const compileMovies = [];
                snapShot.docs.forEach((doc)=>{
                    compileMovies.push({
                        id:doc.id,
                        data: doc.data()
                    })
                })
                setMovies(compileMovies)

            }
            catch(error){
                console.error("unable to fetch movies:",error)
            }
        }
        if(session){
            fetchMovies()
        }
    },[session])
    return (
        <main className="min-h-screen py-20 p-4">
           <h1 className="text-4xl font-bold text-center text-red-500">Movies Collection</h1>
           <div className="grid drid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {movies.map((movies)=>
               <div key={movies.id} className="w-75 h-80 rounded shadow-md">
                 <Img
                  src={movies}
                  alt="movie-image"
                  width={200}
                  height={200}
                  className="w-75 h-40 rounded-t-md"
                 />
                 <div className="px-3 py-3">
                     <p className="text-xl font-semibold">{movies.data.title}</p>
                     <p className="text-sm text-gray-700">Genre:{movies.data.genre}</p>
                     <p>{movies.data.releaseYear}</p>
                     <p className="text-sm text-gray-700">Comments: {movies.data.comments}</p>
                 </div>

               </div>
               )}
           </div>
           
        </main>
    )
}