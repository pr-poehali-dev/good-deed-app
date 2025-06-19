import { useState } from "react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [todayCount, setTodayCount] = useState(2);

  const stats = [
    {
      label: "Сегодня",
      value: todayCount,
      icon: "Calendar",
      color: "text-purple-600",
    },
    {
      label: "На этой неделе",
      value: 12,
      icon: "TrendingUp",
      color: "text-green-600",
    },
    { label: "Всего дел", value: 47, icon: "Award", color: "text-orange-600" },
  ];

  const recentDeeds = [
    {
      id: 1,
      title: "Покормила котиков у подъезда",
      author: "Анна К.",
      time: "30 минут назад",
      category: "Помощь животным",
      likes: 8,
    },
    {
      id: 2,
      title: "Помог соседке с тяжёлыми сумками",
      author: "Максим П.",
      time: "2 часа назад",
      category: "Помощь людям",
      likes: 12,
    },
    {
      id: 3,
      title: "Убрал мусор в парке после пикника",
      author: "Елена В.",
      time: "4 часа назад",
      category: "Экология",
      likes: 15,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
        <div className="px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold font-rubik">
                Привет, Анна! 👋
              </h1>
              <p className="text-purple-100 mt-1">Как дела с добрыми делами?</p>
            </div>
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Icon name="Heart" size={24} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-4 -mt-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 mt-6">
        <div className="bg-green-50 rounded-xl p-4 border border-green-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <Icon name="Plus" size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-green-800">
                Сделайте доброе дело сегодня!
              </h3>
              <p className="text-green-600 text-sm">
                Поделитесь своим добрым поступком
              </p>
            </div>
            <button
              onClick={() => setTodayCount((prev) => prev + 1)}
              className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              Добавить
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900 font-rubik">
            Лента добрых дел
          </h2>
          <button className="text-purple-600 text-sm font-medium">
            Все дела
          </button>
        </div>

        <div className="space-y-3">
          {recentDeeds.map((deed) => (
            <div
              key={deed.id}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={18} className="text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-1">
                    {deed.title}
                  </h3>
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <Icon name="User" size={12} className="mr-1" />
                    {deed.author}
                    <span className="mx-2">•</span>
                    <Icon name="Clock" size={12} className="mr-1" />
                    {deed.time}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                      {deed.category}
                    </span>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Icon name="Heart" size={12} />
                      <span className="text-xs">{deed.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Motivational Quote */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl p-4 border border-orange-200">
          <div className="text-center">
            <Icon
              name="Quote"
              size={24}
              className="text-orange-500 mx-auto mb-2"
            />
            <p className="text-gray-700 font-medium mb-1">
              "Маленькие дела, совершённые с большой любовью, приносят мир."
            </p>
            <p className="text-gray-500 text-sm">— Мать Тереза</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
