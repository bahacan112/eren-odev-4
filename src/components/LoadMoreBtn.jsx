const LoadMoreBtn = (props) =>
{
  const loadMore = () =>
  {
    props.setPage(props.page + 1)
  }

  return(<>
      <div className="container mx-auto text-center py-4">
        <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300" onClick={loadMore}>
        Load More
        </button>
      </div>
    </>
  )
}

export default LoadMoreBtn