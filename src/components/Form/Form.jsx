import { useState } from 'react';
import css from '../Form/Form.module.css';

const Form = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmitForm = evt => {
    evt.preventDefault();

    setSearchParams({ query });
  };

  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <form className={css.form} onSubmit={handleSubmitForm}>
      <input className={css.formInput}
        type="text"
        placeholder="Name movie"
        autoFocus
        value={query}
        onChange={handleSearchParams}
      />
      <button className={css.searchButton} type="submit" disabled={!query}>
        Search
      </button>
    </form>
  );
};

export default Form;
