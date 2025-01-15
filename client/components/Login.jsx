'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'

export default function Login() {
  const router = useRouter()
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const valideValue = Object.values(data).every((item) => item)

  return (
    <section className="w-full container mx-auto px-2">
      <div className="bg-white my-4 w-full max-w-lg mx-auto rounded-lg shadow-lg p-8">
        <form className="grid gap-6">
          <div className="grid gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              placeholder="Enter your email"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="grid gap-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-red-500">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={data.password}
                placeholder="Enter your password"
                onChange={handleChange}
                className="w-full p-3 outline-none rounded-lg"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer p-3"
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            <Link href="/forgot-password" className="text-sm text-right hover:text-red-500">
              Forgot password?
            </Link>
          </div>
          <button
            disabled={!valideValue}
            className={`w-full py-3 rounded-lg font-semibold ${
              valideValue
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-red-300 text-white cursor-not-allowed'
            } transition-colors duration-200`}
          >
            Login
          </button>
        </form>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors duration-200">
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>
        <p className="text-center mt-6 text-sm text-gray-600">
          Don't have an account?{' '}
          <Link href="/sign-up" className="text-red-700 hover:text-red-900">
            Register
          </Link>
        </p>
      </div>
    </section>
  )
}
