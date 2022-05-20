const getUsers = async () => {
  const request = await fetch('http://localhost:3001/user');
  const requestJson = await request.json();
  return requestJson;
};

export default getUsers;

