import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, boxes }) => {
    return (
        <div className="center pa4 ma">
            <div className="absolute mt2 shadow-5">
                <img
                    alt=""
                    src={imageUrl}
                    width="500px"
                    height="auto"
                    id="inputimage"
                />
                {boxes.map((box, i) => {
                    return (
                        <div
                            key={i}
                            className="bounding-box"
                            style={{
                                top: box.topRow,
                                right: box.rightCol,
                                bottom: box.bottomRow,
                                left: box.leftCol,
                            }}
                        >
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default FaceRecognition;