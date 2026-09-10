
export function ProductCardComponet(){
    return(
        <>
<section>
<>
  {/* Hero Section */}
  <div className=" flex-1">
    <div className=" h-full bg-[url('https://drinkprime.com/cdn/shop/files/STL_Web_CollectionBanner_Desktop_4320x1554_b473210a-9707-4748-83a9-f3ee934b72df_1600x.jpg?v=1774366903')] bg-cover bg-center bg-no-repeat flex items-center text-white pl-[137px]">
      <div className="flex flex-col">
        <div className="text-[56px] font-medium mb-4">
          Be on Prime 
        </div>
        <p className="w-[397px] mb-[40px]">
          “A gentleman knows his appearance is very important that shows his
          characteristic.” - Unknown
        </p>
        <div className="flex gap-[16px]">
          <a href="https://youtu.be/9tdewlwamFw?si=hSfImLajCynDL-2r">
            {" "}
            <button className="rounded-[4px] p-[12px] bg-yellow-500 font-medium text-black">
              Shop Now
            </button>
          </a>
          <button className="rounded-[4px] p-[12px] border-2 border- text-white font-medium">
            New Items
          </button>
        </div>
      </div>
    </div>
    <div className="mt-4"></div>
  </div>
</>


{/* first section of card product */}
<section className="max-w-6xl mx-auto px-6 py-16">
    <h1 className="text-4xl text-gray-900 text-center font-bold">#MONSTERULTRA</h1>
  <h2 className="text-center text-xl text-gray-900 mb-10">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti pariatur doloribus fugiat maxime laudantium praesentium ex cupiditate totam cum nemo minima velit, a dolores? Modi omnis quod incidunt dolor facere.
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Card 1: Burn Blue */}
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
      {/* <div
        className="relative w-24 h-40 mb-6 rounded-md overflow-hidden shadow-inner"
        style={{
          background:
            "linear-gradient(180deg, #0a0f1c 0%, #0a0f1c 60%, #000 100%)"
        }}
      >
        <svg viewBox="0 0 100 160" className="absolute inset-0 w-full h-full">
          <path
            d="M50 25 C40 45, 62 55, 50 75 C42 88, 55 95, 50 110 C60 100, 68 85, 60 65 C72 75, 70 50, 50 25 Z"
            fill="url(#blueFlame)"
          />
          <defs>
            <linearGradient id="blueFlame" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#eaf6ff" />
              <stop offset="45%" stopColor="#5ec8f2" />
              <stop offset="100%" stopColor="#1662c4" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute bottom-9 left-0 right-0 text-center">
          <p className="text-white font-extrabold italic text-[11px] tracking-wide leading-none">
            BURN<span className="align-super text-[6px]">®</span>
          </p>
          <p className="text-gray-300 text-[6px] tracking-widest mt-0.5">
            ENERGY DRINK
          </p>
        </div>
        <div className="absolute bottom-3 left-0 right-0 text-center">
          <p className="text-blue-300 text-[6px] font-semibold tracking-widest">
            ZERO
          </p>
        </div>
      </div> */}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzqn9SSX_w1y29SXI4lmj7y4fqjGH60xLK9qNF9pg1roi93hhDcBdEuScg&s=10" alt="" />
      <h3 className="text-blue-500 font-semibold text-lg mb-2">Burn Blue</h3>
      <p className="text-gray-500 text-lg leading-relaxed mb-5">
        Completely unstyled, fully accessible UI components, designed to
        integrate beautifully with Tailwind CSS.
      </p>
      <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium px-5 py-2 rounded-full transition-colors">
        Learn More
      </button>
    </div>
    {/* Card 2: prime-green */}
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
    <img src="https://gmfgcdn.azureedge.net/gmfgcdn-41100db7-5d96-426e-a77b-dbba44febaba/0007084790017_00.jpg?width=500" alt="" />
      <h3 className="text-green-500 font-semibold text-lg mb-2">Monster Blue</h3>
      <p className="text-gray-500 text-lg leading-relaxed mb-5">
        Completely unstyled, fully accessible UI components, designed to
        integrate beautifully with Tailwind CSS.
      </p>
      <button className="mt-auto bg-green-500 hover:bg-green-600 text-white text-lg font-medium px-5 py-2 rounded-full transition-colors">
        Learn More
      </button>
    </div>
    {/* Card 3: Burn Purple */}
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
     <img src="https://images.heb.com/is/image/HEBGrocery/003649001-1" alt="" />
      <h3 className="text-purple-500 font-semibold text-lg mb-2">
        Monster Pink
      </h3>
      <p className="text-gray-500 text-lg leading-relaxed mb-5">
        Completely unstyled, fully accessible UI components, designed to
        integrate beautifully with Tailwind CSS.
      </p>
      <button className="mt-auto bg-purple-500 hover:bg-purple-600 text-white text-lg font-medium px-5 py-2 rounded-full transition-colors">
        Learn More
      </button>
    </div>
    {/* Card 4: Burn Red */}
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptX3GYybWTIGtuBoglHnDaL4rp49XXWb26RNTz5aZ6iNZCoXyo9__6I0&s=10" alt="" />
      <h3 className="text-red-500 font-semibold text-lg mb-2">Monster White</h3>
      <p className="text-gray-500 text-lg leading-relaxed mb-5">
        Completely unstyled, fully accessible UI components, designed to
        integrate beautifully with Tailwind CSS.
      </p>
      <button className="mt-auto bg-red-500 hover:bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-full transition-colors">
        Learn More
      </button>
    </div>
    {/* Card 5: Burn Purple (Lemon Ice) */}
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
      <img src="https://fladis.azureedge.net/erp/780b2e2b-a1f2-4e6b-8ab6-07e37888d663.png" alt="" />
      <h3 className="text-amber-500 font-semibold text-lg mb-2">Monster Black</h3>
      <p className="text-gray-500 text-lg leading-relaxed mb-5">
        Completely unstyled, fully accessible UI components, designed to
        integrate beautifully with Tailwind CSS.
      </p>
      <button className="mt-auto bg-amber-500 hover:bg-amber-600 text-white text-lg font-medium px-5 py-2 rounded-full transition-colors">
        Learn More
      </button>
    </div>
  </div>
</section>

{/* the second section of card product */}
<section className="max-w-6xl mx-auto px-6 py-16">
  {/* Logo */}
  <div className="flex justify-center mb-16">
         <img className="w-42 h-30" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/1372d91b-853e-45d2-b8c3-182fd2699b7e.__CR0,0,600,450_PT0_SX600_V1___.png" alt="" />
  </div>
  {/* Stats row */}
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mb-20">
    <div>
      <p className="text-gray-800 text-lg">
        200<sup className="text-lg">mg</sup>
      </p>
      <p className="text-gray-900 text-2xl font-extrabold tracking-tight">
        CAFFEINE
      </p>
    </div>
    <div>
      <p className="text-gray-800 text-lg">ZERO</p>
      <p className="text-gray-900 text-2xl font-extrabold tracking-tight">
        SUGAR
      </p>
    </div>
    <div>
      <p className="text-gray-800 text-lg">
        300<sup className="text-lg">mg</sup>
      </p>
      <p className="text-gray-900 text-2xl font-extrabold tracking-tight">
        ELECTROLYTES
      </p>
    </div>
    <div>
      <p className="text-gray-800 text-lg">Nature</p>
      <p className="text-gray-900 text-2xl font-extrabold tracking-tight">
        VEGAN
      </p>
    </div>
  </div>
  {/* Product cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* prime-orange */}
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
     <img src="https://drinkprime.com/cdn/shop/files/OrangeKream_Web_DropBanner_PDP_Front_2000x2000_8b5dd6e8-169d-4332-84ef-e4028707c470_1200x.png?v=1752250151" alt="" />
      <h3 className="text-orange-500 font-semibold text-lg mb-2">
        prime-orange
      </h3>
      <p className="text-gray-500 text-lg leading-relaxed mb-5">
        Completely unstyled, fully accessible UI components, designed to
        integrate beautifully with Tailwind CSS.
      </p>
      <button className="mt-auto bg-orange-400 hover:bg-orange-500 text-white text-lg font-medium px-5 py-2 rounded-full transition-colors">
        Learn More
      </button>
    </div>
    {/* prime-green */}
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
      <img src="https://drinkprime.com/cdn/shop/files/GB_Product_Page_-_Front_1200x.png?v=1722366864" alt="" />
      <h3 className="text-green-500 font-semibold text-lg mb-2">prime-green</h3>
      <p className="text-gray-500 text-lg leading-relaxed mb-5">
        Completely unstyled, fully accessible UI components, designed to
        integrate beautifully with Tailwind CSS.
      </p>
      <button className="mt-auto bg-green-500 hover:bg-green-600 text-white text-lg font-medium px-5 py-2 rounded-full transition-colors">
        Learn More
      </button>
    </div>
    {/* Prime-Red */}
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXd8jWdWcK2qNuaGe5Ldx_reyW4XL6dUY4FFrnoxMNQg&s=10" alt="" />
      <h3 className="text-red-500 font-semibold text-lg mb-2">Prime-Red</h3>
      <p className="text-gray-500 text-lg leading-relaxed mb-5">
        Completely unstyled, fully accessible UI components, designed to
        integrate beautifully with Tailwind CSS.
      </p>
      <button className="mt-auto bg-red-500 hover:bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-full transition-colors">
        Learn More
      </button>
    </div>
    {/* prime-cyan */}
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
 <img src="https://americansweetsonline.com/wp-content/uploads/2023/06/Prime-Hydration-Drink-by-KSI-Logan-Paul-Ice-Pop-500ml-min.jpg" alt="" />
      <h3 className="text-cyan-500 font-semibold text-lg mb-2">prime-cyan</h3>
      <p className="text-gray-500 text-lg leading-relaxed mb-5">
        Completely unstyled, fully accessible UI components, designed to
        integrate beautifully with Tailwind CSS.
      </p>
      <button className="mt-auto bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-medium px-5 py-2 rounded-full transition-colors">
        Learn More
      </button>
    </div>
    {/* prime-pink */}
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
    <img src="https://res.cloudinary.com/goflink/image/upload/b_rgb:F8F8F8/w_456,ar_1:1,c_fill,g_south/product-images-prod/a8424cad-efc9-4f49-8968-bcd400ee3c8f.png" alt="" />
      <h3 className="text-pink-500 font-semibold text-lg mb-2">prime-pink</h3>
      <p className="text-gray-500 text-lg leading-relaxed mb-5">
        Completely unstyled, fully accessible UI components, designed to
        integrate beautifully with Tailwind CSS.
      </p>
      <button className="mt-auto bg-pink-500 hover:bg-pink-600 text-white text-lg font-medium px-5 py-2 rounded-full transition-colors">
        Learn More
      </button>
    </div>
  </div>
</section>

{/* single card */}
{/* <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
      <div
        className="relative w-24 h-40 mb-6 rounded-md overflow-hidden shadow-inner"
        style={{
          background:
            "linear-gradient(180deg, #1c0a24 0%, #150519 60%, #000 100%)"
        }}
      >
        <svg viewBox="0 0 100 160" className="absolute inset-0 w-full h-full">
          <path
            d="M50 25 C40 45, 62 55, 50 75 C42 88, 55 95, 50 110 C60 100, 68 85, 60 65 C72 75, 70 50, 50 25 Z"
            fill="url(#purpleFlame)"
          />
          <defs>
            <linearGradient id="purpleFlame" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#fbeaff" />
              <stop offset="45%" stopColor="#d98cf0" />
              <stop offset="100%" stopColor="#7d1fa6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute bottom-9 left-0 right-0 text-center">
          <p className="text-white font-extrabold italic text-[11px] tracking-wide leading-none">
            BURN<span className="align-super text-[6px]">®</span>
          </p>
          <p className="text-gray-300 text-[6px] tracking-widest mt-0.5">
            ENERGY DRINK
          </p>
        </div>
        <div className="absolute bottom-3 left-0 right-0 text-center">
          <p className="text-purple-300 text-[6px] font-semibold tracking-widest">
            PASSION PUNCH
          </p>
        </div>
      </div>
      <h3 className="text-purple-500 font-semibold text-lg mb-2">
        Burn Purple
      </h3>
      <p className="text-gray-500 text-lg leading-relaxed mb-5">
        Completely unstyled, fully accessible UI components, designed to
        integrate beautifully with Tailwind CSS.
      </p>
      <button className="mt-auto bg-purple-500 hover:bg-purple-600 text-white text-lg font-medium px-5 py-2 rounded-full transition-colors">
        Learn More
      </button>
    </div> */}

{/* the thrid section of card product */}
  {/* source: https://github.com/mfg888/Responsive-Tailwind-CSS-Grid/blob/main/index.html */}
  <div className="text-center p-10">
    <h1 className="font-bold text-4xl mb-4">Responsive Product card grid</h1>
    <h1 className="text-3xl">Tailwind CSS</h1>
  </div>
  {/* ✅ Grid Section - Starts Here 👇 */}
  <section
    id="Projects"
    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
  >
    {/*   ✅ Product card 1 - Starts Here 👇 */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAtMQ83uHH6dWTggEWKJU-OuVgWwuvdOzFlz0iojikjpRLKD4rCj8J2a2&s=10"
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            Green Prime
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              $149
            </p>
            <del>
              <p className="text-lg text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="currentColor"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
    {/*   🛑 Product card 1 - Ends Here  */}
    {/*   ✅ Product card 2 - Starts Here 👇 */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img
          src="https://drinkprime.com/cdn/shop/files/SnowballSlushy_Web_CollectionBanner_Mobile_1125x1071_c4d16641-d52f-4b04-bdd1-9c9e8a825136_1600x.jpg?v=1763086641"
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            Ice Prime
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              $149
            </p>
            <del>
              <p className="text-lg text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="currentColor"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
    {/*   🛑 Product card 2- Ends Here  */}
    {/*   ✅ Product card 3 - Starts Here 👇 */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img
          src="https://drinkprime.com/cdn/shop/files/STL_Web_CollectionBanner_Mobile_1125x1071_69622d63-ed05-4f47-a057-c5bfbe43da53_1600x.jpg?v=1774366898"
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            Strawberry Prime
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              $189
            </p>
            <del>
              <p className="text-lg text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="currentColor"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
    {/*   🛑 Product card 3 - Ends Here  */}
    {/*   ✅ Product card 4 - Starts Here 👇 */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img
          src="https://drinkprime.com/cdn/shop/files/IcePopSummer_Web_CollectionBanner_Mobile_1125x1071_Zero_1600x.jpg?v=1779283162"
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            Zero Prime
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              $149
            </p>
            <del>
              <p className="text-lg text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="currentColor"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
    {/*   🛑 Product card 4 - Ends Here  */}
    {/*   ✅ Product card 5 - Starts Here 👇 */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img
          src="https://drinkprime.com/cdn/shop/files/ICE_Web_CollectionBanner_Mobile_1125x1071_56744a1e-034f-467f-9371-6059b73e82b0_1600x.jpg?v=1735833588"
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            Ice Prime
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              $149
            </p>
            <del>
              <p className="text-lg text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="currentColor"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
    {/*   🛑 Product card 5 - Ends Here  */}
    {/*   ✅ Product card 6 - Starts Here 👇 */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4FQF-cXdpwq8KW_UmmruX8c90wBwMbgceBcFZ64D4bEpSVVFSSasrHal7&s=10"
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            Blue Prime
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              $149
            </p>
            <del>
              <p className="text-lg text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="currentColor"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
    {/*   🛑 Product card 6 - Ends Here  */}
  </section>
  {/* 🛑 Grid Section - Ends Here */}
  {/* credit */}
  <div className="text-center py-10 px-10">
    <h2 className="font-bold text-2xl md:text-4xl mb-4">
      Thanks to{" "}
      <a
        href="https://unsplash.com/@nixcreative"
        className="underline font-black"
      >
        Tyler Nix
      </a>{" "}
      for those AMAZING product images!
    </h2>
  </div>
  {/* Support Me 🙏🥰 */}
<section className="max-w-6xl mx-auto px-6 py-16">
  {/* Logo mark */}
  <div className="flex justify-center mb-8">
    {/* <svg
      width={110}
      height={130}
      viewBox="0 0 110 130"
      className="drop-shadow-sm"
    >
      <path
        d="M55 8 C48 20, 62 28, 55 42 C66 34, 70 18, 55 8 Z"
        fill="none"
        stroke="#111"
        strokeWidth="2.5"
      />
      <path
        d="M40 50 C25 60, 20 85, 15 110 C30 95, 38 80, 45 65 Z"
        fill="none"
        stroke="#111"
        strokeWidth="2.5"
      />
      <path
        d="M70 50 C88 58, 95 82, 100 108 C82 92, 75 78, 68 62 Z"
        fill="none"
        stroke="#111"
        strokeWidth="2.5"
      />
      <path
        d="M55 45 C50 65, 58 85, 50 108 C62 95, 68 75, 60 55 Z"
        fill="none"
        stroke="#111"
        strokeWidth="2.5"
      />
      <ellipse
        cx={55}
        cy={20}
        rx={6}
        ry={8}
        fill="#fff"
        stroke="#111"
        strokeWidth={2}
      />
      <rect
        x={30}
        y={55}
        width={55}
        height={20}
        rx={3}
        fill="#e8291c"
        transform="rotate(-8 57 65)"
      />
      <text
        x={57}
        y={70}
        textAnchor="middle"
        transform="rotate(-8 57 65)"
        fontFamily="Arial Black, sans-serif"
        fontWeight={900}
        fontSize={14}
        fill="#fff"
        fontStyle="italic"
      >
        STING
      </text>
    </svg> */}
    <img src="https://www.team2.asia/wp-content/uploads/Sting-308x350.png" alt="" />
  </div>
  {/* Headline */}
  <h1 className="text-center text-4xl sm:text-5xl font-extrabold mb-16">
    <span className="text-red-600">Sting</span>
    <span className="text-gray-900">Fill Your</span>
    <span className="text-amber-500">Energy</span>
  </h1>
  {/* Product cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    {/* Card 1: Sting Red */}
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow">
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRneIpG1HznsmkPyXWj3Eacx2s5BmPzDa0kS3-ySFwPjkHmDhKcZbSQsMQA&s=10" alt="" />
      <h3 className="text-red-500 font-semibold text-xl mb-2">Sting Red</h3>
      <p className="text-gray-500 text-lg leading-relaxed mb-6">
        Completely unstyled, fully accessible UI components, designed to
        integrate beautifully with Tailwind CSS.
      </p>
      <button className="mt-auto bg-red-500 hover:bg-red-500 text-white text-lg font-medium px-6 py-2.5 rounded-full transition-colors">
        Learn More
      </button>
    </div>
    {/* Card 2: Burn Purple (gold can) */}
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlN380TBElBs1N-RE9tbc3QjLVdCOfB2Lg0maIba1G4iuIvbmS2bF9IcE&s=10" alt="" />
      <h3 className="text-amber-600 font-semibold text-xl mb-2">Yello Sting</h3>
      <p className="text-gray-500 text-lg leading-relaxed mb-6">
        Completely unstyled, fully accessible UI components, designed to
        integrate beautifully with Tailwind CSS.
      </p>
      <button className="mt-auto bg-amber-500 hover:bg-amber-600 text-white text-lg font-medium px-6 py-2.5 rounded-full transition-colors">
        Learn More
      </button>
    </div>
  </div>
</section>


</section>
</>
    )
}