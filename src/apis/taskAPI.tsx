import axios from "axios";
import { useSelector } from "react-redux";

const URL: string = "http://localhost:4500/api/task";

export const createTask = async (adminID: string, name: string, data: any) => {
  try {
    return await axios
      .post(`${URL}/${adminID}/${name}/create-task`, data)
      .then((res: any) => {
        console.log("error creating:", res.data.data);
        return res.data.data;
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log("error creating:", error);
  }
};

export const viewOneTask = async (id: string) => {
  try {
    return await axios.get(`${URL}/${id}/view-task`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const viewOneAdminTask = async () => {
  try {
    const adminID = useSelector((state: any) => state.admin);
    return await axios.get(`${URL}/${adminID}/view-task`).then((res: any) => {
      console.log(res.data.data);
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const viewTask = async () => {
  try {
    return await axios.get(`${URL}/view-task`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const toProgressAPI = async (userID: string, taskID: string) => {
  try {
    return await axios
      .post(`${URL}/${userID}/${taskID}/to-progress`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (taskID: string) => {
  try {
    return await axios
      .delete(`${URL}/${taskID}/delete-task`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const readProgressAPI = async () => {
  try {
    return await axios.get(`${URL}/read-progress`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
