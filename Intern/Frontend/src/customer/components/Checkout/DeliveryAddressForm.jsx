import { useDispatch } from "react-redux";
import AddressCard from "../AddressCard/AddressCard";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";

const DeliveryAddressForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log("address", data);

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      address: data.get("streetAddress"),
      city: data.get("city"),
      state: data.get("state"),
      phone: data.get("phone"),
    };
    const orderData = { address, navigate };
    dispatch(createOrder(orderData));
    console.log("address", address);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Address Cards */}
        <div className="lg:w-2/5 flex flex-col">
          <div className="border rounded-xl shadow-md p-5 bg-white flex-1 flex flex-col">
            <h2 className="text-xl font-bold mb-5 text-gray-800">
              Saved Addresses
            </h2>
            <div className="flex-1 overflow-y-auto max-h-[32rem] pr-2">
              {[1].map((item) => (
                <AddressCard key={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Address Form */}
        <div className="lg:w-3/5">
          <div className="border rounded-xl shadow-md p-5 bg-white">
            <h2 className="text-xl font-bold mb-5 text-gray-800">
              Add New Address
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1">
                  <label
                    htmlFor="firstName"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="lastName"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 font-medium text-gray-700"
                >
                  StreetAddress <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  id="streetAddress"
                  name="streetAddress"
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your full address"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1">
                  <label
                    htmlFor="city"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    id="city"
                    name="city"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your city"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="state"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    State/Province <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    id="state"
                    name="state"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your state"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1">
                  <label
                    htmlFor="zip"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    ZIP/Postal Code <span className="text-red-500">*</span>
                  </label>
                  <input
                  
                    id="zip"
                    name="zip"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your ZIP code"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="phone"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors"
                >
                  Deliver Here
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddressForm;
