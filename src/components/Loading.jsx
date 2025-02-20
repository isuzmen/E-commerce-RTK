import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";

const Loading = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);

  return (
    <Backdrop sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })} open={isLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
