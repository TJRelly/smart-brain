const Rank = ({name, entries}) => {
    return (
        <div>
            <div className="white f3">
                {`Hello ${name}, your total number image uploads is...`}
            </div>
            <div className="white f1">
                {entries}
            </div>
        </div>
    )
}

export default Rank;