export const baseURL = process.env.NEXT_PUBLIC_API_URL

const GlobalApi = {
  signup: {
    url: '/api/user/signup',
    method: 'post',
  },
  verifyEmail: {
    url: '/api/user/verify-email',
    method: 'post',
  },
  signin: {
    url: '/api/user/signin',
    method: 'post',
  },
  signout: {
    url: '/api/user/signout',
    method: 'get',
  },
  forgotPassword: {
    url: '/api/user/forget-password',
    method: 'post',
  },
  verifyOtp: {
    url: '/api/user/verify-otp',
    method: 'post',
  },
  resetPassword: {
    url: '/api/user/reset-password',
    method: 'put',
  },
  refreshToken: {
    url: '/api/user/refresh-token',
    method: 'post',
  },
  userDetails: {
    url: '/api/user/user-details',
    method: 'get',
  },
  uploadAvatar: {
    url: '/api/user/upload-avatar',
    method: 'put',
  },
  updateProfilUser: {
    url: '/api/user/update-user',
    method: 'put',
  },
  googleAuth: {
    url: '/api/user/google-auth',
    method: 'post',
  },
}

export default GlobalApi
