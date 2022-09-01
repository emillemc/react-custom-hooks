import { useState } from "react";
import Faq from "../../api/faq";
import { AllFaqsProps } from "../../dto/faq";

export const useFaqs = () => {
  const [loading, setLoading] = useState(false);
  const [allFaqs, setAllFaqs] = useState<AllFaqsProps[]>([]);
  const [faq, setFaq] = useState({} as AllFaqsProps);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getAllFaqs = async (params?: any): Promise<any> => {
    setLoading(true);
    try {
      setError(false)
      const response = await Faq.getAll(params);

      const faqsReponse = response.data.data;
      setAllFaqs(faqsReponse);

      return faqsReponse;
    } catch (error){
      setError(true)
      setErrorMessage(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const getFaq = async (id: string) => {
    setLoading(true);
    try {
      const response = await Faq.get(id);

      const faqsReponse = response.data.data;
      setFaq(faqsReponse);

      return faqsReponse;
    } finally {
      setLoading(false);
    }
  };

  const createFaq = async (params: any) => {
    setLoading(true);
    try {
      const response = await Faq.create(params);

      const faqsReponse = response.data.data;
      setFaq(response.data.data);
      setError(response.data.message);

      return faqsReponse;
    } finally {
      setLoading(false);
    }
  };

  const updateFaq = async (id: string, params: any) => {
    setLoading(true);
    try {
      const response = await Faq.update(id, params);

      const faqsReponse = response.data.data;
      setFaq(response.data.data);

      return faqsReponse;
    } finally {
      setLoading(false);
    }
  };

  return {
    getAllFaqs,
    loading,
    allFaqs,
    getFaq,
    faq,
    updateFaq,
    createFaq,
    error,
    errorMessage
  };
};
