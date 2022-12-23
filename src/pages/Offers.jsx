
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    collection,
    getDocs,
    query,
    where,
    orderBy,
    limit,
    startAfter,
} from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import ListedHouse from '../components/ListedHouse';

function Offers() {
    const { categoryName } = useParams();

    const [loading, setLoading] = useState(true);
    const [listed_houses, setListed_houses] = useState([]);

    useEffect(() => {
        const fetchListed_houses = async () => {
            try {
                const listed_houses_Ref = await collection(db, 'listed_houses');
                console.log(listed_houses_Ref);

                const q = query(
                    listed_houses_Ref,
                    where('offer', '==', true),
                    orderBy('timestamp', 'desc'),
                    limit(10)
                );

                // Execute query
                const querySnap = await getDocs(q);

                console.log(querySnap);
                let listed_houses = [];

                querySnap.forEach((doc) => {
                    listed_houses.push({
                        id: doc.id,
                        data: doc.data()
                    });
                });

                setListed_houses(listed_houses);
                setLoading(false);
            } catch (error) {
                console.log(error)
                toast.error(`could not fetch data`);
            }
        }
        fetchListed_houses();
    }, [categoryName])

    return (
        <div className="category">
            <header>
                <p className="pageHeader">
                    Offers
                </p>
            </header>
            {loading ? (<Spinner />) :
                listed_houses && listed_houses.length > 0 ?
                    <>
                        {
                            listed_houses.map(
                                (listedHouse) => (
                                    <ListedHouse listedHouse={listedHouse.data} id={listedHouse.id} key={listedHouse.id} />
                                ))
                        }
                    </> :
                    (<p>No offers are available</p>)}
        </div>
    )
}

export default Offers