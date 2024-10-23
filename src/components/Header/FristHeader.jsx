

const FristHeader = ({selectedPoduct,addedPrice}) => {
    return (
        <div className='flex justify-evenly items-center'>
            {/* left part */}
            <div>
                <h2 className='text-2xl text-blue-800'>LOGO</h2>
            </div>
            {/* cencer part */}
            <div>
                <h4>CARD : {selectedPoduct.length} </h4>
            </div>
            {/*  right part  */}
            <div>
              <h3>TOTAL PRICE : {addedPrice} $</h3>
            </div>
        </div>
    );
};

export default FristHeader;