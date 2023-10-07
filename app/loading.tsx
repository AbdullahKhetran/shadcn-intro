import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    let array = Array.from(
        { length: 12 },
        (_, i) => i + 1
    )

    return (
        <main className="m-24 rounded-md grid grid-cols-4 gap-12">
            {array.map((id) => (
                <div key={id} className="bg-white p-8 col-span-4 md:col-span-2" >
                    <Skeleton className="h-6 w-1/2 bg-gray-200 mb-2"></Skeleton>
                    <Skeleton className="h-6 w-1/4mb-4 bg-gray-300"></Skeleton>
                    <Skeleton className="rounded-md w-full h-80 bg-gray-400 mt-2"></Skeleton>
                </div>

            ))
            }
        </main >
    )
}