

const OneSection = () => {
    return (
        <div className="mt-20">
            <div className="font-sans bg-white text-[#ffff] py-12 px-4 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">
  <div className="max-w-7xl max-md:max-w-md mx-auto max-md:text-center">
    <h2 className="lg:text-5xl md:text-5xl text-3xl font-extrabold lg:!leading-[64px] md:max-w-4xl">Charming Cottage with Garden in Quiet Neighborhood</h2>
    <div className="grid md:grid-cols-2 gap-12 mt-8">
      <div>
        <p className="text-base leading-relaxed"> The cottage features a welcoming living room with large windows that fill the space with natural light, creating a warm and inviting atmosphere.</p>
        <div className="mt-12">
          <button type="button" className="bg-[#a8181f] hover:bg-green-400 transition-all text-[#ffff] font-bold text-sm rounded-full px-5 py-3">Getting Started</button>
          <a  className="text-sm font-bold underline sm:ml-6 max-sm:mt-4 max-sm:block whitespace-nowrap">API Documentation</a>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
          <img src="https://readymadeui.com/google-logo.svg" className="w-28 mx-auto" alt="google-logo" />
          <img src="https://readymadeui.com/facebook-logo.svg" className="w-28 mx-auto" alt="facebook-logo" />
          <img src="https://readymadeui.com/linkedin-logo.svg" className="w-28 mx-auto" alt="linkedin-logo" />
          <img src="https://readymadeui.com/pinterest-logo.svg" className="w-28 mx-auto" alt="pinterest-logo" />
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/zNLDdhb/pexels-followingnyc-16655113.jpg" className="shrink-0 w-full h-full rounded-md object-contain" alt="Readymade UI Banner" />
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default OneSection;