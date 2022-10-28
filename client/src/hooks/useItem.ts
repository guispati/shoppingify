import { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";

export const useItem = () => {
  	return useContext(ItemContext);
};