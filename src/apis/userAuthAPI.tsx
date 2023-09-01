import axios from "axios";

const URL: string = `http://localhost:4500/api/user`;

export const userRegister = async (data: any) => {
  try {
    const configurePics: any = {
      "content-type": "multipart/formdata",
    };
    return await axios
      .post(`${URL}/register`, data, configurePics)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const userSignin = async (data: any) => {
  try {
    return await axios.post(`${URL}/sign-in`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const readUser = async () => {
  try {
    return await axios.get(`${URL}/view`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const readOneUser = async (id: string) => {
  try {
    return await axios.get(`${URL}/${id}/view-one-user`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserByNameAPI = async (name: string) => {
  try {
    return await axios.get(`${URL}/${name}/get-by-name`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
