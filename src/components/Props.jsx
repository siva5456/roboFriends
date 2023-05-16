const Props = ({ Name, age, content }) => {
  return (
    <div>
      <div style={{ border: "solid 2px white" }}>
        <h1>{Name}</h1>
        <h3>{age}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Props;
