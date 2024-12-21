import ClipLoader from "react-spinners/ClipLoader";

function Loader() {
  return (
    <div>
      <ClipLoader
        color={true}
        loading={"#323233"}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
