import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { AllFaqsProps } from "../../dto/faq";
import { useFaqs } from "../../hooks/faq/useFaqs";

const ManageFaq = () => {
  const { id } = useParams<string>();
  const { faq, getFaq, updateFaq } = useFaqs();

  const { register, handleSubmit, reset } = useForm<AllFaqsProps>();

  useEffect(() => {
    if (id) {
      getFaq(id);
    }
  }, []);

  useEffect(() => {
    const defaultValues = {
      question: faq?.question,
      answer: faq?.answer,
      active: faq?.active,
      category_id: faq?.category_id,
    };
    reset(defaultValues);
  }, [reset]);

  const onFinish = async (data: any) => {
    if (id) {
      await updateFaq(id, data);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onFinish)}>
        <input id="question" {...register("question")} name="question" />
        <input id="answer" {...register("answer")} name="answer" />
        <select id="active" {...register("active")} name="active">
          <option value="">Selecione</option>
          <option value="1">Ativo</option>
          <option value="2">Inativo</option>
        </select>
        <select
          id="category_id"
          {...register("category_id")}
          name="category_id"
        >
          <option value="">Selecione</option>
          <option value="1">Categoria 1</option>
          <option value="2">Categoria 2</option>
        </select>
        <button type="submit">Atualizar</button>
      </form>
    </>
  );
};

export default ManageFaq;
