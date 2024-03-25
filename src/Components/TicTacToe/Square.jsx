const Square = ({value,onPlay}) => {
    return (
        <div className="square">
           <button onClick={onPlay} className="btn"> {value ? value : null} </button>
        </div>
    )
}
export default Square