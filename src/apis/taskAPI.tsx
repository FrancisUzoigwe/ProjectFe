import axios from "axios";

const URL: string = "http://localhost:4500/api/task";

export const createTask = async (data: any) => {
  try {
    return await axios.post(`${URL}/create-task`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
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

export const viewTask = async () => {
  try {
    return await axios.get(`${URL}/view-task`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
