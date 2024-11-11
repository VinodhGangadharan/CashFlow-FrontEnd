import instance from "./instance";

const userServices = {
    updateUser: async (data) => {
        return await instance.put('/userprofile', data);
    }
 
}

export default userServices;