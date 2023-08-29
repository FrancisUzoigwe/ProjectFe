import axios from "axios";

const URL: string = "http://localhost:4500/api/admin";

export const adminRegister = async (data: any) => {
  try {
    const configurePicture: any = {
      "content-type": "multipart/formdata",
    };
    return await axios
      .post(`${URL}/register`, data, configurePicture)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const adminSignin = async (data: any) => {
  try {
    return await axios.post(`${URL}/sign-in`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const adminRead = async () => {
  try {
    return await axios.get(`${URL}/view`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
