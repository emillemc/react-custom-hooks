import { Link } from "react-router-dom";
import { AllFaqsProps } from "../../../../dto/faq";

interface CardProps {
  faq: AllFaqsProps
}


const Table = (props: CardProps) => {
  const { faq } = props;
  const PATH = "/faq/:id"


  return (
    <div key={faq.uuid}>
      <h3>{faq.question}</h3>
      <p>{faq.answer}</p>
      <p>{faq.category}</p>
      <p>{faq.active ? "active" : "inactive"}</p>
      <Link to={PATH.replace(":id", faq.uuid)}>Editar</Link>
    </div>
  );
};

export default Table;
