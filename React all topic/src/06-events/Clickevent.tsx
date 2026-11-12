function ClickEvent() {

    function handleClick() {
      alert("Button clicked!");
    }
  
    return (
      <div>
        <h2>Click Event</h2>
  
        <button onClick={handleClick}>
          Click Me
        </button>
      </div>
    );
  }
  
  export default ClickEvent;

  