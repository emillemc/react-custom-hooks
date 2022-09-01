import { useForm } from "react-hook-form";

interface SearchProps {
  handleSearch: (filter?: object) => void;
}
const Search = (props: SearchProps) => {
  const { handleSearch } = props;
  const { register, handleSubmit } = useForm();
  return (
    <>
      <h1>Buscando</h1>

      <form onSubmit={handleSubmit(handleSearch)}>
        <input id="question" {...register("question")} name="question" />
        <button type="submit">Buscar</button>
      </form>
    </>
  );
};

export default Search;
