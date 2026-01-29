const Field = ({ label, type, placeholder }) => (
  <div>
    <label className="text-grey-700 mb-2 text-sm block">{label}</label>
    <input
      className="px-4 h-12 rounded-3xl border border-gray-300 w-full "
      type={type}
      placeholder={placeholder}
    />
  </div>
);
export default Field;
