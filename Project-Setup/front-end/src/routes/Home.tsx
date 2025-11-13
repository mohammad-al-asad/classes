import { useEffect, useState } from "react";
import type { IService } from "../types/service";

function Home() {
  const [services, setServices] = useState<IService[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/api/service`)
      .then((res) => res.json())
      .then((data) => setServices(data.data))
      .catch((err) => console.error("Error fetching services:", err));
  }, []);


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        All Services
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {services.map((item, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h2>

            {/* <p className="text-sm text-gray-600">
              <span className="font-medium">Provider:</span> {item.provider.name}
            </p> */}

            <p className="text-sm text-gray-600">
              <span className="font-medium">Type:</span> {item.serviceType}
            </p>

            <p className="text-sm text-gray-600 mb-3">
              <span className="font-medium">Location:</span> {item.location}
            </p>

            <button className="mt-2 w-full bg-blue-500 text-white py-1.5 rounded-lg hover:bg-blue-600 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
