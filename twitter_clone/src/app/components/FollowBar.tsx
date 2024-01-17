const FollowBar = () => {
  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="bg-neutral-800 rounded-xl py-4">
        <h2 className="text-white text-xl font-semi-bold text-center "> Who to follow </h2>
      </div>
      <div className="flex flex-col gap-6 mt-4">{/* fetch users*/}</div>
    </div>
  );
}; 
export default FollowBar;
