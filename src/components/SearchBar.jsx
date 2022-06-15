import React from "react";

export default function SearchBar() {
  return (
    <div className="w-full bg-orange-100 py-2">
      <div className="w-full md:max-w-screen-md mx-auto">
        <div className="form-control">
          <input
            // onChange={({ target }) => setName(() => target.value)}
            // value={name}
            type="text"
            className="mx-auto input input-bordered input-sm w-full max-w-xs" />
        </div>

        <div className="flex justify-center">
          <div className="form-control px-1">
            <label className="label cursor-pointer">
              <input type="radio" name="radio-6" className="radio radio-primary" checked />
              <span className="label-text pl-1">Ingredient</span>

            </label>
          </div>
          <div className="form-control px-1">
            <label className="label cursor-pointer">
              <input type="radio" name="radio-6" className="radio radio-primary" />
              <span className="label-text pl-1">Name</span>

            </label>
          </div>
          <div className="form-control px-1">
            <label className="label cursor-pointer">
              <input type="radio" name="radio-6" className="radio radio-primary" />
              <span className="label-text pl-1">First Letter</span>
            </label>
          </div>
        </div>
        <div className="mx-auto flex justify-center">
          <button class="btn btn-primary btn-sm inline-block">Search</button>
        </div>
      </div>
    </div>
  )
}