import { Link } from "react-router-dom";

const CTA = ({message}) => {
  return (
    <section className='cta'>
        {message}
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;