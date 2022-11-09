import { useContext } from "react";
import { HistoryContext } from "../contexts/HistoryContext";

export const useHistory = () => {
  	return useContext(HistoryContext);
};