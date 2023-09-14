

const Bookmark = ({ bookmark }) => {
    console.log(bookmark);

    return (
        <div>
            <div className=" ">
                <h2 className=" bg-teal-800 text-xl font-semibold p-2 rounded-lg">Bookedmark</h2>
                <ul className=" p-2">

                    {
                        bookmark.map((value) =>{
                            return(<>
                            <div className="  flex gap-4  items-center">
                            <img className=" w-9 h-9 rounded-full m-2 mr-0" src={value.flags.png} alt="" />
                            <li className=" ml-0 m-2" key={value.cca3}>{value.capital}</li>
                            </div>
                            </>)
                        }
                            
                            
                        )
                    }
                

                </ul>
            </div>
        </div>
    );
};

export default Bookmark;