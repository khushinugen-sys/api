const App = () => {
  const getData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          getData;
        }}
      >
        Click me
      </button> 
    </div>
  );
};
export default App;
