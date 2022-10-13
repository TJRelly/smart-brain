const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className="center pa4 shadow-5 ma">
            <div className="avsolute mt2">
                <img
                    alt=""
                    src={imageUrl}
                    width="500px"
                    height="auto"
                    id="inputimage"
                />
            </div>
        </div>
    )
}

export default FaceRecognition;