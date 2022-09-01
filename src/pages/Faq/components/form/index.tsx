import { useForm } from "react-hook-form";

interface FormProps {
  onFinish: (data: any, e: any) => void;
}
const Form = (props: FormProps) => {
  const { onFinish } = props;
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onFinish)}>
      <input id="question" {...register("question")} name="question" />
      <input id="answer" {...register("answer")} name="answer" />
      <select id="active" {...register("active")} name="active">
        <option value="">Selecione</option>
        <option value="1">Ativo</option>
        <option value="0">Inativo</option>
      </select>
      <select id="category_id" {...register("category_id")} name="category_id">
        <option value="">Selecione</option> d
        <option value="1">Categoria 1</option>
        <option value="2">Categoria 2</option>
      </select>
      <button type="submit">Atualizar</button>
    </form>
  );
};

export default Form;
