export default function Certifications() {
  // Add your certifications here
  const certifications = [
    {
      name: "Python Programming",
      skills: "Python, DSA",
      issuer: "CodeTantra",
      link: "https://anucet.codetantra.com/cert/certificate.jsp?certId=CT1898-uywtDT9-cm"
    },
    {
      name: "AI Intellingence Fundatmentals",
      skills: "AI, ML Basics",
      issuer: "IBM SkillBuild",
      link: "https://www.credly.com/badges/93c5289d-34a2-4d91-ac59-cedd7d661162"
    },
    {
      name: "SQL",
      skills: "Database",
      issuer: "Cognitive Class",
      link: "https://courses.cognitiveclass.ai/certificates/9c4d868797344cf799847b449b2855e4"
    },
    // Add more objects here { ... }
  ];

  return (
    <section 
      id="certifications" 
      className="min-h-screen bg-[#dce0e1] text-white py-28 px-4 md:px-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        <span className="text-blue-500">My Certifications</span>
      </h2>

      <div className="max-w-5xl mx-auto bg-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl border border-gray-800">
        
        {/* Header Row (Optional - delete if you don't want headers) */}
        <div className="hidden md:flex bg-[#252525] p-4 font-bold text-blue-500 border-b border-gray-700">
          <div className="w-16 text-center">S.No</div>
          <div className="flex-1 pl-4">Certification Details</div>
          <div className="w-40 text-center">Credential</div>
        </div>

        {/* List Rows */}
        <div className="divide-y divide-gray-800">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row md:items-center p-6 hover:bg-[#222] transition-colors duration-200"
            >
              
              {/* S.No */}
              <div className="hidden md:block w-16 text-center text-gray-500 font-mono text-xl">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Name & Skills */}
              <div className="flex-1 md:pl-4 mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-white">
                  {cert.name} <span className="text-sm font-normal text-gray-500 ml-2">| {cert.issuer}</span>
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  <span className="text-blue-500 font-medium">Skills:</span> {cert.skills}
                </p>
              </div>

              {/* Link Button */}
              <div className="md:w-40 flex md:justify-center">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium text-blue-400 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-all whitespace-nowrap"
                >
                  View Certificate
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}