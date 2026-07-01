import { useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
  useGSAP(()=>{
    if(hasClicked){
      gsap.set('#next-video',{visibility:'visible'})
      gsap.to('#next-video',{
        transformOrigin: 'center center',
        scale:1,
        width: "100%",
        height:'100%',
        duration:1,
        ease:"power1.inOut",
        onStart:()=>nextVideoRef.current.play()
      })
      gsap.from('#current-video',{
        transformOrigin:"center center",
        duration:1.5,
        scale:0.5,
        ease:"power1.inOut"
      })
    }

  },{dependencies:[currentIdx],revertOnUpdate:true})
  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div
        id='video-frame'
        className='h-dvh relative z-10 w-screen overflow-x-hidden bg-blue-75 rounded-lg'>
        <div>
          <div className='mask-clip-content absolute-center size-48 cursor-pointer absolute z-50 overflow-hidden rounded-lg'>
            <div
              onClick={handleminivdClick}
              className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
              <video
                loop
                muted
                ref={nextVideoRef}
                src={getvideoSrc(upcomingIdx)}
                id='current-video'
                className='origin-center size-48 object-cover scale-150 object-center '
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
            className='size-48 absolute-center absolute z-20 object-cover object-center invisible '
            onLoadedData={handleLoadingVideo}
          />
          <video
            src={getvideoSrc(currentIdx === totalvideo - 1 ? 1 : currentIdx)}
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
            <p className='mb-5 max-w-48 text-sm font-robert-regular text-blue-100'>
              Enter the Metagame layer <br />
              Unleash the Play Economy
            </p>
            <Button
              title={"watch trailer"}
              id={"watch-trailer"}
              leftIcon={<TiLocationArrow />}
              containerClass={"bg-yellow-300 flex-center gap-1"}
            />
          </div>
        </div>
      </div>
      <h1 className='absolute  bottom-5 right-5 text-black special-font hero-heading'>
        G<b>a</b>ming
      </h1>
    </div>
  );
}

export default Hero;
