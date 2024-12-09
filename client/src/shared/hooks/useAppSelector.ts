import { RootState } from "@store/index";
import { useSelector } from "react-redux";

export const useAppSelector = useSelector.withTypes<RootState>();
