export const Skeleton = () => (
  <>
    <div className="mx-auto w-60">
      <div className="py-8 h-52">
        <div className="animate-pulse bg-gray-300 rounded-lg h-full w-full" />
      </div>
    </div>
    <div className="mb-6 h-32">
      <div className="animate-pulse bg-gray-300 rounded-lg h-full w-full" />
    </div>
    <h2 className="text-xl font-semibold text-white mb-4">5-Day Forecast</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-gray-300 rounded-lg h-50"
        />
      ))}
    </div>
  </>
);
