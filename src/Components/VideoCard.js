const VideoCard = ({ items, index }) => {
  const { snippet, statistics } = items;
  const IST = new Date();

  return (
    <div className=" h-[315px] w-[340px] rounded-2xl  transition-all duration-500 m-2 cursor-pointer ">
      <img
        src={snippet.thumbnails.medium.url}
        alt="thumbnails"
        className=" rounded-2xl  hover:rounded-none hover:scale-[100.3%] transition-all duration-500 ease-in-out w-full object-cover "
      />

      <div className="m-2">
        {/* <div>
          <img
            src={
              "https://xsgames.co/randomusers/assets/avatars/female/" +
              index +
              ".jpg"
            }
            alt="profile"
            className="h-10 w-10 mr-5 rounded-full"
          />
        </div> */}
        <div>
          <p className="font-medium line-clamp-2 text-base">{snippet.title}</p>
          <div className="flex">
            <p className="font-normal text-gray-600  text-sm">
              {snippet.channelTitle}
            </p>

            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              className="h-[15px] w-[15px] mt-[5px] ml-[4px] fill-gray-600"
            >
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path>
            </svg>
          </div>
          {parseInt(statistics.viewCount / 1000000) === 0 ? (
            <p className="font-normal text-gray-600 text-sm">
              {parseInt(statistics.viewCount / 1000)}K views
            </p>
          ) : (
            <p className="font-normal text-gray-600 text-sm">
              {parseInt(statistics.viewCount / 1000000)}M views{" "}
            </p>
          )}
          {!(IST.getFullYear() - parseInt(snippet.publishedAt)) == 0 ? (
            <p className="font-normal text-gray-600 text-sm">
              {IST.getFullYear() - parseInt(snippet.publishedAt)} Years Ago
            </p>
          ) : !(IST.getMonth() + 1) - parseInt(snippet.publishedAt[5] + [6]) ==
            0 ? (
            <p className="font-normal text-gray-600 text-sm">
              {IST.getMonth() + 1 - parseInt(snippet.publishedAt[5] + [6])}
              Months ago
            </p>
          ) : (
            <p className="font-normal text-gray-600 text-sm">
              {IST.getDate() - parseInt(snippet.publishedAt[8] + [9])} Days ago
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
