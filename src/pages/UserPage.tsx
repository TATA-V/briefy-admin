import UserTable from 'src/components/User/UserTable';

function UserPage() {
  return (
    <div className="px-5 py-10 w-full">
      <h1 className="text-black900 text-3xl font-medium">
        User
      </h1>
      <p className="text-black900 font-light pt-5 pb-9">유저 리스트</p>
      <UserTable />
    </div>
  );
}

export default UserPage;
