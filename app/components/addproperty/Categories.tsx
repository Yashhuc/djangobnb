import Image from 'next/image';
interface CategoriesProps{
    dataCategory: string;
    setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
    dataCategory,
    setCategory
}) =>{
    return(
        <>
            <div className="pt-3 cursor-pointer pb-6 flex item-center space-x-12">
                <div 
                    onClick={() => setCategory('tiny_house')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Tiny House'? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-500 hover:opacity-100`}
                >
                    <Image 
                        src="/home_category_image.jpg"
                        width={25}
                        height={25} 
                        alt="Category-home"
                    />
                    <span className="text-xs">Tiny House</span>
                </div>
                
                <div 
                    onClick={() => setCategory('villas')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Villas'? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-500 hover:opacity-100`}
                >
                    <Image 
                        src="/home_category_image.jpg"
                        width={25}
                        height={25}
                        alt="Category-home"
                    />
                    <span className="text-xs">Villas</span>
                </div>

                <div 
                    onClick={() => setCategory('beach')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Beach'? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-500 hover:opacity-100`}
                >
                    <Image 
                        src="/home_category_image.jpg"
                        width={25}
                        height={25}
                        alt="Category-home"
                    />
                    <span className="text-xs">Beach</span>
                </div>

                <div 
                    onClick={() => setCategory('cabins')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Cabins'? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-500 hover:opacity-100`}
                >
                    <Image 
                        src="/home_category_image.jpg"
                        width={25}
                        height={25}
                        alt="Category-home"
                    />
                    <span className="text-xs">Cabins</span>
                </div>
            </div>
        </>
    )
}

export default Categories;