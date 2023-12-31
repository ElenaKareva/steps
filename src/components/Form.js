import PropTypes from "prop-types";

export default function Form(props) {
  const { form, onFormChange, onFormSubmit } = props;

  return (
    <form className="workout-form" onSubmit={onFormSubmit}>
      <section className="workout-section">
        <label htmlFor="date">дата(дд.мм.гг)</label>
        <input
          id="date"
          type="date"
          name="date"
          className="workout-input"
          value={form.date}
          onChange={onFormChange}
        />
      </section>

      <section className="workout-section">
        <label htmlFor="path">пройдено, км</label>
        <input
          id="path"
          type="text"
          name="path"
          className="workout-input"
          value={form.path}
          onChange={onFormChange}
        />
      </section>

      <button>оk</button>
    </form>
  );
}

Form.propTypes = {
  form: PropTypes.object,
};