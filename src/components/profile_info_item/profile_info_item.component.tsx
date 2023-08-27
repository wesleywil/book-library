type ProfileInfoItemProps = {
  status: string;
  count: number;
};

const ProfileInfoItem = ({ status, count }: ProfileInfoItemProps) => {
  return (
    <div className="p-4 flex justify-between items-center gap-4 bg-[#fffff3]/90 text-[#222126] rounded drop-shadow-md">
      <h1 className="text-2xl font-semibold">{status}</h1>
      <div className="h-12 w-12 flex items-center justify-center bg-[#f3392c] border-2 border-[#222126] rounded-full">
        <h2 className="text-[#fffff3] text-xl font-bold">{count}</h2>
      </div>
    </div>
  );
};
export default ProfileInfoItem;
