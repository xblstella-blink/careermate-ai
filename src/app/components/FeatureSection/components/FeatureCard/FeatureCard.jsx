const FeatureCard = ({ icon, subtitle, description }) => (
  <div className="bg-[#f8f9fa] rounded-3xl py-12 px-9 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
    <div className="mb-6">
      <svg className="w-[80px] h-[80px]">{icon}</svg>
    </div>
    <h3 className="text-2xl font-bold mb-4 text-black">{subtitle}</h3>
    <p className="text-gray-700 text-base leading-[1.7] ">{description}</p>
  </div>
);

export default FeatureCard;
