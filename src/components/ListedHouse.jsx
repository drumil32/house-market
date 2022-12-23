import { Link } from 'react-router-dom';
import { ReactComponent as DeleteIcon } from '../assets/svg/deleteIcon.svg';
import { ReactComponent as EditIcon } from '../assets/svg/editIcon.svg';
import bedIcon from '../assets/svg/bedIcon.svg';
import bathtubIcon from '../assets/svg/bathtubIcon.svg';


function ListedHouse({ listedHouse, id, onEdit, onDelete }) {
    console.log(listedHouse);
    return (
        <li className='categoryListing'>
            <Link
                to={`/category/${listedHouse.type}/${id}`}
                className='categoryListingLink'
            >
                <img
                    src={listedHouse.imageUrls[0]}
                    alt={listedHouse.name}
                    className='categoryListingImg'
                />
                <div className='categoryListingDetails'>
                    <p className='categoryListingLocation'>{listedHouse.location}</p>
                    <p className='categoryListingName'>{listedHouse.name}</p>

                    <p className='categoryListingPrice'>
                        $
                        {listedHouse.offer
                            ? listedHouse.discountPrice
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                            : listedHouse.regularPrice
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        {listedHouse.type === 'rent' && ' / Month'}
                    </p>
                    <div className='categoryListingInfoDiv'>
                        <img src={bedIcon} alt='bed' />
                        <p className='categoryListingInfoText'>
                            {listedHouse.bedrooms > 1
                                ? `${listedHouse.bedrooms} Bedrooms`
                                : '1 Bedroom'}
                        </p>
                        <img src={bathtubIcon} alt='bath' />
                        <p className='categoryListingInfoText'>
                            {listedHouse.bathrooms > 1
                                ? `${listedHouse.bathrooms} Bathrooms`
                                : '1 Bathroom'}
                        </p>
                    </div>
                </div>
            </Link>

            {onDelete && (
                <DeleteIcon
                    className='removeIcon'
                    fill='rgb(231, 76,60)'
                    onClick={() => onDelete(listedHouse.id, listedHouse.name)}
                />
            )}

            {onEdit && <EditIcon className='editIcon' onClick={() => onEdit(id)} />}
        </li>
    )
}

export default ListedHouse