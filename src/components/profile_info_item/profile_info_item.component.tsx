type ProfileInfoItemProps = {
  status: string;
  count: number;
};

const ProfileInfoItem = ({ status, count }: ProfileInfoItemProps) => {
  return (
    <div className="p-4 flex justify-between items-center gap-4 bg-slate-700 rounded">
      <h1 className="text-2xl">{status}</h1>
      <div className="h-12 w-12 flex items-center justify-center border border-red-400 rounded-full">
        <h2 className="text-xl">{count}</h2>
      </div>
    </div>
  );
};
export default ProfileInfoItem;
