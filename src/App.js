import './App.css';
import crop from "../src/Assets/crops.png"
import cropPerson from "../src/Assets/cropPrson.jpg"
import card1 from "../src/Assets/card1.png"
import card2 from "../src/Assets/card2.png"
import card3 from "../src/Assets/card3.png"
import fish from "../src/Assets/fish.png"
import dairy from "../src/Assets/dairy.png"
import poultry from "../src/Assets/poultry.png"
import agro from "../src/Assets/agro.png"
import Gallery from './components/galary';
import logo2 from "../src/Assets/Galary/logo2.jpg"


function App() {
  return (<div className=''>
      <div className='flex items-center justify-between p-3 lg:px-7 shadow-b shadow-lg z-50 sticky top-0 bg-white'>
        <div className='font-bold text-green-800 text-xl '>
         <img src={logo2} alt="" className='w-24 h-12 rounded-2xl'/>
        </div>
        <div className='lg:flex hidden lg:gap-6 gap-3 text-gray-700 lg:text-lg text-base font-medium'>
          <p className='text-green-800'>Home</p>
          <p>Services</p>
          <p>Blog</p>
        </div>
        <div>
          <button className='p-1 px-2 bg-green-700 text-white rounded-md hover:scale-110 transition-all' onClick={() => window.open("https://wa.me/918853642438", "_blank")}>Contact Us</button>
        </div>
      </div>
     

        <div className='relative'>
          <img src={crop} alt="" className='h-80 lg:w-full w-screen'/>
          <div className="absolute top-0 left-0 w-full h-full bg-green-800 bg-opacity-65" />
          <div className="absolute top-0 w-full h-full flex lg:flex-row flex-col lg:gap-20 gap-4 items-center justify-center lg:px-10 px-5">
          <div className="lg:w-3/5 h-full flex flex-col gap-3 items-start px-5 justify-center">
              <p className="font-semibold lg:text-4xl text-2xl text-white">
                    Sustainable Farming For A Better Future
              </p>
              <p className=" lg:text-2xl text-xl text-white">
                    Innovative agriculture solutions that combine modern technology with utinble practices
              </p>
              <button className='p-1 px-3 mt-2 bg-white text-green-800 rounded-md hover:text-white hover:bg-green-600 transition-all'>Learn More</button>
              
          </div>
          <div className=' flex items-center justify-center border-green-600 border-2 rounded-2xl'>
            <img src={cropPerson} alt='' className='h-60 rounded-2xl lg:flex hidden'/>
          </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center p-6 '>
          <p className='text-2xl font-bold'>About</p>
          <p className='text-center text-xl'>We are dedicated to revolutionizing agriculture practices through innovation,<br/> sutainability and community empowerment</p>
        </div>
        <div className='flex lg:flex-row flex-col-reverse gap-6 lg:px-10 px-4 lg:pb-8 pb-3'>
          <div className='lg:w-1/2 flex flex-col gap-3'>
            <p className='text-2xl font-bold'>Our Mission</p>
            <p>Agriculture is the backbone of human civilization, providing food, fiber, and raw materials. It sustains livelihoods, supports economies, and ensures food security. Modern agriculture combines traditional practices with technology to improve productivity and sustainability, playing a vital role in combating hunger, preserving the environment, and fostering rural development worldwide.</p>
            <p className='text-2xl font-bold'>Our Vision</p>
            <p>Agriculture is the backbone of human civilization, providing food, fiber, and raw materials. It sustains livelihoods, supports economies, and ensures food security. Modern agriculture combines traditional practices with technology to improve productivity and sustainability, playing a vital role in combating hunger, preserving the environment, and fostering rural development worldwide.</p>
            <button className='text-green-800 p-1 px-2 rounded-md border-2 hover:bg-green-800 hover:text-white transition-all border-green-800 lg:w-32 w-full'>Learn More</button>
          </div>
          <div className='lg:w-1/2 flex items-center justify-center '>
          <div className='border-green-600 border-2 rounded-2xl h-80 w-96 relative'><img src={cropPerson} alt='' className='h-80 w-96 rounded-2xl absolute top-3 right-3'/></div>
            
          </div>
        </div>


        <div className='lg:p-10 pb-4 bg-green-100'>
        <div className='flex flex-col items-center justify-center lg:p-6 p-3'>
          <p className='text-2xl font-bold'>Our Services</p>
          <p className='text-center text-xl'>We offer a comprehensive range of agricultural services designed to maximize<br/>productivity and sustainability</p>
        </div>
        <div className='w-full p-5 flex lg:flex-row flex-col justify-around lg:gap-10 gap-3 '>
          <div className=' relative'>
           <img src={fish} alt="" className='w-full h-full'/> 
           <div className="absolute top-0 left-0 w-full h-full bg-gray-400 bg-opacity-50" />
           <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
        <button className='p-2 w-3/4 bg-white bg-opacity-70 text-black rounded font-semibold hover:bg-opacity-90'>
          Fish Farming
        </button>
        </div>
          </div>
          <div className=' relative'>
           <img src={poultry} alt="" className='w-full h-full'/> 
           <div className="absolute top-0 left-0 w-full h-full bg-gray-400 bg-opacity-50" />
           <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
        <button className='p-2 w-3/4 bg-white bg-opacity-70 text-black rounded font-semibold hover:bg-opacity-90'>
          Poultry Farming
        </button>
        </div>
          </div>
          <div className=' relative'>
           <img src={dairy} alt="" className='w-full h-full'/> 
           <div className="absolute top-0 left-0 w-full h-full bg-gray-400 bg-opacity-50" />
           <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
        <button className='p-2 w-3/4 bg-white bg-opacity-70 text-black rounded font-semibold hover:bg-opacity-90'>
          Dairy Production
        </button>
        </div>
          </div>
          <div className=' relative'>
           <img src={agro} alt="" className='w-full h-full'/> 
           <div className="absolute top-0 left-0 w-full h-full bg-gray-400 bg-opacity-50" />
           <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
        <button className='p-2 w-3/4 bg-white bg-opacity-70 text-black rounded font-semibold hover:bg-opacity-90'>
          Agro Products
        </button>
        </div>
          </div>
        </div>
        </div>



        <div className='lg:p-10 p-5'>
          <p className='text-2xl font-bold pb-4 flex items-center justify-center'>Latest Blog</p>
          <div className='flex lg:flex-row flex-col justify-around lg:gap-6 gap-3'>
            <div className=' border shadow-lg flex flex-col items-center justify-center'>
              <img src={card1} alt="" className=''/>
              <div className='p-3'>
                <p className='text-xl font-semibold'>From Farm to Table, Explore the Journey of Agro Produce</p>
              <p className='text-sm'>
              Agriculture is the backbone of human civilization, providing food, fiber, and raw materials. It sustains livelihoods, supports economies, and ensures food security. Modern agriculture combines traditional practices with technology to improve productivity and sustainability, playing a vital role in combating hunger, preserving the environment, and fostering rural development worldwide.
              </p>
              <button className='w-full text-white p-2 px-3 bg-green-800 rounded-md my-1'>Read More</button>
              </div>
            </div>
            <div className=' border shadow-lg flex flex-col items-center justify-center'>
              <img src={card2} alt="" className=''/>
              <div className='p-3'>
                <p className='text-xl font-semibold'>From Farm to Table, Explore the Journey of Agro Produce</p>
              <p className='text-sm'>
              Agriculture is the backbone of human civilization, providing food, fiber, and raw materials. It sustains livelihoods, supports economies, and ensures food security. Modern agriculture combines traditional practices with technology to improve productivity and sustainability, playing a vital role in combating hunger, preserving the environment, and fostering rural development worldwide.
              </p>
              <button className='w-full text-white p-2 px-3 bg-green-800 rounded-md my-1'>Read More</button>
              </div>
            </div>
            <div className=' border shadow-lg flex flex-col items-center justify-center'>
              <img src={card3} alt="" className=''/>
              <div className='p-3'>
                <p className='text-xl font-semibold'>From Farm to Table, Explore the Journey of Agro Produce</p>
              <p className='text-sm'>
              Agriculture is the backbone of human civilization, providing food, fiber, and raw materials. It sustains livelihoods, supports economies, and ensures food security. Modern agriculture combines traditional practices with technology to improve productivity and sustainability, playing a vital role in combating hunger, preserving the environment, and fostering rural development worldwide.
              </p>
              <button className='w-full text-white p-2 px-3 bg-green-800 rounded-md my-1'>Read More</button>
              </div>
            </div>
          </div>
        </div>

        <Gallery/>

       


        <div className='p-6 bg-green-300 grid lg:grid-cols-4 grid-cols-2 gap-4'>
          <div>
          <img src={logo2} alt="" className='w-24 h-12 rounded-2xl'/>
          <p>Agro smart for agricultures, uncompasses all activities related to the cultivation of crops.</p>
          </div>
          <div>
            <p className='text-base font-bold py-1'>Useful Links</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div>
            <p className='text-base font-bold py-1'>Contact</p>
            <p><span className='font-semibold'>Address:</span> Gram Golahnamau, Block Sujanganj, District Jaunpur</p>
            <p><span className='font-semibold'>Phone:</span> +91 8853642438</p>
          </div>
          <div>
            <p className='text-base font-bold py-1'>Follow Us</p>
            <p>FaceBook</p>
            <p>Instagram</p>
            <p>YouTube</p>
          </div>
        </div>

        <div className='flex text-sm items-center justify-center p-1 pb-3 bg-green-300'>All Rights Reserved by Pranav</div>

      </div>
  );
}

export default App;
