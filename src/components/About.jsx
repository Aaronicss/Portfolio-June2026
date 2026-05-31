export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 px-8"
    >
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Section Title */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-1 w-16 bg-blue-500 rounded-full"></div>
          <h2 className="text-4xl font-bold text-gray-900">
            About Me
          </h2>
          <div className="h-1 w-16 bg-blue-500 rounded-full"></div>
        </div>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
          Full-Stack Developer specializing in{" "}
          <span className="font-semibold text-blue-600">
            React, React Native, Python, and AI-powered applications
          </span>.
          Experienced in the design, implementation, and deployment of
          intelligent web and mobile applications utilizing Computer Vision
          and Machine Learning models—from frontend interfaces to backend APIs.
        </p>

        {/* Optional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="rounded-2xl border border-blue-100 p-6 shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600">Web</h3>
            <p className="mt-2 text-gray-600">
              Modern React Applications
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 p-6 shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600">Mobile</h3>
            <p className="mt-2 text-gray-600">
              React Native Development
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 p-6 shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600">AI</h3>
            <p className="mt-2 text-gray-600">
              Computer Vision & ML Solutions
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}