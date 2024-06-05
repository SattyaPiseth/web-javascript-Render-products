export const cardComponent = (product) => {
   return(`
   <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md rounded-xl w-96 py-5">
   <div class="relative h-80 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500">
       <img
           class="w-full h-full object-cover"
           src="${product?.imageUrl || 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'}"
           alt="Product image" />
   </div>
   <div class="p-6">
       <h5 class="mb-2 text-xl font-semibold text-blue-gray-900">
           ${product?.name || 'Untitled product'}
       </h5>
       <div class="flex items-center">
           <span class="text-base text-red-600 text-md font-semibold line-through">
               $${product?.originPrice || 'No original price available'}
           </span>
           <span class="ml-3 bg-green-100 text-black text-sm font-semibold px-2.5 py-0.5 rounded">
               $${product?.promotionPrice}
           </span>
       </div>
   </div>
   <div class="p-6 pt-0">
       <button
           class="w-full py-3 px-6 text-xs font-bold text-white uppercase transition-all rounded-lg bg-gray-900 shadow-md hover:shadow-lg focus:opacity-85 active:opacity-85"
           type="button">
           Read More
       </button>
   </div>
</div>
   `);
}