import { Link } from "react-router-dom";
import "../form/form.css";

interface ISuccessBlockProps {
  title: string;
  description: string;
  linkTo: string;
  linkText: string
}

function SuccessBlock(props: ISuccessBlockProps) {
  const { title, description, linkTo, linkText } = props;

  return (
    <div>
      <section className="form">
        <h1>{title}</h1>
        <p>{description}</p>
        <p className="link">
          <Link to={linkTo}>{linkText}</Link>
        </p>
      </section>
    </div>
  );
}

export default SuccessBlock;
