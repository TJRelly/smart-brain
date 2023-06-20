const Rank = ({name, entries}) => {
    return (
        <div>
            <div className="white f3 w-fit m-auto backdrop-blur-sm">
                {`Hello ${name}, your current entry count is:`}
            </div>
            <div className="white f1 w-fit m-auto backdrop-blur-sm">
                {entries}
            </div>
        </div>
    )
}

export default Rank;