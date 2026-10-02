import { Bookmark } from "lucide-react";
import React, { useEffect, useState } from "react";

const AddtoWishlist = ({ productId }) => {
  const [add, setAdd] = useState(false);

  // Check if product is already in wishlist
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
      .map(String);

    setAdd(wishlist.includes(String(productId)));
  }, [productId]);

  const handleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
      .map(String);
    const id = String(productId);

    if (wishlist.includes(id)) {
      // Remove product ID
      const updatedWishlist = wishlist.filter(
        (wishlistId) => wishlistId !== id
      );

      localStorage.setItem(
        "wishlist",
        JSON.stringify(updatedWishlist)
      );

      setAdd(false);
    } else {
      // Add product ID
      const updatedWishlist = [...wishlist, id];

      localStorage.setItem(
        "wishlist",
        JSON.stringify(updatedWishlist)
      );

      setAdd(true);
    }
  };

  return (
    <button
      onClick={handleWishlist}
      className="h-10 w-10 flex items-center justify-center rounded bg-slate-800 border border-gray-600"
    >
      <Bookmark
        size={20}
        className={
          add
            ? "text-green-500 fill-green-500"
            : "text-gray-500"
        }
      />
    </button>
  );
};

export default AddtoWishlist;