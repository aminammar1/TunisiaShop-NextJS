'use client'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { HiOutlineExternalLink } from 'react-icons/hi'
import Divider from '../Divider'
import { logout } from '@/store/userSlice'
import Axios from '@/utils/Axios'
import toast from 'react-hot-toast'
import AxiosToastError from '@/utils/AxiosToastError'
import GlobalApi from '@/app/api/GlobalApi'
import isAdmin from '@/utils/AdminVerify'

export default function UserMenu({ close }) {
  const user = useSelector((state) => state?.user)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const response = await Axios({
        ...GlobalApi.signout,
      })
      if (response.data.success) {
        if (close) {
          close()
        }
        dispatch(logout())
        localStorage.clear()
        toast.success('Logout successful')
        router.replace('/')
      }
    } catch (error) {
      AxiosToastError(error)
    }
  }
  const handleClose = () => {
    if (close) {
      close()
    }
  }

  return (
    <div>
      <div className="font-semibold">My Account</div>
      <div className="text-sm flex items-center gap-2">
        <span className="max-w-52 text-ellipsis line-clamp-1">
          {user.name || user.mobile}{' '}
          <span className="text-medium text-red-600">
            {user.role === 'ADMIN' ? '(Admin)' : ''}
          </span>
        </span>
        <Link
          onClick={handleClose}
          href={'/dashboard/profile'}
          className="hover:text-primary-200"
        >
          <HiOutlineExternalLink size={15} />
        </Link>
      </div>

      <Divider />

      <div className="text-sm grid gap-1">
        {isAdmin(user.role) && (
          <Link
            onClick={handleClose}
            href={'/dashboard/category'}
            className="px-2 hover:bg-orange-200 py-1"
          >
            Category
          </Link>
        )}

        {isAdmin(user.role) && (
          <Link
            onClick={handleClose}
            href={'/dashboard/subcategory'}
            className="px-2 hover:bg-orange-200 py-1"
          >
            Sub Category
          </Link>
        )}

        {isAdmin(user.role) && (
          <Link
            onClick={handleClose}
            href={'/dashboard/upload-product'}
            className="px-2 hover:bg-orange-200 py-1"
          >
            Upload Product
          </Link>
        )}

        {isAdmin(user.role) && (
          <Link
            onClick={handleClose}
            href={'/dashboard/product'}
            className="px-2 hover:bg-orange-200 py-1"
          >
            Product
          </Link>
        )}

        <Link
          onClick={handleClose}
          href={'/dashboard/myorders'}
          className="px-2 hover:bg-orange-200 py-1"
        >
          My Orders
        </Link>

        <Link
          onClick={handleClose}
          href={'/dashboard/address'}
          className="px-2 hover:bg-orange-200 py-1"
        >
          Save Address
        </Link>

        <button
          onClick={handleLogout}
          className="text-left px-2 hover:bg-orange-200 py-1"
        >
          Log Out
        </button>
      </div>
    </div>
  )
}
