const user = {
    name: 'Joy Hasan',
    imageUrl: 'https://avatars.githubusercontent.com/u/61209700?s=400&u=a46f974ba6d4a187559e0ec1ffbbcce1677144f5&v=4',
    imageSize: 100,
  };
  
  export default function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar rounded-full"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
            
          }}
        />
      </>
    );
  }