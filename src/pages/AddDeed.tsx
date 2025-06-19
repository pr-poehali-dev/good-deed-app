import { useState } from "react";
import Icon from "@/components/ui/icon";

const AddDeed = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const categories = [
    { id: "help-people", name: "Помощь людям", icon: "HandHeart" },
    { id: "help-animals", name: "Помощь животным", icon: "Heart" },
    { id: "environment", name: "Экология", icon: "Leaf" },
    { id: "community", name: "Общество", icon: "Users" },
    { id: "other", name: "Другое", icon: "Plus" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !category) return;

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setTitle("");
      setDescription("");
      setCategory("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white shadow-sm border-b">
        <div className="px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900 font-rubik">
            Добавить доброе дело
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            Поделитесь своим добрым поступком
          </p>
        </div>
      </div>

      <div className="p-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Название доброго дела
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Например: Помог соседке с покупками"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors"
            />
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Описание
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Расскажите подробнее о своём добром поступке..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors resize-none"
            />
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Категория
            </label>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategory(cat.id)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    category === cat.id
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        category === cat.id ? "bg-purple-500" : "bg-gray-100"
                      }`}
                    >
                      <Icon
                        name={cat.icon as any}
                        size={16}
                        className={
                          category === cat.id ? "text-white" : "text-gray-600"
                        }
                      />
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        category === cat.id
                          ? "text-purple-900"
                          : "text-gray-700"
                      }`}
                    >
                      {cat.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Местоположение
            </label>
            <button
              type="button"
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-400 transition-colors"
            >
              <Icon name="MapPin" size={20} className="text-gray-500" />
              <span className="text-gray-600">Указать на карте</span>
            </button>
          </div>

          <button
            type="submit"
            disabled={!title || !description || !category}
            className="w-full bg-purple-500 text-white py-4 rounded-xl font-medium text-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-purple-600 transition-colors shadow-lg"
          >
            Поделиться добрым делом
          </button>
        </form>

        {showSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 mx-4 text-center animate-scale-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Check" size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Спасибо!</h3>
              <p className="text-gray-600">Ваше доброе дело добавлено</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddDeed;
