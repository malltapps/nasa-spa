import { createStore } from "hooksy";

interface IState {
  searchValue: string;
  loading: boolean;
  typeMedia: string;
  result: any;
  modal: boolean;
  modalContent: {
    title: string;
    nasa_id: string;
    media_type: string;
  };
}

const defaultState: IState = {
  searchValue: "",
  loading: false,
  typeMedia: "image",
  result: [],
  modal: false,
  modalContent: {
    title: "",
    nasa_id: "",
    media_type: "",
  },
};

export const [useDefaultStore] = createStore(defaultState);
