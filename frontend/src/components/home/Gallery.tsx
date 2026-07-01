export default function Gallery() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Safari Moments
          </h2>

          <p className="text-gray-600 mt-4">
            A glimpse of unforgettable experiences.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {[1,2,3,4,5,6,7,8].map((item)=>(
            <div
              key={item}
              className="h-56 bg-gray-300 rounded-2xl flex items-center justify-center"
            >
              Photo
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}