let score = 0;
let wicket = 0;
let ballWise = [];
let hit = 0;
let inputRef = React.createRef();

function addScore(num) {

    rootElement.render(<App />)

    hit = num;
}
function addWicket(num) {

    rootElement.render(<App />)

    hit = "W";
}
function wide(num) {

    rootElement.render(<App />)

    hit = "WD";
}

function noBall(num) {

    rootElement.render(<App />)

    hit = "N";
}

function handleSubmit(event) {
    event.preventDefault()

    if (wicket < 10) {
        if (hit == "W") {
            wicket += 1;
        }
        else if(hit == "WD")
        {
            score+=1;
        }
        else if(hit == "N")
        {
            score+=1;
        }
        else {
            score += hit;
        }
        ballWise.unshift(
        // <span>{hit}{"---"}{inputRef.current.value}</span>
        <span>{`${hit}--- ${inputRef.current.value}`}</span>
        )
        inputRef.current.value="";
        hit=0;
    }
    if (wicket === 10) {
        alert("all out")
    }



    rootElement.render(<App />)

}

const Form = () => (
    <>
        <form onSubmit={handleSubmit}>
            <input value={hit} placeholder="score" />
            <input placeholder="comments" ref={inputRef} />
            <button>submit</button>
            <hr />

        </form>
    </>
)

const ScoreButtons = () => (
    <div>
        <button onClick={() => addScore(0)}>0</button>
        <button onClick={() => addScore(1)}>1</button>
        <button onClick={() => addScore(2)}>2</button>
        <button onClick={() => addScore(3)}>3</button>
        <button onClick={() => addScore(4)}>4</button>
        <button onClick={() => addScore(5)}>5</button>
        <button onClick={() => addScore(6)}>6</button>
        <button onClick={() => wide(1)}>WD</button>
        <button onClick={() => noBall(1)}>N</button>
        <button onClick={() => addWicket(1)}>wicket</button>
    </div>
)

const Result = () => (
    <div>
        {ballWise.map((res, index) => (
            <>
                {index % 6 === 0 ? <br /> : null}
                <span key={index}>{res === 0 ? <b>_</b> : res}</span>&nbsp;&nbsp;&nbsp;</>))}
    </div>
)

const App = () => (
    <>
        <h1>SCORE KEEPER</h1>
        <h2>SCORE: {score}/{wicket}</h2>
        <ScoreButtons />
        <br />
        {/* <Result /> */}
        <Form />
        {ballWise.map((res, index) => (<p key={index}>{res}</p>))}


    </>
)

const rootElement = ReactDOM.createRoot(document.getElementById("root"))
rootElement.render(<App />)
