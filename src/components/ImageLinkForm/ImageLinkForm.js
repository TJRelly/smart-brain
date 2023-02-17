import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onSubmit }) => {

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit()
    };

    return (
        <form onSubmit={onFormSubmit} id="image-link-form" className='z-10'>
            <p className="f4 mt-6 text-white">
                {"This Magic Brain will detect faces in your pictures. Give it a try!"}
            </p>
            <div id="search-div" className="sm:w-full md:w-3/5  m-auto shadow-xl p-4">
                <div className="m-2 flex justify-center" autoComplete="off">
                    {/* Search Field */}
                    <input
                        id='search-field'
                        type="text"
                        placeholder="Copy image address here..."
                        className='p-2 mr-1 text-gray-600 w-3/4'
                        onChange={onInputChange}
                    />
                    {/* Detect Button */}
                    <button
                        type="submit"
                        className="
                        button
                        white
                        pointer
                        p-2
                        m-auto
                        w-1/4
                        bg-blue-400
                        hover:text-white
                        transform
                        hover:scale-110
                        hover:translate-x-2
                        active:scale-100
                        active:border-0
                        transition
                        duration-10
                    ">
                        Detect
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ImageLinkForm;