import { useState, useEffect } from "react";
import { GoodDeed, CreateDeedRequest } from "@/types/api";
import { apiService } from "@/services/api";

export const useDeeds = (category?: string) => {
  const [deeds, setDeeds] = useState<GoodDeed[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const loadDeeds = async (reset = false) => {
    try {
      setIsLoading(true);
      const currentPage = reset ? 1 : page;

      const response = await apiService.getDeeds(currentPage, 10, category);

      if (response.success && response.data) {
        const newDeeds = response.data.data;
        setDeeds((prev) => (reset ? newDeeds : [...prev, ...newDeeds]));
        setHasMore(response.data.hasMore);
        setPage(currentPage + 1);
      }
    } catch (error) {
      console.error("Failed to load deeds:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const createDeed = async (deedData: CreateDeedRequest): Promise<boolean> => {
    try {
      const response = await apiService.createDeed(deedData);
      if (response.success && response.data) {
        setDeeds((prev) => [response.data!, ...prev]);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Failed to create deed:", error);
      return false;
    }
  };

  const likeDeed = async (deedId: string) => {
    try {
      const response = await apiService.likeDeed(deedId);
      if (response.success) {
        setDeeds((prev) =>
          prev.map((deed) =>
            deed.id === deedId
              ? {
                  ...deed,
                  likes: deed.isLiked ? deed.likes - 1 : deed.likes + 1,
                  isLiked: !deed.isLiked,
                }
              : deed,
          ),
        );
      }
    } catch (error) {
      console.error("Failed to like deed:", error);
    }
  };

  useEffect(() => {
    loadDeeds(true);
  }, [category]);

  return {
    deeds,
    isLoading,
    hasMore,
    loadMore: () => loadDeeds(false),
    refresh: () => loadDeeds(true),
    createDeed,
    likeDeed,
  };
};
