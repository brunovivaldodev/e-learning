import React from "react";
import {
  CurrencyDollarSimple,
  CreditCard,
} from "@phosphor-icons/react/dist/ssr";
import { dataTransformation } from "@/helpers";

interface props {
  title: number;
  price: string;
  date: string;
}

export default function Purchase({ title, price, date }: props) {
  return (
    <div className="border border-gray-100 mb-3">
      <div className="flex">
        <div className="flex flex-col justify-center">
          <p className="text-lg">{dataTransformation(date)}</p>
          <p className="text-lg">{title}</p>

          <div className="flex mt-2 mb-2">
            <div className="flex items-center mr-2">
              <CurrencyDollarSimple size={20} color="orange" />
              <p className="text-xs text-gray-600 ml-1">{price} AKZ</p>
            </div>

            <div className="flex items-center mr-2">
              <CreditCard size={20} color="green" />
              <p className="text-xs text-gray-600 ml-1">Cartão de Crédito</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
