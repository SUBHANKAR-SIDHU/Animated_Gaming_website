import { useRef, useState } from "react";

function Hero() {
  const [currentIdx, setCurrentIdx] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideo, setLoadedVideo] = useState(0);
  const nextVideoRef = useRef(null);
  const totalvideo = 3;
  const upcomingIdx = (currentIdx % totalvideo) + 1;
  const handleLoadingVideo = () => {
    setLoadedVideo((prev) => prev + 1);
  };
  const handleminivdClick = () => {
    setHasClicked(true);
    setCurrentIdx(upcomingIdx);
  };
  const getvideoSrc = (index) => `videos/hero-${index}.mp4`;
  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div
        id='video-frame'
        className='h-dvh relative z-10 w-screen overflow-x-hidden bg-blue-75 rounded-lg'>
        <div>
          <div className='mask-clip-content absolute-center size-64 cursor-pointer absolute z-50 overflow-hidden rounded-lg'>
            <div
              onClick={handleminivdClick}
              className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
              <video
                loop
                muted
                ref={nextVideoRef}
                src={getvideoSrc(upcomingIdx)}
                id='current-video'
                className='origin-center size-64 object-cover scale-150 object-center '
                onLoadedData={handleLoadingVideo}
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getvideoSrc(currentIdx)}
            loop
            muted
            id='next-video'
            className='size-64 absolute-center absolute z-20 object-cover object-center invisible '
            onLoadedData={handleLoadingVideo}
          />
          <video
            src={getvideoSrc(currentIdx === totalvideo - 2 ? 1 : currentIdx)}
            loop
            autoPlay
            muted
            className='absolute left-0 top-0 size-full object-cover object-center'
            onLoadedData={handleLoadingVideo}
          />
        </div>
        <h1 className='absolute z-40 bottom-5 right-5 text-blue-75 special-font hero-heading'>
          G<b>a</b>ming
        </h1>
        <div className='absolute top-0 left-0 z-40 size-full'>
          <div className='mt-5 px-5 sm:px-10'>
            <h1 className=' text-blue-100 special-font hero-heading'>
              redefi<b>n</b>
              <b>e</b>
            </h1>
            <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>
              Enter the Metagame layer <br />
              Unleash the Play Economy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
