import Vue from "vue";
import VueResource from "vue-resource";
import nprogress from "nprogress";

Vue.use(VueResource);

Vue.http.interceptors.push((request, next) => {
  nprogress.start();
  next(() => {
    nprogress.done();
  });
});

export const getAllUniversities = async () => {
  return new Promise((resolve, reject) => {
    Vue.http.get("http://universities.hipolabs.com/search").then(
      (res) => resolve(res),
      (err) => reject(err)
    );
  });
};

export const searchUniversity = async (name) => {
  return new Promise((resolve, reject) => {
    const requestUrl = `http://universities.hipolabs.com/search?name=${name}`;

    Vue.http.get(requestUrl).then(
      (res) => resolve(res),
      (err) => reject(err)
    );
  });
};
