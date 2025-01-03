'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Blog } from '../../components/Blog';
import blogData from './blogjson';
import Footer from '../../components/Footer';

const page = () => {
  const postsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogData.length / postsPerPage);

  const paginate = (pageNumber) => {
    // Ensure the requested page is within the valid range
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      console.log('first');
      setCurrentPage(pageNumber);
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 3;

    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxPageNumbersToShow / 2),
    );
    const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

    for (let i = startPage; i <= endPage; i += 1) {
      pageNumbers.push(
        <div
          key={i}
          className={`px-4 ${
            currentPage === i ? 'text-gray-500 cursor-not-allowed' : ''
          }`}
          onClick={() => paginate(i)}
        >
          {i}
        </div>,
      );
    }

    return pageNumbers;
  };

  return (
    <div className="bg-black relative " style={{ zIndex: 999 }}>
      <div className="text-5xl flex justify-center font-semibold items-center pb-10 pt-5  text-white">
        <div className="bg-purple-500 w-20 h-3" />
        <div className="px-3">Blogs</div>

        <div className="bg-purple-500 w-20 h-3" />
      </div>
      <div className="h-full">
        {currentPosts.map((item) => (
          <Link key={item.index} href={`/Blog/${item.id}`}>
            <Blog key={item.index} Data={item} />
          </Link>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="flex md:justify-between justify-center text-white md:w-[48rem] xl:w-[65rem] w-96 ">
          <div className="md:flex  mt-5 text-2xl hidden">See More....</div>
          <div className="flex mt-5 cursor-pointer ">
            <div
              className={`px-4 ${
                currentPage === 1 ? 'text-gray-500 cursor-not-allowed' : ''
              }`}
              onClick={() => paginate(1)}
            >
              &lt;&lt;
            </div>
            <div
              className={`px-4 ${
                currentPage === 1 ? 'text-gray-500 cursor-not-allowed' : ''
              }`}
              onClick={() => paginate(currentPage - 1)}
            >
              &lt;
            </div>
            {renderPageNumbers()}
            <div
              className={`px-4 ${
                currentPage === totalPages
                  ? 'text-gray-500 cursor-not-allowed'
                  : ''
              }`}
              onClick={() => paginate(currentPage + 1)}
            >
              &gt;
            </div>
            <div
              className={`px-4 ${
                currentPage === totalPages
                  ? 'text-gray-500 cursor-not-allowed'
                  : ' cursor-pointer'
              }`}
              onClick={() => paginate(totalPages)}
            >
              &gt;&gt;
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
