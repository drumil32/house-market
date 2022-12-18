import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import { getAuth, updateProfile } from "firebase/auth";
import {
    updateDoc,
    doc,
    collection,
    getDocs
} from "firebase/firestore";
import {db} from "../firebase.config";

function Profile() {
    const navigate = useNavigate();
    const auth = getAuth();
    const [changeDetails, setChangeDetails] = useState(false);
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email
    });


    const onLogout = () => {
        auth.signOut();
        // navigate('/');
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        console.log(name + '  ' + value);
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const onSubmit = async () => {
        try {
            if (auth.currentUser.displayName !== formData.name) {
                // Update display name in fb
                await updateProfile(auth.currentUser, {
                    displayName: formData.name,
                });

                console.log(auth.currentUser.displayName)

                // Update in firestore
                const userRef = doc(db, 'users', auth.currentUser.uid)
                await updateDoc(userRef, {
                    name : formData.name,
                })
            }
        } catch (error) {
            console.log(error);
            toast.error('Could not update profile details');
        }
    }

    return (
        <div className='profile'>
            <header className='profileHeader'>
                <p className='pageHeader'>My Profile</p>
                <button type='button' className='logOut' onClick={onLogout}>
                    Logout
                </button>
            </header>
            <main>
                <div className='profileDetailsHeader'>
                    <p className='profileDetailsText'>Personal Details</p>
                    <p
                        className='changePersonalDetails'
                        onClick={() => {
                            changeDetails && onSubmit()
                            setChangeDetails((prevState) => !prevState)
                        }}
                    >
                        {changeDetails ? 'done' : 'change'}
                    </p>
                </div>

                <div className='profileCard'>
                    <form>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            className={!changeDetails ? 'profileName' : 'profileNameActive'}
                            disabled={!changeDetails}
                            value={formData.name}
                            onChange={onChange}
                        />
                        <input
                            type='email'
                            id='email'
                            name='email'
                            className='profileEmail'
                            disabled={true}
                            value={formData.email}
                            onChange={onChange}
                        />
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Profile