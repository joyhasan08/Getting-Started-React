

const Bookmark = ({ bookmark }) => {
    console.log(bookmark);

    return (
        <div>
            <div className=" ">
                <h2 className=" bg-teal-800 text-xl font-semibold p-2">Bookedmark</h2>
                <ul className=" p-2">

                    {
                        bookmark.map((value) =>{
                            return(<>
                            <div className="  flex gap-4">
                            <img className=" w-9 h-9 rounded-full m-2" src={value.flags.png} alt="" />
                            <li className=" border-b-2 m-2" key={value.cca3}>{value.capital}</li>
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