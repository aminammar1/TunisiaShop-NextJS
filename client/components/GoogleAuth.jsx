'use client'

import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '@/lib/firebase'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import GlobalApi from '@/api/GlobalApi'
import toast from 'react-hot-toast'
import Axios from '@/lib/Axios'
import AxiosToastError from '@/lib/AxiosToastError'
import { useDispatch } from 'react-redux'
import { setUser } from '@/store/userSlice'
import { ClipLoader } from 'react-spinners'
import { FcGoogle } from 'react-icons/fc'
import fetchUserDetails from '@/lib/UserDetails'

export default function GoogleAuth() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleGoogleClick = async () => {
    try {
      setLoading(true)
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)
      const result = await signInWithPopup(auth, provider)
      const { displayName: name, email, photoURL: photo } = result.user

      const response = await Axios({
        ...GlobalApi.googleAuth,
        data: { name, email, photo },
      })

      if (response.data.success) {
        toast.success(response.data.message, { position: 'top-center' })

        localStorage.setItem('accessToken', response.data.data.accessToken)
        localStorage.setItem('refreshToken', response.data.data.refreshToken)

        const user = await fetchUserDetails()

        dispatch(setUser(user.data))

        router.push('/')
      }
    } catch (error) {
      AxiosToastError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleGoogleClick}
      className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors duration-200"
    >
      <FcGoogle className="text-xl" />
      {loading ? (
        <ClipLoader size={24} color={'#808080'} />
      ) : (
        'Continue with Google'
      )}
    </button>
  )
}
