const useLogin = () => {
  const token = localStorage.getItem("token");
  // const [login,setLogin]
  return !!token;
};

export default useLogin;
