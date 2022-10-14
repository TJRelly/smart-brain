import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
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
                <div
                    className="bounding-box"
                    style={{
                        top: box.topRow,
                        right: box.rightCol,
                        bottom: box.bottomRow,
                        left: box.leftCol,
                    }}
                >
                </div>
            </div>
        </div>
    )
}

export default FaceRecognition;