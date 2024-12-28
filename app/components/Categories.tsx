'use client';

import { useState } from 'react';
import Image from 'next/image';
import useSearchModal, {SearchQuery} from '../hooks/useSearchModal';

const Categories = () => {
    const searchModal = useSearchModal();
    const [category, setCategory] = useState('');

    const _setCategory = (_category: string) => {
        setCategory(_category);

        const query: SearchQuery = {
            country: searchModal.query.country,
            checkIn: searchModal.query.checkIn,
            checkOut: searchModal.query.checkOut,
            guests: searchModal.query.guests,
            bedrooms: searchModal.query.bedrooms,
            bathrooms: searchModal.query.bathrooms,
            category: _category
        }

        searchModal.setQuery(query);
    }
    return(
        <div className = "pt-3 cursor-pointer flex items-center space-x-12">
            <div 
                onClick={() => _setCategory('')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == '' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >
                <Image 
                    src="/home_category_image.jpg"
                    width={25}
                    height={25}
                    alt="Category-home"
                />
                <span className="text-xs">All</span>
            </div>

            <div 
                onClick={() => _setCategory('tiny_house')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'tiny_house' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
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
                onClick={() => _setCategory('villas')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'villas' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/home_category_image.jpg"
                    width={25}
                    height={25}
                    alt="Category-home"
                />
                <span className="text-xs">Villas</span>
            </div>

            <div 
                onClick={() => _setCategory('beach')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'beach' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/home_category_image.jpg"
                    width={25}
                    height={25}
                    alt="Category-home"
                />
                <span className="text-xs">Beach</span>
            </div>

            <div 
                onClick={() => _setCategory('cabins')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'cabins' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/home_category_image.jpg"
                    width={25}
                    height={25}
                    alt="Category-home"
                />
                <span className="text-xs">Cabins</span>
            </div>

        </div>
    )
}

export default Categories;