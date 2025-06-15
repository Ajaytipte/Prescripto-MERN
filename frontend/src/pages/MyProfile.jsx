import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [image, setImage] = useState(null)
  const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext)

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData()
      formData.append('name', userData.name)
      formData.append('phone', userData.phone)
      formData.append('address', JSON.stringify(userData.address))
      formData.append('gender', userData.gender)
      formData.append('dob', userData.dob)
      if (image) formData.append('image', image)

      const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

      if (data.success) {
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
        setImage(null)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return userData ? (
    <div className="max-w-3xl mx-auto p-5 md:p-8 bg-white rounded-2xl shadow-lg text-sm">

      {/* Profile image */}
      <div className="flex flex-col items-center gap-3 mb-6 relative">
        {isEdit ? (
          <div className="relative group">
            <img
              className="w-36 h-36 object-cover rounded-full border border-gray-300"
              src={image ? URL.createObjectURL(image) : userData.image}
              alt="Profile"
            />
            <label htmlFor="image"
              className="absolute inset-0 bg-black bg-opacity-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer">
              <img src={assets.upload_icon} alt="Upload" className="w-10 h-10" />
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              hidden
            />
          </div>
        ) : (
          <img className="w-36 h-36 object-cover rounded-full border border-gray-300" src={userData.image} alt="Profile" />
        )}

        {isEdit ? (
          <input
            className="text-3xl font-semibold text-center bg-gray-50 rounded px-3 py-1"
            type="text"
            onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
            value={userData.name}
          />
        ) : (
          <p className="font-bold text-3xl text-gray-800">{userData.name}</p>
        )}
      </div>

      <hr className="border-t border-gray-300 my-4" />

      {/* Contact Information */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-600 mb-3 uppercase">Contact Information</p>
        <div className="grid grid-cols-[1fr_2fr] gap-y-4 text-gray-700 text-[15px]">
          <p className="font-medium">Email:</p>
          <p className="text-blue-600 break-all">{userData.email}</p>

          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-50 rounded px-3 py-1 max-w-52 border border-gray-300"
              type="text"
              onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))}
              value={userData.phone}
            />
          ) : (
            <p>{userData.phone}</p>
          )}

          <p className="font-medium">Address:</p>
          {isEdit ? (
            <div className="flex flex-col gap-2">
              <input
                className="bg-gray-50 rounded px-3 py-1 border border-gray-300"
                type="text"
                onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                value={userData.address.line1}
              />
              <input
                className="bg-gray-50 rounded px-3 py-1 border border-gray-300"
                type="text"
                onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                value={userData.address.line2}
              />
            </div>
          ) : (
            <p className="text-gray-600">{userData.address.line1}<br />{userData.address.line2}</p>
          )}
        </div>
      </div>

      <hr className="border-t border-gray-300 my-4" />

      {/* Basic Information */}
      <div>
        <p className="text-sm font-semibold text-gray-600 mb-3 uppercase">Basic Information</p>
        <div className="grid grid-cols-[1fr_2fr] gap-y-4 text-gray-700 text-[15px]">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="bg-gray-50 rounded px-3 py-1 max-w-36 border border-gray-300"
              onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
              value={userData.gender}
            >
              <option value="Not Selected">Not Selected</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}

          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="bg-gray-50 rounded px-3 py-1 max-w-36 border border-gray-300"
              type="date"
              onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
              value={userData.dob}
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>

      {/* Edit / Save button */}
      <div className="flex justify-center mt-10">
        {isEdit ? (
          <button onClick={updateUserProfileData} className="bg-primary text-white hover:bg-opacity-90 px-8 py-2 rounded-full shadow transition-all">Save Information</button>
        ) : (
          <button onClick={() => setIsEdit(true)} className="border border-primary text-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all">Edit</button>
        )}
      </div>

    </div>
  ) : null
}

export default MyProfile
