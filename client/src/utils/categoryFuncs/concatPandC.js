"use client";
import useChildCatStore from "@/store/catStores/getChildCat";
import useParentCatStore from "@/store/catStores/getParentsCat";
import { useEffect, useState } from "react";

export default function concatPandC() {
  const [concatedData, setConcatedData] = useState({
    data: null,
    isLoading: true,
  });
  const { parents, isLoading1 } = useParentCatStore((state) => ({
    parents: state.categories,
    isLoading1: state.isLoading,
  }));
  const { childs, isLoading2 } = useChildCatStore((state) => ({
    childs: state.categories,
    isLoading2: state.isLoading,
  }));
  useEffect(() => {
    if (!isLoading1 && !isLoading2) {
      const data = parents.map((parent) => ({
        parent: parent,
        childrens: childs
          .filter((child) => child.name === parent.name)
          .map((child) => child.children)[0],
      }));
      const finalData = { data: data, isLoading: isLoading2 };

      setConcatedData(finalData);
    }
  }, [isLoading1, isLoading2]);

  return concatedData;
}
