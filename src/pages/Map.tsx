import { useState } from "react";
import Icon from "@/components/ui/icon";

interface GoodDeed {
  id: number;
  title: string;
  description: string;
  location: { lat: number; lng: number };
  author: string;
  date: string;
  category: string;
}

const Map = () => {
  const [selectedDeed, setSelectedDeed] = useState<GoodDeed | null>(null);

  const mockDeeds: GoodDeed[] = [
    {
      id: 1,
      title: "Покормил бездомных котов",
      description: "Принёс корм для котиков около подъезда",
      location: { lat: 55.7558, lng: 37.6176 },
      author: "Анна К.",
      date: "2 часа назад",
      category: "Помощь животным",
    },
    {
      id: 2,
      title: "Помог донести сумки",
      description: "Помог пожилой соседке донести тяжёлые сумки",
      location: { lat: 55.752, lng: 37.6156 },
      author: "Максим П.",
      date: "4 часа назад",
      category: "Помощь людям",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white shadow-sm border-b">
        <div className="px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900 font-rubik">
            Карта добрых дел
          </h1>
          <p className="text-gray-600 text-sm mt-1">Добрые дела рядом с вами</p>
        </div>
      </div>

      <div className="relative h-96 bg-gradient-to-br from-green-100 to-blue-100 m-4 rounded-xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6">
            <Icon
              name="MapPin"
              size={48}
              className="text-purple-500 mx-auto mb-3"
            />
            <p className="text-gray-700 font-medium">Интерактивная карта</p>
            <p className="text-gray-500 text-sm">Здесь будет Яндекс Карты</p>
          </div>
        </div>

        {/* Mock map markers */}
        <div className="absolute top-20 left-16">
          <div
            className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg animate-pulse"
            onClick={() => setSelectedDeed(mockDeeds[0])}
          >
            <Icon name="Heart" size={16} className="text-white" />
          </div>
        </div>

        <div className="absolute bottom-20 right-20">
          <div
            className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg animate-pulse"
            onClick={() => setSelectedDeed(mockDeeds[1])}
          >
            <Icon name="HandHeart" size={16} className="text-white" />
          </div>
        </div>
      </div>

      <div className="px-4 space-y-3">
        <h2 className="text-lg font-semibold text-gray-900 font-rubik">
          Недавние добрые дела
        </h2>

        {mockDeeds.map((deed) => (
          <div
            key={deed.id}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedDeed(deed)}
          >
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Icon name="Heart" size={18} className="text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{deed.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{deed.description}</p>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <Icon name="User" size={12} className="mr-1" />
                  {deed.author}
                  <span className="mx-2">•</span>
                  <Icon name="Clock" size={12} className="mr-1" />
                  {deed.date}
                </div>
              </div>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                {deed.category}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedDeed && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end z-50">
          <div className="bg-white rounded-t-2xl w-full p-6 animate-slide-in-right">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 font-rubik">
                {selectedDeed.title}
              </h3>
              <button onClick={() => setSelectedDeed(null)}>
                <Icon name="X" size={24} className="text-gray-500" />
              </button>
            </div>
            <p className="text-gray-700 mb-4">{selectedDeed.description}</p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <Icon name="User" size={16} className="mr-2" />
                <span>Автор: {selectedDeed.author}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Icon name="Clock" size={16} className="mr-2" />
                <span>{selectedDeed.date}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Icon name="Tag" size={16} className="mr-2" />
                <span>{selectedDeed.category}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
