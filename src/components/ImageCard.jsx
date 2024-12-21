const ImageCard = (props) =>
{
    const selectPhoto = (photoId) =>
    {
        props.setPhotoView(photoId)
    }

    return (
        <>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105">
                <img src={ props.img } alt={props.name} className="w-full h-48 object-cover" onClick={() => selectPhoto(props.id)}/>
            </div>
        </>
    )
}

export default ImageCard