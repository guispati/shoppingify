import { useContext } from "react";
import { PurchaseListContext } from "../contexts/PurchaseListContext";

export const usePurchaseList = () => {
  	return useContext(PurchaseListContext);
};