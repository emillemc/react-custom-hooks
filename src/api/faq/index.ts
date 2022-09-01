import api from "../../services/api";

const uriFaq = "v1/perguntas";

const Faq = {
    getAll(params?: object) {
      return api.get(
        `${uriFaq}`,
        { params },
      );
    }, 

    get(id: string) {
      return api.get(
        `${uriFaq}/${id}`
      );
    },

    update(id: string, params: any) {
      return api.put(
        `${uriFaq}/${id}`,
        params,
      );
    },

    create(params: any) {
      return api.post(
        `${uriFaq}`,
        params,
      );
    },
}

export default Faq;