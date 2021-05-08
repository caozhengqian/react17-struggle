import { homeData } from "./data.js";

const fetchOk = true; // 所有接口正确返回？
// const timeOut = 2000; // 所有接口延迟时间
// 专业市场更新POST /markOperate/updateMarkActivities
export function home(time) {
  return testData(homeData, time);
}

function testData(data, time) {
  return new Promise((resolve, reject) => {
    try {
      if (fetchOk) {
        setTimeout(() => {
          resolve({ status: 200, data: data });
        }, time);
      } else {
        setTimeout(() => {
          resolve({ code: "503", msg: "失败！" });
        }, time);
      }
    } catch (error) {
      reject(error);
    }
  });
}
