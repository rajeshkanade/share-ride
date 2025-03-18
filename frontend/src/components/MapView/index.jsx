import React from "react";

function MapView() {
  return (
    <section className="flex flex-col items-end px-16 pt-6 mx-auto w-full text-sm font-medium text-green-600 bg-neutral-200 pb-[767px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex gap-2 p-3 bg-white rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.08)]">
        <div className="flex shrink-0 my-auto w-2 h-2 bg-green-600 rounded-[26843500px]" />
        <span>ETA: 5 mins</span>
      </div>
    </section>
  );
}

export default MapView;
