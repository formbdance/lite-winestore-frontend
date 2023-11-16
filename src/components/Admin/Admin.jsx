import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { fetchItems, addItem, deleteItem } from "@productslice";
import { useDispatch, useSelector } from "react-redux";

export const Admin = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.itemslist.list);

  const clearForm = {
    named: "",
    country: "",
    type: "",
    alcohol: "",
    litre: "",
    purchases: "",
  };

  const [formData, setFormData] = useState(clearForm);

  const clearFormActivity = () => {
    setFormData(clearForm);
  };

  const handleDeleteItem = (itemId) => {
    dispatch(deleteItem(itemId));
  };

  const handleAddItem = () => {
    dispatch(addItem(formData));
    clearFormActivity();
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  return (
    <section className="text-gray-600">
      <div className="container mx-auto flex items-center justify-center flex-col">
        <h1 className="text-green-600 text-center text-4xl font-semibold my-6">
          Admin panel
        </h1>
        <form onSubmit={handleAddItem}>
          <div className="flex flex-col gap-3 text-center text-lg ">
            <input
              onChange={(e) =>
                setFormData({ ...formData, named: e.target.value })
              }
              className="outline-none rounded p-1"
              placeholder="Wine name (Story of Italy)"
              type="text"
            />
            <select
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
              name=""
              className="outline-none rounded p-1"
            >
              <option value="">Country of origin</option>
              <option value="italy">Italy</option>
              <option value="france">France</option>
              <option value="spain">Spain</option>
            </select>
            <select
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
              name=""
              className="outline-none rounded p-1"
            >
              <option value="">Type of wine</option>
              <option value="red">Red</option>
              <option value="white">White</option>
              <option value="rose">Rose</option>
            </select>
            <div className="flex gap-4">
              <input
                onChange={(e) =>
                  setFormData({ ...formData, alcohol: Number(e.target.value) })
                }
                className="outline-none rounded p-1"
                placeholder="Alcohol (12)"
                type="text"
              />
              <input
                onChange={(e) =>
                  setFormData({ ...formData, litre: Number(e.target.value) })
                }
                className="outline-none rounded p-1"
                placeholder="Litre (0.75)"
                type="text"
              />
              <input
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    purchases: Number(e.target.value),
                  })
                }
                className="outline-none rounded p-1"
                placeholder="Price (3212)"
                type="text"
              />
            </div>
            <input
              type="submit"
              className="bg-green-600 text-white rounded hover:bg-green-500 cursor-pointer p-1"
            />
          </div>
        </form>
        <table className=" mt-5 table-auto container max-w-4xl bg-gray-100 rounded text-black ">
          <thead className="">
            <th className="py-2">Name of</th>
            <th>Country of</th>
            <th>Type of</th>
            <th>Alcohol</th>
            <th>Litre</th>
            <th>Price</th>
          </thead>

          <tbody className="mt-0 text-center">
            {Array.isArray(items) && items.length > 0 ? (
              items.map((i) => (
                <React.Fragment key={i._id}>
                  <tr className=" border-t-2 border-gray-300">
                    <td className="py-2">{i.named}</td>
                    <td className="uppercase">{i.country}</td>
                    <td>{i.type}</td>
                    <td>{i.alcohol}</td>
                    <td>{i.litre}</td>
                    <td>{i.purchases} ₽</td>
                  </tr>
                  <tr className="">
                    <td>
                      <button
                        className="bg-red-600 rounded px-2 p-1 text-white hover:bg-red-500"
                        onClick={() => handleDeleteItem(i._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td>none list</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Link className="absolute top-0 bg-red-700 text-white p-1 z-10" to="/">
        Home
      </Link>
    </section>
  );
};
