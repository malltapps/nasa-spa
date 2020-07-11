import React, { /*useRef,*/ ChangeEvent, MouseEvent } from "react";
import { Form, Button } from "semantic-ui-react";
import { useDefaultStore } from "./../../store/";
import api from "./../../services/api";

const Search: React.FC = () => {
  const [state, setState] = useDefaultStore();
  const { searchValue, typeMedia } = state;
  //const inputEl = useRef<HTMLInputElement>(null);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setState({ ...state, searchValue: value });
  }

  function handleCheck(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    if (!searchValue) return;
    setState({ ...state, typeMedia: value });
  }

  async function handleSubmit(event: MouseEvent) {
    event.preventDefault();

    if (!searchValue) return;
    try {
      setState({
        ...state,
        loading: true,
        result: [],
      });

      const response = await api.get(
        `search?q=${searchValue}&media_type=${typeMedia}`
      );

      const { items } = response.data.collection;

      setState({
        ...state,
        result: items,
      });
      setState({
        ...state,
        loading: false,
        result: items,
      });
    } catch (error) {
      console.error(error);
      setState({ ...state, loading: false });
    }
  }
  return (
    <>
      <Form>
        <Form.Field>
          <input
            type="search"
            name="search"
            id="form-search"
            value={searchValue}
            /*ref={inputEl}*/
            placeholder="encontre o que procura.."
            onChange={handleInputChange}
          />
        </Form.Field>

        <input
          type="radio"
          id="image"
          value="image"
          name="radio-group"
          onChange={handleCheck}
          defaultChecked
        />
        <label htmlFor="image">Imagem</label>

        <input
          type="radio"
          id="video"
          value="video"
          name="radio-group"
          onChange={handleCheck}
        />
        <label htmlFor="video">Video</label>
        <Button
          type="submit"
          floated="right"
          color="teal"
          onClick={handleSubmit}
          inverted
          animated
        >
          <Button.Content hidden>Encontre Agora!</Button.Content>
          <Button.Content visible>Encontre Agora</Button.Content>
        </Button>
      </Form>
    </>
  );
};

export default Search;
