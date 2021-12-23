export const Buttons = (props) => {
  return (
    <>
      {props.btn.map((item, index) => (
        <button className="btn-pag" key={index} onClick={props.pageTarget}>
          {`${index+1}`}
        </button>
      ))}
    </>
  );
};
