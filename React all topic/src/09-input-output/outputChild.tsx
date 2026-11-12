type ChildProps={
    sendData:(message:string)=>void;

};
function Child({sendData}:ChildProps){
    return(
        <button onClick={()=>sendData("hello parent")}>
            send data
        </button>
    );
}
export default Child;

