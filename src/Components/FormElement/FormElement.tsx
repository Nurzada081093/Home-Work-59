import './FormElement.css';

const FormElement = () => {
  return (
    <form className="form">
      <div className="input-element">
        <label htmlFor="name"></label>
        <input
          type="text"
          // value={name}
          id="name"
          name="name"
          // onChange={onChange}
          required/>
      </div>
      <div className="button-element">
        <button
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default FormElement;