const ProgressTracker = ({ current, total }) => {
  return (
    <div className="fixed right-30 top-30 bg-gray-400 rounded-lg shadow-lg px-4 py-2 text-white z-40">
      <div className="flex items-center gap-2">
        <span className="text-yellow-400 font-bold">{current}</span>
        <span className="text-gray-200">in</span>
        <span className="text-yellow-400 font-bold">{total}</span>
      </div>
    </div>
  );
};

export default ProgressTracker; 