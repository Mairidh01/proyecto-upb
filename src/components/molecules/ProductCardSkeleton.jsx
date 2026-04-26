import Skeleton from '../atoms/Skeleton'

function ProductCardSkeleton() {
  return (
    <div className="flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <Skeleton className="h-48 sm:h-56 rounded-none" />
      <div className="flex flex-col gap-3 p-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
        <Skeleton className="h-4 w-24" />
        <div className="flex justify-between items-center mt-1">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-8 w-20 rounded-lg" />
        </div>
      </div>
    </div>
  )
}

export default ProductCardSkeleton
