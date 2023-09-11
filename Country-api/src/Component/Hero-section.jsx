

export default function Herosection() {
    return (
        <div className='  space-y-4'>
            <h1>Country<span className="  text-6xl   font-bold text-cyan-800" >P</span>edia</h1>
            <article className=" space-y-4 pr-4">
            <p>Get all the information you need to hire abroad with confidence. Browse any of our comprehensive hiring guides for 250 countries.</p>
            <h2 className=" text-xl font-semibold">About this app</h2>
            pCountryPedia provides information about the continents and countries of the world displayed and organized in very simple and effective way.
            
            <ul>
                <li>Version: <span>1.15</span> </li>
                <li>Requires Android: <span>Browser</span> </li>
                <li>Released on: <span>sept 12, 2023</span> </li>
                <li>Dev: <span>Joy Hasan</span> </li>
                <li>Dont forget to share it with your friends ..</li>
                
            </ul>
            </article>
            <input className=' w-full p-10 text-2xl' type="text" placeholder='Find Country' />
        </div>
    );
}

