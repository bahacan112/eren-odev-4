const ImageModal = (props) =>
{
    const closeView = () =>
    {
        props.setPhotoView(null)
    }
    

    return (
        <>
            <div id="imageModal" className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                <button 
                id="closeModal" 
                className="absolute top-4 left-4 text-white text-2xl font-bold bg-transparent hover:text-gray-400 focus:outline-none"
                onClick={closeView}
                >
                ✕
                </button>
                <img id="modalImage" src={props.img.urls.full} alt="Full Size" className="w-[90vw] h-[90vh] object-contain rounded-lg shadow-lg" />
            </div>        
        </>
    )
}

export default ImageModal