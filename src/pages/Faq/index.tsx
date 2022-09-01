import { useEffect } from "react";
import Table from "./components/table";
import Search from "./components/search";
import { AllFaqsProps } from "../../dto/faq";
import { useFaqs } from "../../hooks/faq/useFaqs";
import Form from "./components/form";

const Faq = () => {
  const { getAllFaqs, allFaqs, createFaq, error, errorMessage } = useFaqs();

  useEffect(() => {
    handleListAll();
  }, []);

  const handleListAll = async (filter?: object) => {
    await getAllFaqs({
      ...filter,
    });
  };

  const handleSearch = (filter?: object) => {
    handleListAll(filter);
  };

  const onFinish = async (form: AllFaqsProps, e: any) => {
    e.target.reset();
    await createFaq(form);
    getAllFaqs();
  };

  return (
    <>
      <h1>Criando</h1>
      <Form onFinish={onFinish} />

      <Search handleSearch={handleSearch} />

      <h1>Listando as Perguntas Frequentes</h1>

      {error
        ? errorMessage
        : allFaqs.map((item: AllFaqsProps) => <Table faq={item} />)}
    </>
  );
};

export default Faq;
