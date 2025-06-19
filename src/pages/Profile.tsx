import Icon from "@/components/ui/icon";

const Profile = () => {
  const user = {
    name: "Анна Петрова",
    nickname: "@anna_dobro",
    joinDate: "Март 2024",
    totalDeeds: 23,
    thisWeek: 5,
    streak: 7,
  };

  const recentDeeds = [
    {
      id: 1,
      title: "Покормила уличных котов",
      date: "Сегодня",
      category: "Животные",
    },
    {
      id: 2,
      title: "Помогла соседке с сумками",
      date: "Вчера",
      category: "Помощь",
    },
    {
      id: 3,
      title: "Собрала мусор в парке",
      date: "2 дня назад",
      category: "Экология",
    },
  ];

  const achievements = [
    {
      name: "Первые шаги",
      desc: "Первое доброе дело",
      icon: "Star",
      earned: true,
    },
    { name: "Активист", desc: "10 добрых дел", icon: "Award", earned: true },
    { name: "Серия", desc: "7 дней подряд", icon: "Flame", earned: true },
    { name: "Супергерой", desc: "50 добрых дел", icon: "Crown", earned: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
        <div className="px-4 py-8">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Icon name="User" size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-rubik">{user.name}</h1>
              <p className="text-purple-100">{user.nickname}</p>
              <p className="text-purple-200 text-sm">
                С нами с {user.joinDate}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 -mt-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-600">
                {user.totalDeeds}
              </div>
              <div className="text-gray-600 text-sm">Всего дел</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">
                {user.thisWeek}
              </div>
              <div className="text-gray-600 text-sm">На этой неделе</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">
                {user.streak}
              </div>
              <div className="text-gray-600 text-sm">Дней подряд</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 mt-6 space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 font-rubik">
            Достижения
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 ${
                  achievement.earned
                    ? "border-yellow-300 bg-yellow-50"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      achievement.earned ? "bg-yellow-400" : "bg-gray-300"
                    }`}
                  >
                    <Icon
                      name={achievement.icon as any}
                      size={16}
                      className={
                        achievement.earned ? "text-yellow-800" : "text-gray-500"
                      }
                    />
                  </div>
                  <div>
                    <div
                      className={`font-medium text-sm ${
                        achievement.earned ? "text-yellow-800" : "text-gray-500"
                      }`}
                    >
                      {achievement.name}
                    </div>
                    <div
                      className={`text-xs ${
                        achievement.earned ? "text-yellow-600" : "text-gray-400"
                      }`}
                    >
                      {achievement.desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 font-rubik">
            Последние дела
          </h2>
          <div className="space-y-3">
            {recentDeeds.map((deed) => (
              <div
                key={deed.id}
                className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
              >
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={16} className="text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{deed.title}</div>
                  <div className="text-gray-500 text-sm">
                    {deed.date} • {deed.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 font-rubik">
            Настройки
          </h2>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <Icon name="Bell" size={20} className="text-gray-600" />
                <span className="text-gray-900">Уведомления</span>
              </div>
              <Icon name="ChevronRight" size={16} className="text-gray-400" />
            </button>
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <Icon name="Shield" size={20} className="text-gray-600" />
                <span className="text-gray-900">Приватность</span>
              </div>
              <Icon name="ChevronRight" size={16} className="text-gray-400" />
            </button>
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <Icon name="HelpCircle" size={20} className="text-gray-600" />
                <span className="text-gray-900">Помощь</span>
              </div>
              <Icon name="ChevronRight" size={16} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
