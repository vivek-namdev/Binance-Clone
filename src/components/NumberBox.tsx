import { ChangeEvent, FormEvent, useState } from "react";

export default function NumberBox({ titleText, currencyText, defaultValue } : {
  titleText: string,
  currencyText: string,
  defaultValue: string
}) {

  return (
    <div className="bg-paper_weird flex flex-row rounded w-full justify-between h-10">
      <div className="h-full flex">
        <label className="text-text_tertiary ml-2 mr-4 m-auto">
          {titleText}
        </label>
      </div>
      <input type="text" placeholder={defaultValue} className="text-text_primary basis-full focus:border-0 placeholder-text_primary bg-paper_weird py-2 px-3 text-right"/>
      <div className="h-full flex">
        <span className="text-text_primary ml-4 mr-2 m-auto">
          {currencyText}
        </span>
      </div>
    </div>
  );
}