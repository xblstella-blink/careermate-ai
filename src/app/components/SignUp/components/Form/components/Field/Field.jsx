const Field = ({ label, type, placeholder, value, onChange, error }) => (
  <div>
    <div>
      <label className="text-grey-700 mb-2 text-sm block">{label}</label>
      <input
        className={`px-4 h-12 rounded-3xl border border-gray-300 w-full ${error ? "border-red-600" : " "}`.trim()}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
    <div className="text-sm text-red-600 mt-1 pl-4 h-[1em]">{error}</div>
  </div>
);
export default Field;
