import Image from "next/image";

export default function ProfilePage(){
    return(
        <main className="min-h-screen flex justify-center py-20 px-5">
            <div className="w-full md:w-90 md:max-h-140 rounded shadow-md py-5 px4">
                <h1 className="text-center font-semibold text-xl">Profile Details</h1>
                  <div className="mt-2 flex justify-center">
                    <Image
                    src="/photo50.png"
                    alt="profile-image"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full"
                    />
                  </div>  
                  <div className="px-5 py-5 flex flex-col gap-4 mt-8 w-80 h-60 shadow rounded-md">
                         <div className="flex justify-between items-center">
                            <p className="font-semibold">FullName</p>
                            <p className="text-gray-600 text-xs">Stanley Nwakamma</p>
                         </div>
                            <div className="flex justify-between items-center"></div>
                            <p className="font-semibold">Email</p>
                            <p className="text-gray-600 text-xs">richboymega@gmail.com</p>
                            </div>
                            
                            <div className="flex justify-between items-center"></div>
                            <p className="font-semibold">Email</p>
                            <p className="text-gray-600 text-xs">richboymega@gmail.com</p>
                            </div>
                           
                           <div className="flex justify-between items-center"></div>
                            <p className="font-semibold">Email</p>
                            <p className="text-gray-600 text-xs">richboymega@gmail.com</p>
                       </div>
                  </div>
            </div>
            

        </main>
    )
}