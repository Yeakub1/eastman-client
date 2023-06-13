import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useSecure = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: Myclass = [] } = useQuery({
    queryKey: ["class", user?.email],
    enabled: !loading,
    // queryFn: async () => {
    //     const res = await axiosSecure(`http://localhost:5000/class?email=${user?.email}`, { headers: {
    //         authorization: `bearer ${token}`
    //     }})
    //     return res.json();
    // },
    queryFn: async () => {
      const res = await axiosSecure(`/class?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [Myclass, refetch];
};
export default useSecure;
